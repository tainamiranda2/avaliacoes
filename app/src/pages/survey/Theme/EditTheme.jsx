import React, { useState, useEffect } from 'react';
import * as C from '../style';
import Input from '../../../components/input/input';
import Select from '../../../components/select/Select';
import ButtonVoltar from '../../../components/button/buttonVoltar';

import { useParams } from 'react-router-dom';
import ButtonCad from '../../../components/button/ButtonCad';


export const EditarTheme = () => {
    const url = "http://localhost:5000/services_type"
    const urlT="http://localhost:5000/themes"
  //const url ="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type"
  //const urlT="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes" 
  const [themes, setTheme]=useState([]);
  const [serviceType, setServiceType]=useState([]);

    const [name,setName]=useState("")

    const [service_type_id, setServiceType_id] = useState("");
  

  const {id}=useParams()
  
  useEffect(() => {
  const GetServiceT =async()=> {

    fetch(url)
  .then((Response)=>Response.json())
  .then((ResponseJson)=>(
    setServiceType(ResponseJson)
  ))
  
    }
    
     const GetTheme=async()=>{
      fetch(urlT)
      .then((Response)=>Response.json())
      .then((ResponseJson)=>(
        setTheme(ResponseJson)
      ))
        }
        GetServiceT();
        GetTheme()
}, [id])
  //console.log(sectors)
  
  //console.log(nameSetor)
  const Edit = async e => {
   
    e.preventDefault();
 

 //await fetch("http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/sectors/"+id, {
  await fetch("http://localhost:5000/themes/"+id, {
      method: "PUT",
    headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name,service_type_id})
    }).then((Response) => Response.json())
   .then((ResponseJson) => {
      setTheme(ResponseJson)
    //  console.log(ResponseJson)
    })
      
  }

  return (
    <C.Container>
      <div className='editForm'>
        <ButtonVoltar to="/Perguntas/Themes" 
        text="Voltar"/>


      <form onSubmit={Edit}>
      <Select
          text="Tipos de serviços"
          name="service_type_id"
          options={serviceType}
        onChange={(e)=>setServiceType_id(e.target.value)}
          value={service_type_id}  
            />      

        <Input type="text"
         text="Tema"
         name='name'
         placeholder="Informe qual é o tema"
         onChange={(e)=>setName(e.target.value)}
         value={name}
                />

        <ButtonCad text="Salvar"
        />

          </form>
        
      </div>
    
    </C.Container>
  )
}