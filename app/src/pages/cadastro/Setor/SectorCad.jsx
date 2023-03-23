import React, { useState, useEffect } from 'react';
import * as C from '../style';
import Button from '../../../components/button/button';
import Input from '../../../components/input/input';
import Select from '../../../components/select/Select';
import Car from '../../../components/card/Cad';

export const CriarCad = () => {
//const url="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs"
//const url = "http://localhost:5000/organs";
//const urlR='http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/sectors';
//const urlR = "http://localhost:5000/sectors";
const url ="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs"
const urlR="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/sectors"
  //consultado
  const [organ, setOrgans] = useState([]);

  const [sectors, setSectors] = useState([]);
  //inserindo os dados

  const [name, setName] = useState("");
  const [organ_id, setOrgan_id] = useState("");

  const [status,setStatus] =useState({
    type:'',
    messagem:''
  })


    //sector
    const GetSector =async( )=> {
     fetch(urlR)
     .then((Response)=>Response.json()) 
      .then((ResponseJson)=>{
        if(ResponseJson.status===404){
          ''
        }else{
          setSectors(ResponseJson)
        }
       
    })
     
    }
   // fetchDataSector();
    //organs
    const getOrgans=async()=> {
      fetch(url)
      .then((Response) => Response.json())
          .then((ResponseJson) => {
            if(ResponseJson.status===404){
              ''
            }else{
              setOrgans(ResponseJson)
            }
         
          })
  }

  const submit = async (e) => {
    e.preventDefault();
    // handleSubmit(organs);
    if (!validation()) return;
    const sectors = {
      name: name,
      organ_id: organ_id
    }


    const res = await fetch(urlR, {
      method: "POST",
     // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sectors),
    });
    const addSector = await res.json();
    //carregamento de forma dinamica
    setSectors((prevSector) => [...prevSector, addSector])
    
    setName("")
    setOrgan_id("")
    GetSector()

    function validation (){
          
      if(!name)
      return setStatus({
        type:'error',
       messagem: 'Necessário preencher o campo name'});
    
       if(!organ_id)
       return setStatus({
         type:'error',
        messagem: 'Necessário preencher o campo organ_id'});
    
      return true;
      }
    
  }
  
  const remove = async(id) =>{
 //   const res = await fetch(`http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/sectors/${id}`, {
    // const res = await fetch(`http://localhost:5000/sectors/${id}`, {
      const res = await fetch(`http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/sectors/${id}`, {
         method: "DELETE",
      // headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sectors),
     })
    
     GetSector();
 
 }

  
 useEffect(() => {
  GetSector()
 getOrgans()
}, []);
  return (
    <C.Container>
       <h1>Escolha um Setor para cadastrar</h1>
    
      <div className='cadItem'>
       
      <form onSubmit={submit}>
    <div className='mensagem'>
    {status.type==='sucess' ? <p>
    {status.messagem}</p> : ''}
    {status.type==='error' ? <p>
    {status.messagem}</p> : ''}
    </div>

        <Select text="Orgão"
          name="organ_id"
          options={organ}
          onChange={(e) => setOrgan_id(e.target.value)}
          value={organ_id}
        />

        <Input type="text"
          text="Setor"
          value={name}
          name="name"
          placeholder="Informe qual é o setor"
          onChange={(e) => setName(e.target.value)}

        />

        <Button text="Criar"
        />

          </form>
         
    
     </div>
    
     {sectors.length? (
      <>
       <h2>Lista de setores cadastrados </h2>
      {sectors.map((setor) => (
          <Car key={setor.id}
            to={"/Cadastro/Setor/Editar/"+setor.id}
            text={setor.name}
            HandleDelete={()=>remove(setor.id)}/>
        ))}
      </>
     ):(
<h3>Nenhum setor foi cadastrado</h3>
     )}
        

    </C.Container>
  )
}