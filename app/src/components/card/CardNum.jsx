import React from 'react';
import * as C from './style';
function CadNum({num,text}){
    return(
        <C.Container>
            <div className='CardNum'>
            <p>{text}</p>
             <span>{ num}</span>
             </div>
        </C.Container>
    )
}

export default CadNum;