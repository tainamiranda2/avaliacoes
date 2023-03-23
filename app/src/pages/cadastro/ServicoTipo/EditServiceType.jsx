import React, { useState, useEffect } from 'react';
import * as C from '../style';
import Button from '../../../components/button/button';
import Input from '../../../components/input/input';

import { useParams } from 'react-router-dom';


export const EditarServiceType = () => {
  //const url="http://local.apiavaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type"
  const url = "http://localhost:5000/services_type";

  const [services_type, setServices_type] = useState([]);
  //inserindo os dados

  const [name, setName] = useState("");
  

  const {id}=useParams()
  //sector
  //console.log('oi',organ)
  useEffect(() => {
    const GetSector = async () => {
    
     await fetch("http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type/"+id)
     //await fetch("http://localhost:5000/sectors/"+id)
        .then((Response) => Response.json())
        .then((ResponseJson) => {

       setName(ResponseJson)
 
        })

    }
    
     GetSector()
}, [id])
  //console.log(sectors)
  
  //console.log(nameSetor)
  const Edit = async e => {
   
    e.preventDefault();
 
    // handleSubmit(organs);

 //await fetch("http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type/"+id, {
  await fetch("http://localhost:5000/services_type/"+id, {
      method: "PUT",
    headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name})
    }).then((Response) => Response.json())
   .then((ResponseJson) => {
     setServices_type(ResponseJson)
    //  console.log(ResponseJson)
    })
      
  }

  return (
    <C.Container>
      <div className='editForm'>
    

      <form onSubmit={Edit}>

        <Input type="text"
          text="tipo de serviço"
          value={name}
          name="name"
          placeholder="Informe qual é o setor"
          onChange={e => setName(e.target.value)}

        />

        <Button text="Salvar"
        />

          </form>
        
        
      </div>

      
    </C.Container>
  )
}