/** @format */

import React, { useState, useEffect } from "react";
import * as C from "./style";
import Charts from "../../components/grafico/Chart";
import Pies from "../../components/grafico/Pie";
import Area from '../../components/grafico/Area';
import Collumn from "../../components/grafico/Collumn";
import CadNum from "../../components/card/CardNum";
import Card from "../../components/card/Card";
import Select from "../../components/select/Select";
export const Dashboard = () => {
  const urlR = "http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes";
  //const urlR = "http://localhost:5000/avaliacoes";
 // const urlL = "http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions";
  //const urlL = "http://localhost:5000/questions";


  const [evalution, setEvalution] = useState([]);
  const [notas, SetNotas] = useState([]);
  const [servicoType, setServiceType] = useState([]);
  const [service, setService] = useState([]);
  const [questions, setQuestions] = useState([]);
  
  
  const  fetchDataAvaliacoes=  async() =>{
       fetch(urlR)
      .then((Response)=>Response.json())
      .then((Response)=>{
      if(Response? Response.mensagem:""){
      console.log(Response)
      }else{
        setEvalution(Response)
      }
      })
    
}
    




 // console.log(evalution);

 
 useEffect(() => {
  fetchDataAvaliacoes();
}, []);
//const nameNota=notasV;
  //console.log(notas)
  return (
    <C.Container>
    <h2>Dashboard de desempenho</h2>
     {/**   <Select 
   options={evalution}
   value=""
   text="Selecione um orgão"
   />
   */}
      <div className="Cards1">
  
      
      <CadNum text="Avaliações" num={evalution.length} />
      <CadNum text="Perguntas" num={questions.length} />
        <CadNum text="Respostas" num={questions.length} />
       
      </div>
      <div className="container1">
      <div className="container">

     <Charts 
     text={"Avaliação dos orgãos"} 
       data={evalution}
        assunto="Lista de orgãos avaliados" />
          {/**    
              <Area 
              text={"Perguntas"} 
              data={evalution}
              assunto="Lista de peguntas respondidas" 
              />
          */}   
        </div>

      {/** <Pies text={"Melhor atendimento"} 
         assunto="forma de atendimento"
        data={services} /> 
         */} 
        </div>
    </C.Container>
  );
};
/*
   <Pies text={"Avaliação de serviços"} 
        data={services} /> 
         <Collumn text="Perguntas avaliadas" 
        data={dataQuestoes}/>
*/