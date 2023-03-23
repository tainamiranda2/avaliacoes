import React , { useState, useEffect } from 'react';
import Input from '../../../components/input/input';
import Select from '../../../components/select/Select';
import Button from '../../../components/button/button';
import * as C from '../style';

import { useParams } from 'react-router-dom';
export const EditService = () => {
  const url="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services/"
   const urlS="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/sectors"
   const urlST="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type"
  const [services, setService] = useState([]);
  const [sectors, setSectors] = useState([]);

  const [serviceType, setServiceType]=useState([]);

  const [name, setName] = useState("");
  const [sector_id, setSector_id] = useState("");
  const [service_type_id, setServiceType_id] = useState("");

  const {id}=useParams()

  useEffect(() => {
    const Getservices = async () => {
    
     await fetch( url+id)
   //  await fetch("http://localhost:5000/services/"+id)
        .then((Response) => Response.json())
        .then((ResponseJson) => {
        
       setService(ResponseJson)
    // console.log("oi",ResponseJson)
        })

    }
    
    const getSetores = async () => {
    
      await fetch(urlS)
    // await fetch("http://localhost:5000/sectors")
         .then((Response) => Response.json())
         .then((ResponseJson) => {
        setSectors(ResponseJson)
    // console.log("oi",ResponseJson)
         })
 
     }
     const getServicesType = async () => {
    
      await fetch(urlST)
    // await fetch("http://localhost:5000/services_type")
         .then((Response) => Response.json())
         .then((ResponseJson) => {
        setServiceType(ResponseJson)

         })
 
     }
     
   getServicesType()
   getSetores()
   Getservices()
}, [id])
    
const Edit = async e => {
   
  e.preventDefault();

  // handleSubmit(organs);

await fetch("http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services/"+id, {
//await fetch("http://localhost:5000/services/"+id, {
    method: "PUT",
  // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name,service_type_id, sector_id})
  }).then((Response) => Response.json())
 .then((ResponseJson) => {
    setService(ResponseJson)
  //  console.log(ResponseJson)
  })
    
}
    return(
        <C.Container>
             <form onSubmit={Edit}>
<div className='editForm'>
<Select text="Setores"
  name="sector_id"
  options={sectors}
  onChange={(e) => setSector_id(e.target.value)}
  value={sector_id}
/>

<Select text="Tipos de servico"
  name="service_type_id"
  options={serviceType}
  onChange={(e) => setServiceType_id(e.target.value)}
  value={service_type_id}
/>

<Input type="text"
  text="Serviço"
  name="name"
  placeholder="Informe qual é o serviço"
  onChange={(e) => setName(e.target.value)}
  value={name}
/>

<Button text="Criar"
/>
</div>
  </form>
        </C.Container>
    )
}