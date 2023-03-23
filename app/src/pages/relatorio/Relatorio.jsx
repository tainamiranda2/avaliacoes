/** @format */
import React from 'react';
import Card from '../../components/card/Card';
import * as C from './style';

export const Relatorio = () => {
  

  return (
    <C.Container>
      <h2>Este são os relatorios</h2>

      <Card title="Pergunta"
        text="Respostas"
      answer="Ver resultado"
      />
      <Card title="Pergunta"
        text="Respostas"
      answer="Ver resultado"
      />
      <Card title="Pergunta"
        text="Respostas"
      answer="Ver resultado"
      />
    </C.Container>
  );
};
