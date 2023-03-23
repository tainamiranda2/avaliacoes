
import {createContext, useState}  from 'react';

export const AuthContext=createContext();
//provider
export const ContextAuthProvider=({children})=>{

    const [logado,setLogado]=useState(false);

    return(
        <AuthContext.Provider value={{logado,setLogado}}>
                {children}
        </AuthContext.Provider>
    )
}