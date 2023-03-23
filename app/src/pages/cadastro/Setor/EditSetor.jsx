import React, { useState, useEffect } from 'react';
import * as C from '../style';
import Input from '../../../components/input/input';
import Select from '../../../components/select/Select';
import ButtonVoltar from '../../../components/button/buttonVoltar';

import { useParams } from 'react-router-dom';
import ButtonCad from '../../../components/button/ButtonCad';


export const EditarSetor = () => {
  const url="http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs"
  //const url = "http://localhost:5000/organs";
 // const url =' http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs'
 const urlR='http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/sectors';
//const urlR='http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/sectors'
 // const urlR = "http://localhost:5000/sectors";
  //consultado
  const [organ, setOrgans] = useState([]);
  const [sectors, setSectors] = useState([]);
  //inserindo os dados

  const [name, setName] = useState("");
  const [organ_id, setOrgan_id] = useState("");

  const {id}=useParams()
 
  useEffect(() => {
    const getOrgans = async () => {
    
      await fetch("http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs")
      // await fetch("http://localhost:5000/organs/")
           .then((Response) => Response.json())
           .then((ResponseJson) => {
           
          setOrgans(ResponseJson)
           })
   
       }
    const GetSector = async () => {
    
     await fetch('http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/sectors'+id)
    // await fetch("http://localhost:5000/sectors/"+id)
        .then((Response) => Response.json())
        .then((ResponseJson) => {
         setSectors(ResponseJson)
        })

    }
    
    
    getOrgans()
    
     GetSector()
}, [id])
  //console.log(sectors)
  
  console.log("oi",organ)
  const Edit = async e => {
   
    e.preventDefault();
 

 await fetch("http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/sectors/"+id, {
 // await fetch("http://localhost:5000/sectors/"+id, {
      method: "PUT",
    //headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, organ_id})
    }).then((Response) => Response.json())
       .then((ResponseJson) => {
      setSectors(ResponseJson)
    //  console.log(ResponseJson)
    })
      
  }

  return (
    <C.Container>
      <div className='editForm'>
        <ButtonVoltar to="/Cadastro/Setor/" 
        text="Voltar"/>


      <form onSubmit={Edit}>

        <Select text="Orgão"
          name="organ_id"
          options={organ}
          onChange={e => setOrgan_id(e.target.value)}
          value={organ_id}
        />

        <Input type="text"
          text="Setor"
          value={name}
          name="name"
          placeholder="Informe qual é o setor"
          onChange={e => setName(e.target.value)}

        />

        <ButtonCad text="Salvar"
        />

          </form>
        
        
      </div>

      
    </C.Container>
  )
}