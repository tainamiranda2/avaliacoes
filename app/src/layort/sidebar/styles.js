import styled from 'styled-components';

export const Container = styled.div`
*{
  margin:0;
padding:0;
background:#55A4F3;
position: 0 0;
min-height:100%;
}
.container{

  width: 100%;

}

nav{
//width: 30px;
//height:100%;
transition: 0.5s;
margin:0px;

}
nav a:hover{
//width:200px;
///background: #000;
//margin:10px;
}

nav ul {
  position:absolute;
  list-style-type: style none;
 //background: orange;
}
nav ul a:hover{
 // background: blue;
}
button{
border: none;
cursor:pointer;
color: #fff;
padding:10px;
display: flex;
margin: 2px;

}
.icon-button{
 // background-color:#000;
 // padding: 10px;
  height: 40px;
  margin: 2px;
  min-width:40px;
  padding: 10px;
}

nav ul a{
 
//display: block;
display: flex;
text-decoration:none;
color: #fff;
padding:20px;
//background-color: pink;
}

nav ul a .icon {
position:relative;
min-width:40px;
height:40px;
//background:#800;
padding: 10px;

}

p{
padding: 10px;
 //margin-bottom:10px;
  margin: 2px;
}
p:hover,
 nav ul a .icon:hover{
 // background:#000;
}
@media(max-width:700px) {
  *{
  //background:pink;
  }
  p{
    display: none;
  }
  nav a:hover{
    width:100px;
  }
}
//celular
@media(max-width: 500px) {
  *{
  //  background:green;
  }
  p{
    display: none;
  }
  nav a:hover{
    width:100px;
  }
}
`;