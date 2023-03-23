import React, {useContext, useState } from 'react';
import { AuthContext } from '../../context/ContextAuth';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import * as C from './style';
import { useNavigate } from 'react-router-dom';
//import Photo from './Astronauta.png'


export const Login = () => {
   
    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('')
  const natigate=useNavigate()
    const {logado,setLogado} = useContext(AuthContext)

   const handleValidar=()=>{
    let userEmail="suporte@gmail.com"
    let userSenha=12345678

if(email===userEmail && password===userSenha ){
    console.log("tudo certo")
}else if(email!=userEmail){
    console.log("email errado")
}else if(password !=userSenha){
    console.log("senha errada")
}else if(email!=userEmail && password !=userSenha ){
    console.log("tudo errado")
}else{
    console.log("caiu aqui")
    setLogado(true)
    natigate("/Cadastro/Organ")
}

}
          
    return(
        <C.Container>
            <div className='login'>

            <div className='dados'>
                
                    <h2>Realize o login</h2>

         <Input text="Email"
        name="email"
       value={email}
        placeholder="Informe seu email"
        onChange={(e)=>setEmail(e.target.value)}
        />

        <Input text="Senha"
        placeholder="Informe a senha"
        value={password}
        name="passwrod"
       onChange={(e)=>setPassword(e.target.value)}
        />
        <Button  handleButton={handleValidar} text="Entrar"
                    />
              
                    </div>
       
        </div>
        </C.Container>
    )
}