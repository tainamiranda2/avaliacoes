import React, { useState, useEffect  } from 'react';
import * as C from '../style';
import Button from '../../../components/button/button';
import Input from '../../../components/input/input';
import Car from '../../../components/card/Cad';

//import Card from '../../components/card/Card';

export const ServiceTypeCad = () => {

 //  const urlR='http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type';
 // const urlR = "http://localhost:5000/services_type";
 const urlR='http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type';
  const [service_type, setService_type] = useState([]);
  
  const [name,setName]= useState("");
  const [status,setStatus] =useState({
    type:'',
    messagem:''
  })
//metodo get
   const  GetServiceType= async()=>{
         fetch(urlR)
         .then((Response)=>Response.json())
         .then((ResponseJson)=>{
          if(ResponseJson.status===404){
            ''
          }else{
            setService_type(ResponseJson)  
          }
         
   }) 
             }
             
    
    const submit =async (e) => {
        e.preventDefault();
        
        if (!validation()) return;
        const servicesType = {
          name: name,
        }
      
          
          const res = await fetch(urlR, {
            method: "POST",
        //   headers: { "Content-Type": "application/json" },
            body: JSON.stringify(servicesType),
        });
        const addServicesType= await res.json();
    //carregamento de forma dinamica
        setService_type((prevServicesType)=>[...prevServicesType, addServicesType])
        setName("")

        GetServiceType()
        function validation (){
          
          if(!name)
          return setStatus({
            type:'error',
           messagem: 'Necessário preencher o campo name do tip de serviç'});    
          return true;
          
      }
      }

    const remove = async(id) =>{
      // e.preventDefault()
   

     // const res = await fetch(`http://localhost:5000/services_type/${id}`, {
    //    const res = await fetch(` http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type/${id}`, {
      const res = await fetch(`http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type/${id}`, {
           method: "DELETE",
          
          //headers: { "Content-Type": "application/json" },
           body: JSON.stringify(service_type),
       })
       GetServiceType()
   
   }
   useEffect(() => {
    GetServiceType()
    
  }, []);
    return(
        <C.Container>
          <h1>Escolha um tipo de serviço para cadastrar</h1>
        <div className='ServiceForm'>
     <div className='cadItem'>
        <form onSubmit={submit}>
        <div className='mensagem'>
                    {status.type==='sucess' ? <p>
                    {status.messagem}</p> : ''}
                    {status.type==='error' ? <p>
                    {status.messagem}</p> : ''}
                </div>
        <Input type="text"
        text="Tipo de serviço"
        name="name"
        placeholder="Informe qual é o tipo serviço"
        onChange={(e)=> setName(e.target.value)}
        value={name}
          />
                 <Button text="Criar"
            />
   
            </form>
            </div>
          
        </div> 
       
{service_type.length? (
<>
<h2>Lista de tipos de Serviços criados</h2> 
{service_type.map((serviceT) => (
               <Car
               to={"/Cadastro/Servico_tipo/Editar/"+serviceT.id}
                key={serviceT.id}
                 text={serviceT.name}
                 HandleDelete={()=>remove(serviceT.id)}

               />
                ))}
</>
):(
<h3>Nenhum tipo de serviço foi cadastrado</h3>
)}
        

          
        </C.Container>
    )
}