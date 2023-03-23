import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../components/button/button';
import ButtonVoltar from '../../../components/button/buttonVoltar';
import Input from '../../../components/input/input';
import * as C from '../style';

export const Editar = () => {
  // const url = "http://localhost:5000/organs"; 
const url="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs"
//const url ="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs"
    const [organs, setOrgans] = useState([]);
   const [name, setName] = useState("");

   
   const {id}=useParams();

   useEffect(() => {      
   const getOrgans =async()=>{
         // await fetch("http://localhost:5000/organs/"+id)
        await  fetch('http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs/'+id)
            .then((Response) => Response.json())
            .then((ResponseJson) => (
               // console.log(ResponseJson)
            setOrgans(ResponseJson)
        ))
   }

    getOrgans()   
   },[id])

   //console.log("sou o array de organs",organs)
   const Edit = async e => {
   
    e.preventDefault();
 
 await fetch('http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs/'+id, {
  //await fetch("http://localhost:5000/organs/"+id, {
      method: "PUT",
    //headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name})
    }).then((Response) => Response.json())
   .then((ResponseJson) => {
      setOrgans(ResponseJson)
    //  console.log(ResponseJson)
    })
      
  }
    return (
        <C.Container>
<div className='editForm'>
            <ButtonVoltar to="/Cadastro/Organ" text="Voltar"/>
           <form onSubmit={Edit}>
            <Input
            type="text"
            text="Orgão"
            value={name}
            name="name"
            placeholder="Informe qual é o orgão"
            onChange={e => setName(e.target.value)}
            />
          
          <Button text="Salvar"
        />
        </form>
        </div>
        </C.Container>
    )
}

 