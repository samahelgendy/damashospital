import styled from "styled-components";

export const Govern = styled.div`
margin-bottom:50px;
margin-top: -20px;
    background-image: url(../images/home-bg.jpg);
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    &:hover{
        filter: grayscale(100%);
    }
`
export const Content = styled.div`
text-align: center;
    position: relative;
    top: 150px;
    width:70%;
    @media(max-width:768px){
        width:100%;
    }
`
export const Prag = styled.p`
color: #333;
margin-bottom: 30px;
`