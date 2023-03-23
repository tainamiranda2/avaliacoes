import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import * as C from './style';

function Area({data, assunto,dadoAvaliado, text}){
    
  return (
        <C.Container>
          <div className="grafico">
          <span>{text}</span>
          <div className='grafico-dados'>
        <BarChart
        width={600}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="id" fill="#8884d8" />
      
      </BarChart>
     
      <span>{ assunto}</span>
      {/*um loops */}
<p>{}</p>
        </div>
        </div>
        </C.Container>
      )
}



export default Area;