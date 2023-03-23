import React, { useState }  from "react";
import Submit from "../../components/button/Submit";
import  * as C from  './style';
import { InfoAvalicao } from "./Info";

export const Captcha =()=>{
const [toglle, setToglle]=useState(false);

const atulizar=()=>{
   
setToglle(true)
    ///console.log("oi")
}
    function getRandindex(maxLength){
        return Math.floor(Math.random()*maxLength)
    }

    let data;

    function getCaptcha(){
let canvas=document.getElementById('canvas')

let pen=canvas.getContext('2d');

let captch=Math.random().toString(36).substring(2,8);
let maxLength;
let index1;
let index2;

pen.fillStyle="blue";
pen.fillReact(0, 0,400, 400);
pen.fillStyle="white";
maxLength=captch.length;

index1=getRandindex(maxLength);
index2=getRandindex(maxLength);

captch=captch.substring(0, index1-1)+captch[index1].toLocaleLowerCase()+captch.substring(index1, maxLength)
captch=captch.substring(0, index2-1)+captch[index2].toLocaleLowerCase()+captch.substring(index2, maxLength)
data=captch;

captch=captch.split('').join('')

pen.fillText(captch)

    } 

    return (
        <C.Container>
      {toglle===false?
 
<div className="capt">
<h2>Faça essa verificação para continuar</h2>
    <canvas id="canvas" />

    <Submit text="Refresh"
     onClick={getCaptcha}/>

<input //value={enviar} 
placeholder="Enviar o captcha"/>

<Submit text="Enviar" 
onClick={atulizar} 
/>
</div> :''
 } 

{toglle===true?  <InfoAvalicao/>  :"" }
       
      
        </C.Container>
    )
}