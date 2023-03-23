import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import * as C from './style';
function Charts({data,assunto, text}){ 
 
 
 //console.log(dataFormate)
 // console.log("oi",data);
 //console.log(moment().format('DD/MM/YYYY'))

    return(
       <C.Container>
     <div className="grafico">
      <span>{text}</span>
      <div className="grafico-dados">
     <AreaChart
          width={600}
          height={250}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="negativo" stackId="1" stroke="#8884d8"  fill="8884d8" />
           <Area type="monotone" dataKey="positivo" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
           <Area type="monotone" dataKey="media" stackId="1" stroke="#ffc658" fill="#ffc658" />
      
      
        </AreaChart>
          <span>{assunto}</span>

              
        </div>

        </div>
       </C.Container>
    )
    }
export default Charts;
      
       
     
