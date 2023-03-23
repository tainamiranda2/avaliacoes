
import React from "react";


//import * as C from "./style";
function CardTable({name, questions,value, onChange }) {
    return (
        <>
<div className="container">	    
        <div  name={name}
          id={name}
          onChange={onChange}
          value={value}>
          <div className="labelV">
          <p  type={"radio"}  defaultChecked/>
          <label >Escola a opção</label>
          </div>
    {questions.map((opcao)=>(  

      <div className="options">  
        <label />	
        <input key={opcao.id}
          value={opcao.id}
          type={"radio"}  
        />

        <label >
            {opcao.name}	           
            </label>	    

            </div>
      )) }	   

          </div>
          </div>
          </>
    )
}
    export default CardTable;