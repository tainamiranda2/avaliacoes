
import styled from 'styled-components';

export const Container = styled.div`
h1,h2{
  color: #55A4F3;
  text-align:center;
  margin: 5px;
}
.mensagem {
  // background: red;
   color: red;
}
.cadItem{
   display:flex;
   background:#fff;
  // box-shadow: 1px 5px 5px #fff;
//border:solid 1px #000;
}
form{

display: block;
border:solid 1px #000;
text-align:center;
}

.editForm{
  margin:4px;
  box-shadow:1px 1px 1px 1px #000;
  background:#fff;
  justify-content:center;
  //display: inline;
}
@media(max-width:700px) {
  *{
 // background:pink;
  }

form{
display: inline;

}
  
}
//celular
@media(max-width: 500px) {
  *{
   //background:green;
  }
 
  form{
display: inline;
}
}
`;