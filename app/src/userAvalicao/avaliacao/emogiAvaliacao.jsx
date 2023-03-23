/** @format */

import React, { useEffect, useState } from "react";
import * as C from "./style.js";
//import { BiHappyAlt, BiHappyBeaming, BiSad } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { InfoAvalicao } from "../Info/Info";
import PhotoSatisfeito from './satisfeito.png'
import PhotoFeliz from './legal.png'
import PhotoTriste from './bad.png'

export const UserAvaliacao = () => {
  const { id } = useParams();
 // const url = "http://localhost:5000/grades";
const url="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/grades";
//const url ="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/grades"
  const [totlle, setToglle] = useState(true);

  const [grades, setGrades] = useState("");
  const [theme_id] = useState(id);
  const [latitude,setLatitude] = useState("");
  const [longitude,setLongitude] = useState("");
  //testes
  const [notas, setNotas] = useState([]);
  const [theme, setTheme]=useState([]);

  
  const fetchDataNotas=async() =>{
        fetch(url)
       .then((Response)=>Response.json())
       .then((ResponseJson)=>{
        if(ResponseJson ? ResponseJson.mensagem :""){
         // console.log('oi',ResponseJson) 
        }else{
          setNotas(ResponseJson)
         // console.log("oii, eu existo",ResponseJson)
        }
     
       })
}


    const getThemeQuestions= async()=>{
      await fetch('http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/'+id)
     // await fetch('http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/'+id)
         //  await fetch('http://localhost:5000/themes/'+id) 
         .then((Response)=>Response.json())
         .then((ResponseJson)=>(
          
         setTheme(ResponseJson)
         ))
        }
     //   console.log(notas)

  const handleSumit = async (e) => {
    e.preventDefault();

    const gradess = {
      //
      grades,
      theme_id,
      latitude,
      longitude
    };

    const req = await fetch(url, {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gradess)
    })
//console.log(gradess)
//setToglle(false);
    const addNotas = await req.json();
    //carregamento de forma dinamica
    setNotas((prevOrgans) => [...prevOrgans, addNotas]);
    //aqui é o lugar certo
  setToglle(false);
   
  };
  
  const status1 = () => {
    
    setGrades(5);
    
  };
  const status2 = () => {
    setGrades(3);
    
  };
  const status3 = () => {
    setGrades(1);
   
  };

  function sucessos (pos){
  //  console.log(pos.coords.latitude,pos.coords.longitude )
        setLatitude(pos.coords.latitude)
        //console.log(pos.coords.latitude)
        setLongitude(pos.coords.longitude)
       // console.log(pos.coords.longitude)
     }
    navigator.geolocation.getCurrentPosition(sucessos)
    
 //console.log(notas)
 let latMap= notas.map((lat)=>(
  lat.latitude
 ))

 let logMap= notas.map((lat)=>(
  lat.longitude
 ))

let filtrarLatitude=latMap.filter(lat=> lat ==latitude )
let filtrarLongitude=logMap.filter(log=> log ==longitude)

if(filtrarLatitude==latitude && filtrarLongitude==longitude){
  console.log("Memso endereço")
 // alert("Voce já participou")
 
}

  let arrayNotas = notas.map((nota) => nota.grades);

  function bigsatisfeito(value) {
    return value === 5;
  }
  function biglegal(value) {
    return value === 3;
  }
  function bigruim(value) {
    return value === 1;
  }
  let filtlegal = arrayNotas.filter(biglegal);
  let filtsatisfeito = arrayNotas.filter(bigsatisfeito);
  let filtlruim = arrayNotas.filter(bigruim);

  
  let positonid = notas.map((IdNota)=>(IdNota.id));
  let positionidUltimo = positonid[positonid.length -1]


useEffect(() => {
 fetchDataNotas()
  getThemeQuestions()
}, [id]);

  return (
    <C.Container>
      {totlle === true ? (
       <div className="notas">
        <form onSubmit={handleSumit}>
       
          <div className="conteudo">
            <div className="satisfeito">
              <button name="grades" value={grades} onClick={status1}>
                    <img alt="Satisfeito" src={PhotoSatisfeito} />
                <p>Satisfeito {filtsatisfeito? filtsatisfeito.length : 0}</p>
              </button>
            </div>

            <div className="legal">
              <button name="legal" value={grades} onClick={status2}>
            <img alt="Legal" src={PhotoFeliz} />
                <p>Legal {filtlegal.length} </p>
              </button>
            </div>

            <div className="ruim">
              <button name="ruim" value={grades} onClick={status3}>
             <img alt="Triste" src={PhotoTriste} />
                <p>Ruim {filtlruim.length} </p>
              </button>
            </div>
          </div>
        </form>
        </div>
      ) : (
        <InfoAvalicao grades={positionidUltimo}/>
      )}
    </C.Container>
  );
};
