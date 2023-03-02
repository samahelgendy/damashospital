import styled from "styled-components";

export const Pragproc = styled.p`
  width:70%;
  text-align:center;
  margin:auto;
  @media(max-width:578px){
    width:90%;
  }

`

export const Img = styled.img`
width: 100%;
height: 150px;

`
export const PartTitle = styled.h4 `
font-size: 18px;
color: rgb(46, 149, 189);
    margin: 40px 0 0;
`


export const Desc = styled.p `
font-size: 18px;
color: rgba(3,36,47,0.769);
`

export const Slide = styled.div`
display: grid;
 grid-template-columns: repeat(auto-fill , minmax(250px , 1fr));
 gap:40px;
`
export const Part = styled.div `
margin-top:50px;
padding: 0 0 50px;
border: 1px solid #888;
text-align: center;
box-shadow: 2px 2px 2px 2px rgb(46, 149, 189);
transition: 0.5s;
position:relative;
border-radius: 6px;
&:hover{
    
    transform: translateY(-10px);
    }

`
export const Sal = styled.div`
display: flex;
justify-content: space-around;

`
export const Delsal = styled.span`
color: #777;
text-decoration: line-through;
`