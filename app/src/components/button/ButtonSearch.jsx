import React from 'react';
import * as C from './style';
import {BsSearch} from 'react-icons/bs'
function ButtonSearch({handleButton,text }) {
    return (
        <C.Container>
            <button className='ButtonSearch' onClick={handleButton}>
                <BsSearch >{text}</BsSearch>
            </button>
        </C.Container>
    )
}
export default ButtonSearch;