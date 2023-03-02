import styled from "styled-components";

 export const Gallery = styled.div`
 background-color: #eee;
 padding:50px 0 80px 0;
 `

 export const Title = styled.h2`
font-size: 25px;
    text-align: center;
    color: rgb(46,149,189);
    position: relative;
    cursor:pointer;
    z-index:100;
    border: 1px solid;
    width: fit-content;
    margin: auto;
    padding: 5px 10px;
    border-radius: 4px;
    color:rgba(15,75,105);
    &:before , :after {
    content: "";
    position: absolute;
    background-color: rgba(15,75,105);
    width: 15px;
    height: 15px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    transition:.8s;
    z-index:-1
   
    }

    &:hover{
      color:white;

    }

    &:after {
        right: -25px;
    }

     &:before {
            left: -25px;
    }
    &:hover::after  {
        right: 0px;
        width:100%;
        height:100%;
        border-radius:0;
    }

    &:hover::before  {
        left: 0px;
        width:100%;
        height:100%;
        border-radius:0;
    }
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
`
export const Head = styled.h3`
font-size: 25px;
text-align: center;
color: rgb(220, 223, 223);
width: 100%;
margin:auto;

`



   


