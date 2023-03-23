import React from 'react';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import TextArea from '../../components/textarea/TextArea';
import * as C from './style';

export const Suporte = () => {
    return (
        <C.Container>
            <div className='container'>
            <Input type="text"
                text="Informe qual a mensagem"
                name="title"
                placeholder="Informe o titulo"
            />
            
            <TextArea
               text="Escreva o conteúdo"
                placeholder="Informe o conteúdo" />
                <Button text="Enviar" />
                </div>
        </C.Container>
    )
}