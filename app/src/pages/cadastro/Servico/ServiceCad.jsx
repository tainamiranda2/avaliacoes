import React, { useState, useEffect } from 'react';
import * as C from '../style';
import Button from '../../../components/button/button';
import Input from '../../../components/input/input';
import Select from '../../../components/select/Select';
import Car from '../../../components/card/Cad';

export const ServiceCad = () => {
 // const url = "http://localhost:5000/sectors";
// const url="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/sectors"

 // const urlR='http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services';
  //const urlR = "http://localhost:5000/services";

//const urlS='http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type';
//const urlS = "http://localhost:5000/services_type";

const url =" http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/sectors"
const urlR=" http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services"
const urlS=" http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type"

  const [sectors, setSectors] = useState([]);
  const [serviceType, setServiceType]=useState([]);
  const [services, setService] = useState([]);

  const [name, setName] = useState("");
  const [sector_id, setSector_id] = useState("");
  const [service_type_id, setServiceType_id] = useState("");

  const [status,setStatus] =useState({
    type:'',
    messagem:''
  })
  //metodo get
  
  const GetSector =async( )=> {
    fetch(url)
    .then((Response)=>Response.json()) 
     .then((ResponseJson)=>{
      if(ResponseJson.status===404){
          ''
      }else{
       setSectors(ResponseJson)
      }
  })
    
   }

 const GetService =async()=> {

    fetch(urlR)
.then((Response)=>Response.json())
.then((ResponseJson)=>{
if(ResponseJson.status===404){
  ''
}else{
  setService(ResponseJson)
}

 })
 }

const GetServiceType =async()=> {

  fetch(urlS)
.then((Response)=>Response.json())
.then((ResponseJson)=>{
if(ResponseJson.status===404){
  ''
}else{
  setServiceType(ResponseJson)

}
})}
  

  const submit = async (e) => {
    e.preventDefault();
    if (!validation()) return;

    const services = {
      name: name,
      sector_id: sector_id,
      service_type_id:service_type_id
    }
    

    const res = await fetch(urlR, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(services),
    });
    const addServices = await res.json();
    //carregamento de forma dinamica
    setService((prevService) => [...prevService, addServices])
    //limpando os campos
    setName("");
    setSector_id("");
    setServiceType_id("");

    GetService()

    function validation (){
          
      if(!name)
      return setStatus({
        type:'error',
       messagem: 'Necessário preencher o campo name'});

       if(!sector_id)
       return setStatus({
         type:'error',
        messagem: 'Necessário preencher o selecionar o campo setor '});
    

      if(!service_type_id)
      return setStatus({
        type:'error',
       messagem: 'Necessário preencher o selecionar o campo um tipo de serviço '});
   
     return true;
      
      }
  }

  const remove = async(id) =>{
 
    // const res = await fetch(`http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services/${id}`, {
     // const res = await fetch(`http://localhost:5000/services/${id}`, {
      const res = await fetch(`http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services/${id}`, {
      
         method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(services),
     })
     GetService()
 
 }

 useEffect(() => {
  GetSector()
  GetServiceType()
  GetService()

}, []);

  return (
    <C.Container>
       <h1>Escolha um Serviço para cadastrar</h1>
      <div className='ServiceForm'>
      <div className='cadItem'>
      <form onSubmit={submit}>
      <div className='mensagem'>
    {status.type==='sucess' ? <p>
    {status.messagem}</p> : ''}
    {status.type==='error' ? <p>
    {status.messagem}</p> : ''}
    </div>

        <Select text="Setores"
          name="sector_id"
          options={sectors}
          onChange={(e) => setSector_id(e.target.value)}
          value={sector_id}
        />
 <Select
          text="Tipos de serviços"
          name="service_type_id"
          options={serviceType}
        onChange={(e)=>setServiceType_id(e.target.value)}
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

          </form>
          </div>
      </div>  

   
    

 {services.length?(
<>
<h2>Lista de Serviços criados</h2> 
{services.map((service) => (
          <Car
          to={"/Cadastro/Servico/Editar/" +service.id}
            key={service.id}
            text={service.name}
            HandleDelete={()=>remove(service.id)}
          />
        ))}
</>
 ):(
<h3>Nenhum serviço cadastrado</h3>
 )}

      
    </C.Container>
  )
}