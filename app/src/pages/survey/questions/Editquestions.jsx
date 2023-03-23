import React, { useState, useEffect } from 'react';
import * as C from '../style';
import Input from '../../../components/input/input';
import Select from '../../../components/select/Select';
import ButtonVoltar from '../../../components/button/buttonVoltar';

import { useParams } from 'react-router-dom';
import ButtonCad from '../../../components/button/ButtonCad';


export const EditarQuestins = () => {
   // const url=('http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes')
   const url = ("http://localhost:5000/themes")
   //const urr=('http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions')
    const urr=("http://localhost:5000/questions")
   //adicionando
   const [questions, setQuestions] = useState([]);
   const [theme, setTheme] = useState([]);
 
   const [theme_id, setTheme_id ]=useState("");
   const [name, setName] = useState("");
 
  const {id}=useParams()
  //sector
  //console.log('oi',organ)
  useEffect(() => {
    const GetTheme = async () => {
    fetch(url)

        .then((Response) => Response.json())
        .then((ResponseJson) => {
       setTheme(ResponseJson)
 
        })

    }
    
    const GetQuestion = async () => {

 fetch(urr)
         .then((Response) => Response.json())
         .then((ResponseJson) => {
         
        setQuestions(ResponseJson)
         })
 
     }
  GetQuestion()
  GetTheme()    

}, [id])
  //console.log(sectors)
  
  //console.log(nameSetor)
  const Edit = async e => {
   
    e.preventDefault();
 

 //await fetch("http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions'/"+id, {
  await fetch("http://localhost:5000/questions/"+id, {
      method: "PUT",
    headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, theme_id})
    }).then((Response) => Response.json())
   .then((ResponseJson) => {
      setQuestions(ResponseJson)
    //  console.log(ResponseJson)
    })
      
  }

  return (
    <C.Container>
      <div className='editForm'>
        <ButtonVoltar to="/Perguntas/Questions/" 
        text="Voltar"/>


      <form onSubmit={Edit}>
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

        <ButtonCad text="Salvar"
        />

          </form>
        
        
      </div>

      
    </C.Container>
  )
}