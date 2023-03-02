import styled from "styled-components";



export const Title = styled.h2`
font-size: 25px;
    text-align: center;
    color: rgb(46,149,189);
    position: relative;
    cursor: pointer;
    z-index: 100;
    border: 1px solid;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin: 0 auto 130px;
    padding: 5px 10px;
    border-radius: 4px;
    color: rgba(15,75,105);
    top: 100px;
    &:before , :after {
    content: "";
    position: absolute;
    background-color:rgba(15,75,105);
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

export const Imagecon = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #fff;

`
export const Contentxt = styled.div`
text-align:center;
`
export const Header = styled.h4`
font-size: 30px;
    font-weight: normal;
    margin: 20px 0;

`
export const Praph = styled.p`
line-height: 1.8;
color: #777;
padding: 0 30px;
width:60%;
margin: 0 auto;
text-align:center;
@media(max-width:568px){
    width:90%; 
    margin: 0 auto;
    text-align:center;
}

`
export const Icon = styled.div`
margin: 20px 0 0;
`
