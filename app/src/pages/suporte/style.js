import styled from 'styled-components';

export const Container = styled.div`
*{
   background:#fff;
   width: 500px;
   //margin: auto;
   padding: 20px;
}
.container{

align-items:center;
text-align: center;
justify-content: center;
display: inline;
}

@media(max-width: 600px) {
   .container{
      align-items:start;
//text-align: center;
justify-content: start;
//display: block;
   }
  
   
}

`;