import { useEffect, useState } from "react";

import * as C from "./style";
import { useParams } from "react-router-dom";
import { Comments } from "./comments";


export const InfoAvalicao = ({grades}) => {
  const urlA= "http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes"
  //const urlA = "http://localhost:5000/avaliacoes";
 // const urlA ="http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes";
 
  const [theme, setTheme] = useState([]);
  const [totlle, setToglle] = useState(true);
  const [currente, setCurrente] = useState(0);
  //enviando para o post
  const { id } = useParams();
  const [question_id, setQuestion_id] = useState("");

  const [answer_id, setAnswers_id] = useState("");

  const [grades_id] = useState(grades);

  const [texto, setTexto] = useState("Próximo");
  //teste

  useEffect(() => {
    const getThemeQuestions = async () => {
        //await fetch("http://homologacao.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/questions/"+id)
      await fetch("http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/questions/"+ id)
        // await fetch('http://localhost:5000/themes/'+id)
        .then((Response) => Response.json())
        .then((ResponseJson) =>
          //console.log(ResponseJson)
          setTheme(ResponseJson)
        );
    };

    getThemeQuestions();
  }, [id]);

  const handleSumit = async (e) => {
    e.preventDefault();
    //let convertQuestion=question_id.toString()

    const avaliacao = {
      question_id: question_id,
      answer_id: answer_id,
      grades_id: grades_id,
    };

    const res = await fetch(urlA, {
      method: "POST",
     // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(avaliacao),
    });
  
  };

  let themaQuestion = theme.map((names) => names.questions);
  let QuestionsResQtd = themaQuestion.map((names) => names.length);

  let QuestionsRes = themaQuestion.map((names) => names[currente]);
console.log(QuestionsRes )

  function acrecentar(id) {
    setCurrente(currente + 1);
    setQuestion_id(id);
    atualizarNome()
   // setAnswers_id("")
  }
 
  function atualizarNome(){
    if(QuestionsResQtd-1===currente){
     setTexto("Finalizar")
   //  setToglle(!totlle);
  
    }
   
  }

//console.log(grades_id)


  return (
    <C.Container>
      {totlle === false ? (
        <Comments grades={grades_id} />
      ) : (
        <form onSubmit={handleSumit}>
          <div className="survey">
            { QuestionsRes.map((pergunta, index) => (
              <>
               
                <h3 key={index}>{pergunta.name}</h3>

                {pergunta.answers.map((resposta, index) => (
                  <>
                    <fieldset>
                      <input className="InputNone"
                        name={answer_id}
                      //  key={index}
                        defaultChecked
                        type="radio"
                      />
                      <label 
                      className="labelNone"
                        //key={index}
                        defaultChecked
                        onChange={(e) => setQuestion_id(e.target.value)}
                      >
                        Teste
                      </label>

                      <input
                      className="input-radio"
                        name={answer_id}
                        key={index}
                        onChange={(e) => setAnswers_id(e.target.value)}
                        value={resposta.id}
                        type="radio"
                      />
                      <label
                      className="labelInput"
                        key={index}
                        onChange={(e) => setQuestion_id(e.target.value)}
                      >
                        {resposta.name}
                      </label>
                    </fieldset>
                  </>
                ))}

                <button onClick={() => acrecentar(pergunta.id)}>{texto}</button>
              </>
            ))}
          </div>
         
        </form>
      )}
    </C.Container>
  );
};
