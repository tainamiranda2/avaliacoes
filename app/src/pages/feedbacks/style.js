import styled from 'styled-components';

export const Container = styled.div`

.components{
   margin:20px;
   align-items: center;
   background: #fff;
   width: 800px;
  // color:blue;
   border:solid 4px #0A3764;

}
.item1{
   display: flex;

}
@media(max-width: 600px) {
   .container{
      align-items:start;
//text-align: center;
justify-content: start;
//display: block;
   }
   .components{
      width:500px;
      margin: 0px;
     
   }
   .item1{
      display: block;
   }
}

`;