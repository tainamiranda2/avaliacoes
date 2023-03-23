import React, { useEffect, useState } from 'react';
import * as C from '../style';
import Button from '../../../components/button/button';
import Input from '../../../components/input/input';
import Select from '../../../components/select/Select';
import Car from '../../../components/card/Cad';

export const CriarTheme= () => {
 // const url = "http://localhost:5000/services_type"
  //const urlT="http://localhost:5000/themes"
//const url ="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type"
//const urlT="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes" 
const url ="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type"
const urlT="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes" 

const [serviceType, setServiceType]=useState([]);
  const [theme, setTheme] = useState([]);

  const [name,setName]=useState("")
  const [service_type_id, setServiceType_id] = useState("");

  const [status,setStatus] =useState({
    type:'',
    messagem:''
  })

const GetServiceT =async()=> {

  fetch(url)
.then((Response)=>Response.json())
.then((ResponseJson)=>{
  if(ResponseJson.status ===404 ){
''
  }else{
    setServiceType(ResponseJson)
  }

})

  }
  
   const GetTheme=async()=>{
    fetch(urlT)
    .then((Response)=>Response.json())
    .then((ResponseJson)=>{
      if(ResponseJson.status ===404 ){
        ''
      }else{
        setTheme(ResponseJson)
      }
     
   })
      }
    
    const submit = async(e) => {
        e.preventDefault();
       // console.log(serviceType)
      
        if (!validation()) return;

       const theme = {
        name: name,
       service_type_id: service_type_id,
   
      }

      const res = await fetch(urlT, {
        method: "POST",
     //  headers: { "Content-Type": "application/json" },
        body: JSON.stringify(theme),
      });
      const addTheme = await res.json();
      //carregamento de forma dinamica
      setTheme((prevTheme) => [...prevTheme, addTheme])
      GetTheme()

    setName("")
setServiceType_id("")
    function validation (){
          
      if(!name)
      return setStatus({
        type:'error',
       messagem: 'Necessário preencher o campo name'});

      if(!service_type_id)
      return setStatus({
        type:'error',
       messagem: 'Necessário preencher o selecionar o campo um tipo de serviço '});
   
     return true;
    }
    }

  
    const remove = async(id) =>{
       //const res = await fetch(`http://localhost:5000/themes/${id}`, {
     
      // const res = await fetch(`http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/${id}`, {
        const res = await fetch(`http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/${id}`, {
           method: "DELETE",
         //headers: { "Content-Type": "application/json" },
           body: JSON.stringify(theme),
       })
      
       GetTheme()
    
   }

   useEffect(()=>{
    GetTheme()
    GetServiceT();
   
  },[])
    return(
        <C.Container>
             <h1>Escolha um Tema para cadastrar</h1>
        <div className='ThmeForm'>
          <div className='cadItem'>
           <form onSubmit={submit}>
           <div className='mensagem'>
    {status.type==='sucess' ? <p>
    {status.messagem}</p> : ''}
    {status.type==='error' ? <p>
    {status.messagem}</p> : ''}
    </div>
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

                 <Button text="Criar"
            />
            
            </form>
            </div>
              </div>
        

 {theme.length? (
<>
<h2>Lista de temas criados</h2> 
{theme.map((temas) => (
          <Car  to={"/Perguntas/Themes/Editar/"+temas.id}
          key={temas.id}
            text={temas.name}
            HandleDelete={()=>remove(temas.id)}
          />
        ))}
</>
 ):(
<h3>Nenhum tema foi cadastrado</h3>
 )}
        
        </C.Container>
    )
}