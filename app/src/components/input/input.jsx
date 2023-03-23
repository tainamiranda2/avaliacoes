import React from 'react';
import * as C from './styles';

function Input ({type, text,name, placeholder, onChange,value}) {

        return (
            <C.Container>
            <label htmlFor={name}>{text}</label>
            <br/>
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                />
            </C.Container>
        )
    }

    export default Input;