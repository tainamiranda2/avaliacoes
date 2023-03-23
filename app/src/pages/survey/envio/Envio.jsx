/** @format */

import React, { useState, useEffect } from "react";
import * as C from "./style";
import Input from "../../../components/input/input";
import { Qr } from "./qrcode";
import CardMost from "../../../components/card/CardMost";
import { useParams } from "react-router-dom";

export const Envio = () => {
 //const url="http://localhost:5000/themes_questions";

  const url ="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes";
 
 //const urR=" http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions/answers";
 //const urR="http://localhost:5000/avaliacoes";

  const [questionsTheme, setquestionsTheme]=useState([])

 // http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes
 //http://localhost:81/survey/
 const [text, setText] = useState("http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/survey");

 const {id}=useParams()

  useEffect(() => {
    const getQuestionTheme = async () => {
     await fetch(url)
        .then((Response) => Response.json())
        .then((ResponseJson) => {
          if(ResponseJson.status ===404){
                ''
          }else{
            setquestionsTheme(ResponseJson)

          }
      
    
      })
    }

    const getaddress = async () => {
      await fetch(url)
         .then((Response) => Response.json())
         .then((ResponseJson) => (
         setquestionsTheme(ResponseJson))
 
         )
     }
     getQuestionTheme();
     getaddress();


  }, [id]);

const handleId=(id)=>{
  //console.log(id)
  setText('http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/survey'+id)

}
  return (
    <C.Container>
    
      <h2>Temas disponiveis</h2>
      <div className="survey1">
                
          {questionsTheme.map((informacao) => (
       <>
      <CardMost
       key={informacao.id}
       titulo="Tema sobre:"
       subtitulo= {informacao.name}
       text="Confirmar"
       onClick={()=> handleId(informacao.id)}
        />
      
        </>
     ))}

      </div>  

      <Input
       value={text}
       // onChange={(e) => setText()}
        type="text"
      />
    

      <Qr text={text} />

    </C.Container>
  );
};
