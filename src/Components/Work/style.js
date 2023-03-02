import styled from "styled-components";

export const WorkSec = styled.div `
height: auto;
padding: 40px 0;
overflow: hidden;
background: #fff;
padding: 80px 0 50px 0;
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
    margin: auto auto 50px auto;
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
export const Slide = styled.div`
display: grid;
 grid-template-columns: repeat(auto-fill , minmax(250px , 1fr));
 gap:40px;
`
export const Part = styled.div `
padding: 100px 0;
border: 1px solid #888;
text-align: center;
box-shadow: 2px 2px 2px 2px rgb(46, 149, 189);
transition: 0.5s;
position:relative;
border-radius: 6px;
&:hover{
    
    transform: translateY(-10px);
    }
&::after{
    content: "";
    position: absolute;
    top:50%;
    left: 50%;
    transform:translate(-50% , -50%);
    background: rgba(70, 125, 147, 0.496);   
    transition:0.5s;
    z-index:-1;
    width: 0%;
    height: 0%;
}
&:hover::after{
    width: 100%;
    height: 100%;
}

`
export const Img = styled.img`
width:120px;
height:120px;
border-radius:50%;
margin-top: -55px;
`
export const Drname = styled.h2 `
color: rgb(16, 77, 101);
margin-bottom: 20px;

margin-bottom: -20px;
 
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
export const Btn = styled.button`
    font-size: 18px;
    font-weight: bold;
    background: rgb(46,149,189);
    padding: 7px 20px;
    cursor: pointer;
    color:white;
`
