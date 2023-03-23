import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import * as C from './style';

function Collumn({data,dadoAvaliado,text}){


return (
    <C.Container>
     <div className="grafico'">
   
     <div className='grafico-dados1'>
     <LineChart
          width={700}
          height={250}
          data={data}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="id" stroke="#82ca9d" />
        </LineChart>
        <span>{text}</span>
    
        </div>
        </div>
    </C.Container>
)
}
export default Collumn;