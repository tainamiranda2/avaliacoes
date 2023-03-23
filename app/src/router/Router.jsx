import React, { useState, useContext} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import * as C from "../layort/grid/Grid";
//importando a barra de navegação
import Navbar from "../layort/navbar/Navbar";
import Sideber from "../layort/sidebar/Sidebar";
//importando as páginas
import { VerCadastro } from "../pages/cadastro/Cadastro";
import Feedback from "../pages/feedbacks/Feedback";

import { Login } from "../pages/login/Login";
import { Dashboard } from "../pages/relatorio/Dashboar";
import { Relatorio } from "../pages/relatorio/Relatorio";
import { Respostas } from "../pages/survey/respostas/Respostas";
import { Suporte } from "../pages/suporte/Suporte";
import { CriarOrgan } from "../pages/cadastro/Organ/OrganCad";
import { ServiceCad } from "../pages/cadastro/Servico/ServiceCad";
import { CriarCad } from "../pages/cadastro/Setor/SectorCad";
import { ServiceTypeCad } from "../pages/cadastro/ServicoTipo/ServiceTypeCad";
import { CriarTheme } from "../pages/survey/Theme/Theme";
import { PerguntasGet } from "../pages/survey/questions/PerguntasGet";


import { Editar } from "../pages/cadastro/Organ/EditOrgan";
import { Envio } from "../pages/survey/envio/Envio";
import { EditarSetor } from "../pages/cadastro/Setor/EditSetor";
import { EditService } from "../pages/cadastro/Servico/EditService";
import { EditarServiceType } from "../pages/cadastro/ServicoTipo/EditServiceType";
import { EditarAnswers } from "../pages/survey/respostas/EditAnswer";
import { EditarTheme } from "../pages/survey/Theme/EditTheme";
import { EditarQuestins } from "../pages/survey/questions/Editquestions";
import { UserAvaliacao } from "../userAvalicao/avaliacao/emogiAvaliacao";
import { InfoAvalicao } from "../userAvalicao/Info/Info";
import { Notfound } from "../userAvalicao/Info/NotFound";
import { Comments } from "../userAvalicao/Info/comments";
import { Thanks } from "../userAvalicao/Info/thanks";

//privando rotas
import { AuthContext } from "../context/ContextAuth";

const Private =({Item})=>{
  const {logado}=useContext(AuthContext)
  //console.log("vendo",logado)

  const InLogado=logado;

  return InLogado >0 ? <Item/> : <Login/>
}

export const Router = () => {
  const {logado}=useContext(AuthContext)

  const estado=logado;
 //console.log(estado)
  return (
    <C.Container>
      <BrowserRouter>
  <div className="container">
        {estado===false  ? (
''
        ):(
<>
        <div className="itemnav">
           <Navbar />
              </div>
              
              <div className="itemsid">
                <Sideber />
              </div>
           
</>
        )}
            
          <div className="itemmain">
            <Routes>
             
                <Route path="/" element={<Dashboard />} />
                  <Route path="/survey/:id" element={<UserAvaliacao />} />
                  <Route path="Info" element={<InfoAvalicao />} />
             

                  <Route path="/grades/comments" element={<Comments />} />
                  <Route path="/agradecimento" element={<Thanks />} />
              
                                   
                  <Route path="/Login" element={<Login/>}/>
                  <Route path="/Cadastro" element={<VerCadastro />} />
                  <Route path="/Cadastro/Organ" element={<Private Item={CriarOrgan} />} />
                  <Route
                    path="/Cadastro/Organ/Editar/:id"
                    element={<Private Item={Editar} />}
                  />

                  <Route path="/Cadastro/Setor" element={<Private Item={CriarCad} />} />
                  <Route path="/Cadastro/Setor/Editar/:id" element={<Private Item={EditarSetor} />}/>

                  <Route path="/Cadastro/Servico" element={<Private Item={ ServiceCad }/>} />
                  <Route path="/Cadastro/Servico/Editar/:id" element={<Private Item={ EditService }/>} />

                  <Route path="/Cadastro/Servico_tipo" element={<Private Item={ ServiceTypeCad} />}/>
                  <Route path="/Cadastro/Servico_tipo/Editar/:id" element={<Private Item={EditarServiceType}/>}/>

                  <Route path="/Perguntas/Answers" element={<Private Item={Respostas} />} />
                  <Route path="/Perguntas/Answers/Editar/:id" element={<Private Item={ EditarAnswers} />} />

                  <Route path="/Perguntas/Themes" element={<Private Item={CriarTheme} />} />
                  <Route  path="/Perguntas/Themes/Editar/:id" element={<Private Item={EditarTheme} />}  />

                  <Route  path="/Perguntas/Questions" element={<Private Item={ PerguntasGet}/>} />
                  <Route path="/Perguntas/Questions/Editar/:id" element={<Private Item={ EditarQuestins} />}/>

                  <Route path="/Perguntas/Envio" element={<Private Item={ Envio} />} />

                  <Route path="/Relatorio" element={<Private Item={ Relatorio} />} />
                  <Route path="/Suporte" element={<Suporte />} />
                  <Route path="/Feedback" element={<Feedback />} />

                  <Route path="/Cadastro/Organ/Editar/:id" element={<Editar />}/>
              
            </Routes>
          </div>
          </div>
      </BrowserRouter>
    
    </C.Container>
  );
};
