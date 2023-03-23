import React from 'react';
import * as C from './style';
import { Link } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'

function ButtonVoltar({  text,title , to}) {
    return (
        <C.Container>
            <div className="ButtonVoltar">
         <AiOutlineArrowLeft  />
            <Link to={to}> {text} </Link>
              
                </div>
        </C.Container>
    )
}

export default ButtonVoltar;