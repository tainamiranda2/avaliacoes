/** @format */

import React from "react";
import * as C from "./style";
import { useState } from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import TextArea from "../../components/textarea/TextArea";


export const Comments = ({grades}) => {
 //const url="http://localhost:5000/comments"
 //http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/
const url = "http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/comments";
//const url ="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/comments";
  const [grades_id, setGrades_id] = useState(grades);
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const submit = async (e) => {
    e.preventDefault();
    const comments = {
      content,
      grades_id,
      name,
      email,
    };
    const res = await fetch(url, {
      method: "POST",
      //headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comments)
    });
    //console.log(comments)
    //setComents(comments)
    setName("");
    setContent("");
    setEmail("");
    
  };
  function enviarNota(){
    setGrades_id(grades)
  }
  return (
    <C.Container>
      <div className="comments">
        <form onSubmit={submit}>
         <h2>Colabore com algumas informações</h2>
        
         
          <Input
            placeholder="Nome"
            required
            name="name"
            value={name}
            text="Seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          
          <Input 
          required
            placeholder="E-mail"
            name="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            text="Seu email"
          />
          

          <TextArea
           required
            name="name"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Envie seu comentário"
            text="Deixe seu comentário"
          />
       
          <Button text="Deixa seu comentário" 
          onClick={enviarNota}
           />
          
        </form>
      </div>
    </C.Container>
  );
};
