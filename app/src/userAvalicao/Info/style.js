import styled from "styled-components";

export const Container = styled.div`

  display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:10px;
height:100vh;

  .survey {
    width: 100%;
    border: 1px solid #cdd0e8;
    padding: 25px;
    color: #55A4F3;
    border-radius: 20px;
  }
.survey button{
    padding:20px;
    border-radius:10px;
    margin: 5px;
    background:#55A4F3;
    border: none;
    color: #fff;
    width:100%;
  }
  fieldset {
//display: inline-flex;
border-radius:10px;
border: solid 2px #55A4F3;
margin:10px;
padding: 15px;
font-size:12px;
font-weight:800;
  }
  fieldset:hover{
   // background:#55A4F3;
  //  color:#fff;
    cursor: pointer;
   // background:#cdd0e8;
  }
  .InputNone,
  .labelNone {
    display: none;
  }
  .input-radio {
    padding: 10px;
    margin: 15px;
color:#55A4F3;


  }
  
.labelInput{
  // color: #55A4F3;
    font-size:16px;
  }

  h1 {
    color: #4d4d4d;
   
  }

  span,
  p {
    text-align: center;
    color: #4d4d4d;
    font-size: 20px;
  }

   
  .comments form {
    border: solid #cdd0e8 1px;
    //margin: 20px;
  }
  .comments h2{
    margin: 20px;

  }
  .comments button{
    margin: 20px;
  }
  .notfound {
    margin: 150px;
  }
  .notfound h2 {
    text-align: center;
  }


  canvas {
    width: 220px;
    height: 60px;
    border: 2px solid #4d4d4d;
  }
  @media (max-width: 600px) {
    .comments{

    // background-color: #55A4F3;
    }
    .survey {
      width: 100%;
      //padding: 5px;
      margin: 2px;
    }
    .survey button{
      width: 50%;
    }
    .qrcode {
      display: none;
    }
    img {
      width: 300px;
    }
   
    .comments span,
    p {
      display: none;
    }
  }
`;
