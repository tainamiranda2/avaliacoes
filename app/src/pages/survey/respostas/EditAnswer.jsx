import React, { useState, useEffect } from 'react';
import * as C from '../style';
import Input from '../../../components/input/input';
import Select from '../../../components/select/Select';
import ButtonVoltar from '../../../components/button/buttonVoltar';

import { useParams } from 'react-router-dom';
import ButtonCad from '../../../components/button/ButtonCad';


export const EditarAnswers = () => {
  const url='http://localhost:5000/questions'
  //  const url='http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions'
   const urr='http://localhost:5000/answers'
  //  const urr='http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/answers'
    
    const [questions, setQuestions] = useState([]);
    const [answers,setAnswers]=useState([]);

    const [question_id, setQuestion_id ]=useState("");
  const [name, setName] = useState("");
  const {id}=useParams()
  //sector
  //console.log('oi',organ)
  useEffect(() => {
    const GetAnswer = async () => {
      fetch(urr)
        .then((Response) => Response.json())
        .then((ResponseJson) => {
       setAnswers(ResponseJson)
 
        })

    }
    
    const GetQuestion = async () => {
fetch(url)
         .then((Response) => Response.json())
         .then((ResponseJson) => {
        setQuestions(ResponseJson)
    // console.log("oi",ResponseJson)
         })
 
     }
     GetQuestion ()
    
     GetAnswer()
}, [id])
  
  const Edit = async e => {
   
    e.preventDefault();
 

 //await fetch("http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/answers/"+id, {
  await fetch("http://localhost:5000/answers/"+id, {
      method: "PUT",
    headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, question_id})
    }).then((Response) => Response.json())
   .then((ResponseJson) => {
      setAnswers(ResponseJson)
    //  console.log(ResponseJson)
    })
      
  }

  return (
    <C.Container>
      <div className='editForm'>
        <ButtonVoltar to="/Perguntas/Answers/" 
        text="Voltar"/>


      <form onSubmit={Edit}>
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
        <ButtonCad text="Salvar"
        />

          </form>
        
        
      </div>

      
    </C.Container>
  )
}