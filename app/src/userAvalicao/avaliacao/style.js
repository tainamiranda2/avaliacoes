import styled from 'styled-components';

export const Container = styled.div`
*{
   
   align-items:center;
   text-align: center;
   justify-content: center;
   background: #fff;

   }
   
.conteudo{
    display:flex;
    border-radius:5px;
//border: solid 1px #000;
margin-top: 150px;
justify-content: space-around;
}
.ruim, .satisfeito, .legal{
  
filter:drop-shadow(0px 0px 1px #4b4b50);
animation:flutuar 3s linear infinite;

}
button{
    cursor:pointer;
   
}

@keyframes flutuar{
    0%,
    100%{
        transform:translateY(0px);
    }
    50%{
        transform:translateY(-23px);
    }
}



img{
width: 300px;
margin: 3px;
height:300px;
}
a{
    background:#000;
    text-decoration: none;
    width:300px;
    margin:10px;
    padding: 20px;
    color:#fff;
    border-radius: 10px;
}
.qrcode{
    margin:30px;
   
}

span{
    text-align: center;
    color:#4D4D4D;
    font-size:20px;
}
/*tablet*/

@media (max-width: 800px){
        .conteudo{
    display:block;
    border: none;
  //background:#000;
}
.ruim, .satisfeito, .legal{
  margin: 4px;
  filter:none;
}
}
/*celular*/
@media (max-width: 400px){
  .conteudo{
    display:block;
    border: none;
   // background:blue;
    margin: 50px;
    
  }
  .ruim, .satisfeito, .legal{
    filter:none;
    margin: 5px;
  // width: 10px;
  }
  img{
    width: 200px;
  }
  span{
    display: none;
  }

  @keyframes flutuar{
    0%,
    100%{
    transform:none;
  }

}

}
`