import React from 'react';
import * as C from './style';

function TextArea({ text, onChange,value,name,placeholder}) {
    return (
        <C.Container >
            <label htmlFor={name}>{ text}</label>
            <br/>
            <textarea  
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                id={name}
            >
           
        </textarea>
    
    </C.Container>
    )
}

export default TextArea;