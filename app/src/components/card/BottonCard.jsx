import React from 'react';
import * as C from './style';
import { Link } from 'react-router-dom';
import {AiOutlineFileAdd} from 'react-icons/ai'
function ButtonCar({  text,title , to}) {
    return (
        <C.Container>
            <div className="CarButton">
                         <AiOutlineFileAdd />
            <Link to={to}>{text} </Link>
              
                </div>
        </C.Container>
    )
}

export default ButtonCar;