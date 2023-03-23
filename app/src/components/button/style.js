import styled from 'styled-components';

export const Container = styled.div`

button{
    background: #55A4F3;
    color:#fff;
    padding:20px;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 30px;
    border:none;
  
}

.ButtonBlue{
    width: 300px;
}

.ButtonSearch{
   background:#fff;
   border: solid 1px #008000;
   display: flex;
    cursor: pointer;
   padding:1px;
   width:100px;
   color: #000;
}

.Most{
    background:green;
    padding:5px;
    border-radius: 10px;
    margin-top:5;
    width: 150px;
    
}
.ButtonVoltar{
  // background: red;
   display: flex;
    cursor: pointer;
    margin: 3px;
    padding: 10px;
    border:solid 1px #FF0000;
   border-radius: 10px;
width:100px;
color:#FF0000;
}

.ButtonVoltar:hover{
    background: #FF0000;
   color:#fff;
}

a{
    color: red;
   // background: red;
    text-decoration:none;
}
a:hover{
color:#fff;
}
.ButtonCad{
    cursor: pointer;
    background:#008000;
    color: #fff;
    border-radius: 10px;
    width: 400px;
    padding: 10px;
    margin:10px;
}

`;