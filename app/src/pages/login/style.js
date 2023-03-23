import styled from 'styled-components';

export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:10px;
height:100vh;

.dados{
  display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:15px;
width:100%;
box-shadow:0 1px 4px #0003;
background-color:#fff;
max-width:350px;
padding:20px;
border-radius:5px;
}



.mensagem{
background:#ff0000;
color:#fff;
box-shadow: 1px 1px 1px #ff0000;
text-align:center;

}
span{
    color:#B0C4DE;
    padding: 10px;
    
}

@media (max-width: 600px) {

}
`;