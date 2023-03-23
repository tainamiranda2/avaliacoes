import React, { useEffect, useState } from 'react';
import * as C from '../style';
import Button from '../../../components/button/button';
import Input from '../../../components/input/input';

import Select from '../../../components/select/Select';
import Car from '../../../components/card/Cad';

export const Respostas = () => {
  //const url='http://localhost:5000/questions'
  // const url='http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions'
   //const urr='http://localhost:5000/answers'
 //const urr='http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/answers'
    const url="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions"
    const urr="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/answers"
    const [questions, setQuestions] = useState([]);
    const [answers,setAnswers]=useState([]);

    const [question_id, setQuestion_id ]=useState("");
  const [name, setName] = useState("");

  const [status,setStatus] =useState({
    type:'',
    messagem:''
  })
const GetQuestion=async()=>{
  fetch(url)
  .then((Response)=>Response.json())
  .then((ResponseJson)=>{
    if(ResponseJson.status ===404){
      ''
    }else{
      setQuestions(ResponseJson)
    }
  
})
    }

    const GetAnswer=async()=>{
      fetch(urr)
      .then((Response)=>Response.json())
      .then((ResponseJson)=>{
        if(ResponseJson.status ===404){
          ''
        }else{
          setAnswers(ResponseJson)
        }
      
    })
        }

const submit=async(e)=>{
    e.preventDefault();
    if (!validation()) return;

    const answers= {
        name: name,
        question_id: question_id
    }
    const res = await fetch(urr, {
        method: "POST",
       // headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });
      const addR= await res.json();
      //carregamento de forma dinamica
      setQuestions((prevSector) => [...prevSector, addR])
      GetAnswer();
      function validation (){
          
        if(!name)
        return setStatus({
          type:'error',
         messagem: 'Necessário preencher o campo name'});
  
        if(!question_id)
        return setStatus({
          type:'error',
         messagem: 'Necessário preencher o selecionar o campo de  perguntas '});
     
       return true;
      }
    };

    const remove = async(id) =>{
      // e.preventDefault()
   
      // const res = await fetch(`http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/answers/${id}`, {
      const res = await fetch(`http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions/${id}`, {
           method: "DELETE",
          //headers: { "Content-Type": "application/json" },
           body: JSON.stringify(questions),
       })
      
       GetAnswer();
   }
    useEffect(()=>{
      GetQuestion();
      GetAnswer();

    }, []);
  return(
        <C.Container>
           <h1>Escolha uma resposta para cadastrar</h1>
          <div>
      <div className='cadItem'>
                    <form onSubmit={submit}>
                    <div className='mensagem'>
    {status.type==='sucess' ? <p>
    {status.messagem}</p> : ''}
    {status.type==='error' ? <p>
    {status.messagem}</p> : ''}
    </div>
                    <Select
                    text="Perguntas"
                    name="question_id"
                    options={questions}
                    onChange={(e)=>setQuestion_id(e.target.value)}
                    value={question_id}
                     />

                    <Input type="text" 
                    text="Informe a alternativa"
                    name="name"
                    placeholder="Respostas"
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    />
            
                    <Button text="Confirmar" 
                    />
                         
          </form>
      </div>
      </div>

     
{answers.length? (
<>
<h2>Lista de Respostas criados</h2> 
{answers.map((opcoes) => (
             <Car key={opcoes.id}
             to={"/Perguntas/Answers/Editar/"+opcoes.id}
            text={opcoes.name}
           HandleDelete={()=>remove(opcoes.id)}
          />
        ))}
</>
):(
<h3>Nehuma pergunta foi cadastrada</h3>
)}
       
        </C.Container>
          
    )
 }
    
