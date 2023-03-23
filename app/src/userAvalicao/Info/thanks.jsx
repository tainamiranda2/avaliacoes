import React from 'react';
import Button from '../../components/button/button';

import * as C from "./style";
export const Thanks =()=>{
    return(
        <C.Container>
        <h2>Obrigado por participar</h2>
        <span>Caso queira fazer uma avalição novamente</span>
        <Button  text="Refazer"/>
        </C.Container>
    )
}