import React, { useEffect, useRef }  from "react";
import * as C from './style';
import  QRCode  from "qrcode";

export const Qr =({text})=>{
    const canvasRef=useRef();

    
useEffect(()=>{

QRCode.toCanvas(canvasRef.current, text,{width:200})

}, [text])


return(
    <C.Container>
    <canvas className="qr" 
    ref={canvasRef} id="canvas"></canvas>
    </C.Container>
)
}