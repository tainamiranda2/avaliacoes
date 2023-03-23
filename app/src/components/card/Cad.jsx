import React from 'react';
import * as C from './style';
import { Link } from 'react-router-dom';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function Car({ text, title, to, HandleDelete }) {
    return (
        <C.Container>
            <div className="Edite">
            <div className='titulo'> 
                <span>Nome:</span>
                   
                {text}
                </div>

                <div className='icons'> 

                <span>Ações:</span>
                <Link  to={to}>
                 <BsPencil/>   Editar
                 </Link>

                <button onClick={HandleDelete }>
                  < BsFillTrashFill/> Apagar
                </button>

                </div>
                </div>
            
        </C.Container>
    )
}

export default Car;