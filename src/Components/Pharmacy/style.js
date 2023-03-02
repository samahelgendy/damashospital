import styled from "styled-components";


export const Phar = styled.h2`
padding-top: 100px;
    margin: 0 !important;
    text-align: center;
    position: relative;
    font-size: 20px;
    font-weight: bold;
   &:after {
     content:"";
     background-color:rgb(7, 57, 74);
     width:100px;
     height: 2px;
     position: absolute;
     bottom:-10px;
     left: 50%;
     transform: translateX(-50%);
     animation: animate 4s linear infinite; 
   }

   @keyframes animate {
       0%{
           width:100px;
       }
       50%{
           width:200px;
       }
       100%{
           width:100px;
       }   
   }
   }
`

export const Article = styled.p`
text-align: center;
    width: 70%;
    margin: 40px auto;
    @media(max-width:578px){
        width: 90%;
    }
`
export const Search = styled.div`
position: absolute;
    width: 50%;
    height: 50px;
    border: 2px solid;
    border-radius: 30px;
    left:50%;
    transform:translateX(-50%);
    border-left: none;
    @media(max-width:768px){
        width: 80%;
    }

`

export const Input = styled.input`
background-color: transparent;
position:absolute;
right:10px;
top:50%;
transform:translateY(-50%);
font-size:20px;
width:80%;
`
export const Span = styled.span`
position: absolute;
    left: 0;
    line-height: 50px;
    border: 2px solid;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    top: -2px;
    cursor:pointer;
`
export const I = styled.i`
background-color: transparent;
font-size: 20px;
position: absolute;
right: 14px;
top: 50%;
-webkit-transform: translateY(-50%);
-ms-transform: translateY(-50%);
transform: translateY(-50%);
`
export const Con = styled.div`
margin-top: 120px;
display: grid;
grid-template-columns: repeat(auto-fill , minmax(200px, 1fr));
gap: 40px;
margin-bottom:50px;
`
export const Card = styled.div`
box-shadow: 2px 2px 2px 2px rgba(7, 57, 74, 0.507);
animation:fadeIn 1s .2s  linear;
&:hover{
    transform:scale(1.05);
}
@keyframes fadeIn {
    0%{
        opacity: 0;
        transform: translateX(-100%);
    }
    100%{
        opacity: 1;
        transform: translateX(0px); 
    }
 }
`

export const Text = styled.div`
text-align: center;
`

export const PragText = styled.div`
width:90%;
text-align:center;
margin:0 auto;
`
export const Sale = styled.div`
display: flex;
justify-content: space-evenly;
`
export const Saledel = styled.p`
text-decoration: line-through;
color: #333;
`

export const Image = styled.div`
width: 100%;
 height: 150px;
`
export const Imgmed = styled.img`
width: 100%;
height: 100%;
`

   


