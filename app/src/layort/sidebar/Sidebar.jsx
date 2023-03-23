import React, { useState } from 'react';

import * as C from './styles';
import {Link} from 'react-router-dom';
import {AiOutlineHome,
     AiOutlineUser, 
     AiOutlineUnorderedList,
     AiOutlineStock,
     AiOutlineComment,AiOutlineContainer
    
    } from 'react-icons/ai'
    import {RiFeedbackLine,
        RiComputerLine} from 'react-icons/ri'
//import {BrowserRouter as Router} from 'react-router-dom';

function Sideber() {
    const [toglle, setTogle] = useState(false);
    const [surveytoglle, setSurveyTogle] = useState(false);

    function setar() {
        if (toglle === false) {
            setTogle(true)
        } else {
            setTogle(false)
        }
        
    
}
    function setarSurvey() {
        if (surveytoglle === false) {
        setSurveyTogle(true)
        } else {
            setSurveyTogle(false)
    }
    }
        
    
    return (
        <C.Container>
          
                <>
                    <div className='container'>
                        <nav>
                            <ul>
                               
                                <Link to="/">
                                    <AiOutlineHome className='icon' />
                                    <p>Home</p>
                                </Link>
                                                                                  
                              <button onClick={setar}>
                                    <AiOutlineContainer className='icon-button' />
                                    <p>Gerenciar items</p>
                            </button>
                            {toglle === true && (
                                <>
                                  <Link to="/Cadastro/Organ">
                                  <AiOutlineUnorderedList className='icon' />
                                  <p> Organ</p>
                                </Link>
                                  <Link to="/Cadastro/Setor">
                                  <AiOutlineUnorderedList className='icon' />
                                  <p> Setor</p>
                          </Link>
                                  <Link to="/Cadastro/Servico">
                                  <AiOutlineUnorderedList className='icon' />
                                  <p> Serviço</p>
                                    </Link>
                                    <Link to="/Cadastro/servico_tipo">
                                  <AiOutlineUnorderedList className='icon' />
                                  <p> Serviço tipo</p>
                          </Link>
                          </>
                            )}

                        <button onClick={setarSurvey}>
                                    <AiOutlineUnorderedList className='icon-button' />
                                    <p>Gerenciar survey</p>
                            </button>
                            {surveytoglle === true && (
                                <>
                                
                                    <Link to="/Perguntas/Themes">
                                <AiOutlineStock className='icon' />
                                <p>Temas</p>
                                </Link>
                                <Link to="/Perguntas/Questions">
                                <AiOutlineStock className='icon' />
                                <p>Perguntas</p>
                                    </Link>
                                    <Link to="/Perguntas/Answers">
                                 <AiOutlineStock className='icon' />
                                        <p>Respostas</p>
                                        
                                    </Link>
                                    <Link to="/Perguntas/Envio">
                                <AiOutlineStock className='icon' />
                                <p>Envio</p>
                                    </Link>
                                </>
                                  )}
                               
        
                                <Link to="/Relatorio">
                                    <AiOutlineComment className='icon' />
                                    <p>Relatório </p>
                                </Link>
                              
                                <Link to="/Feedback">
                                    <RiFeedbackLine className='icon' />
                                    <p> Feedbacks   </p>
                                </Link>
                             {/**    <Link to="/Perfil">
                                    <AiOutlineUser className='icon' />
                                    <p>Perfil </p>
                                </Link>
                                <Link to="/Suporte">
                                    <RiComputerLine className='icon' />
                                    <p>Suporte    </p>
                                </Link>
        */}
                            </ul>
                        </nav>
                        
                    </div>
                </>
        
         
           
        </C.Container>
    )
}

export default Sideber;