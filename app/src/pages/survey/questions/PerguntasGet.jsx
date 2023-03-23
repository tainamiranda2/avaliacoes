/** @format */

import React, { useEffect, useState } from "react";
import * as C from "../style";
import Button from "../../../components/button/button";
import Input from '../../../components/input/input';

import Select from "../../../components/select/Select";
import Car from '../../../components/card/Cad';

export const PerguntasGet = () => {

  // const url=('http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes')
 // const url = ("http://localhost:5000/themes")
  //const urr=('http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions')
  // const urr=("http://localhost:5000/questions")
  const url ="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes" 
  const urr ="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions" 
  //adicionando
  const [questions, setQuestions] = useState([]);
  const [theme, setTheme] = useState([]);

  const [theme_id, setTheme_id ]=useState("");
  const [name, setName] = useState("");

  const [status,setStatus] =useState({
    type:'',
    messagem:''
  })
 
 
const GetTheme=async()=>{
  fetch(url)
  .then((Response)=>Response.json())
  .then((ResponseJson)=>{
    if(ResponseJson.status ===404){
      ''
    }else{
      setTheme(ResponseJson)
    }
  })
    }

     
const GetQuestion=async()=>{
  fetch(urr)
  .then((Response)=>Response.json())
  .then((ResponseJson)=>{
    if(ResponseJson.status ===404){
      ''
    }else{
      setQuestions(ResponseJson)
    }
 
})
    }

  const submit =async (e) => {
    e.preventDefault();
    if (!validation()) return;

    const questions = {
      name: name,
      theme_id: theme_id
    }


    const res = await fetch(urr, {
      method: "POST",
    //  headers: { "Content-Type": "application/json" },
      body: JSON.stringify(questions),
    });
    const addQuestion = await res.json();
    //carregamento de forma dinamica
    setQuestions((prevSector) => [...prevSector, addQuestion])
    setName("")
    setTheme_id("")
    GetQuestion()

    function validation (){
          
      if(!name)
      return setStatus({
        type:'error',
       messagem: 'Necessário preencher o campo name'});

      if(!theme)
      return setStatus({
        type:'error',
       messagem: 'Necessário preencher o selecionar o campo um tema '});
   
     return true;
    }

  };
  const remove = async(id) =>{
    // e.preventDefault()
   
    // const res = await fetch(`http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions/${id}`, {
      const res = await fetch(`http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions/${id}`, {
         method: "DELETE",
        //headers: { "Content-Type": "application/json" },
         body: JSON.stringify(questions),
     })
    
     GetQuestion()
 }

 useEffect(() => {
  GetTheme()
  GetQuestion()
}, []);
  return (
    <C.Container>
       <h1>Escolha uma pergunta para cadastrar</h1>
      <div className="QuestionForm">  
      <div className="cadItem">
       <form  onSubmit={submit}>
       {status.type==='sucess' ? <p>
    {status.messagem}</p> : ''}
    {status.type==='error' ? <p>
    {status.messagem}</p> : ''}
              <Select
                text="Tema"
                name="theme_id"
                options={theme}
                onChange={(e) => setTheme_id(e.target.value)}
                value={theme_id}
              />

              <Input
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Informe a pergunta"
                text="Faça a pergunta"
                value={name}
              />
            <Button text="Cadastrar" />
      
        
          </form>
          </div>
      </div>
     
{questions.length? (
<>
<h2>Lista de perguntas criados</h2> 
{questions.map((question) => (
          <Car  to={"/Perguntas/Questions/Editar/"+question.id}
          key={question.id}
            text={question.name}
         HandleDelete={()=>remove(question.id)}
        />
        ))}
</>
):(
<h3>Nenhuma pergunta foi cadastrada</h3>
)}
     
    </C.Container>
  );
};
