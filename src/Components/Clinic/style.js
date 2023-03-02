import styled from "styled-components";

 export const Gallery = styled.div`
 background-color: #eee;
 padding:50px 0 80px 0;
 `

 export const Heads = styled.h2`
 text-align: center;
 font-weight:normal;
 position: relative;
 font-size:18px;
 font-weight:bold;
 margin: 40px  auto 0;
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
export const Time = styled.p`
font-size: 14px;
text-align: center;
width: 80%;
margin: 30px auto 10px

`
export const Input = styled.input`
display:none;
`
export const Sess = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 40px 0;
 
 @media (max-width:576px){
   flex-direction: column;
    text-align: center;
    width: 100%;
 }
 `
 export const List = styled.label`
 background-color: rgb(7, 57, 74);
 padding: 8px 20px;
 cursor: pointer;
 color: white;
 margin-left:10px;
 @media (max-width:576px) {
   margin: 0 auto 10px auto;
   width: 70%;

     }

   
 
 `
 export const BoxContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 2rem;
 justify-content: center;
 `

 export const Box = styled.div`
 overflow: hidden;
    box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
    border: 5px solid #fff;
    border-radius: .5rem;
    width: 300px;
    height: 200px;
    position: relative;
    padding: 0 !important;
    @media(max-width:576px){
      margin: 0 auto;
    }
   
 `
 export const Image = styled.img`
 height: 100%;
 width: 100%;

 position: absolute;
 right: 0;
 top: 0;
 `
export const Content = styled.div`
position: absolute;
top: 100%; 
left: 0;
bottom:0;
height: 100%;
width: 100%;
text-align: center;
background: rgba(7, 57, 74, 0.382);
transition: .5s linear;
flex-direction: column;
`
export const Head = styled.h3`
font-size: 25px;
    text-align: center;
    color: rgb(220,223,223);
    width: 100%;
    margin: auto;
    position: absolute;
    top: 60px

`
export const Timer = styled.p`
padding-top: 30px;
color:  rgb(220,223,223);
`
   


