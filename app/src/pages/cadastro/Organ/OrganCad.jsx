import React, { useEffect, useState } from 'react';
import * as C from '../style';
import Button from '../../../components/button/button';
import Input from '../../../components/input/input';

import Car from '../../../components/card/Cad';

export const CriarOrgan = () => {
   // const url = "http://localhost:5000/organs";
 // const url = "http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs";
const url ="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs"
   //pegando o valor do orgao para ser rederizado
    const [organs, setOrgans] = useState([]);

    const [name, setName] = useState("")
    const [status,setStatus] =useState({
        type:'',
        messagem:''
      })
     
    const getOrgans=async()=> {
        fetch(url)
        .then((Response) => Response.json())
            .then((ResponseJson) => {
                if(ResponseJson.status ===404 ){
                   console.log('')
                //   setOrgans()
                }else{
                 setOrgans(ResponseJson)
                }
          
            })
    }

    const submit = async (e) => {
        e.preventDefault();
        //fazendo uma validaação
        if (!validation()) return;

        const organs = {name:name}

            const res = await fetch(url, {
            method: "POST",
          // headers: { "Content-Type": "application/json" },
            body: JSON.stringify(organs)
        });
//console.log(organs)
        const addOrgans = await res.json();
    //carregamento de forma dinamica
    setOrgans((prevOrgans) => [...prevOrgans, addOrgans])
       setName("")
       getOrgans()

       function validation (){
          
            if(!name)
            return setStatus({
              type:'error',
             messagem: 'Necessário preencher o campo name do orgão'});    
            return true;
            
        }
        
    }

    const remove = async (id) => {
    
     // const res = await fetch(`http://localhost:5000/organs/${id}`, {
        // const res = await fetch(`http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs/${id}`, {
          const res=await fetch(`http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs/${id}`,{
        method: "DELETE",
         //   headers: { "Content-Type": "application/json" },
            body: JSON.stringify(organs),
        })
        getOrgans()
    }

    
        useEffect(() => {
         getOrgans()   
        },[])
//console.log( organs.length)
        return (
            <C.Container>
                <h1>Escolha um orgão para cadastrar</h1>
                <p>Os orgãos são os que vão receber a avaliação </p>
                <div className='cadItem'>
                 <form onSubmit={submit}>

                 <div className='mensagem'>
                    {status.type==='sucess' ? <p>
                    {status.messagem}</p> : ''}
                    {status.type==='error' ? <p>
                    {status.messagem}</p> : ''}
                </div>

                        <Input type="text"
                            text="Orgão"
                            value={name}
                            name="name"
                            placeholder="Informe qual orgão"
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <Button text="Cadastrar"
                        />

                </form>
                </div>
                <h2>Lista de orgãos cadastrados </h2>
                {organs.length ? 
                (
       <>
        {organs.map((orgao) => (
                
            <Car
                key={orgao.id}
                to={"/Cadastro/Organ/Editar/"+orgao.id}
                text={orgao.name}
                HandleDelete={() => remove(orgao.id)} />
        ))}
        </>
       ):(
<h3>Nenhum orgão foi cadastrado</h3>
       )}
              
                                 
            </C.Container>
        )
    }

  