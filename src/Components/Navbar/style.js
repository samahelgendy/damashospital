import styled from 'styled-components';

export const Nav = styled.div`
background-color: rgb(186,196,200);
position: fixed;
z-index: 1000;
width: 100%;
top:0px;
`
export const Slice = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const Img = styled.img`
width:60px;
height:60px;
background-size: cover;
border-radius:50%;
`

export const Lists = styled.ul`
display:flex;
@media(max-width:768px){
    position: absolute;
    right: 0;
    display: inline-block;
    top: 48px;
    background-color:rgba(7, 57, 74, 0.507);
    width: 100%;
    margin-right: -40px;
    clip-path: polygon( 0 0 , 100% 0 ,100% 0 ,0 0);
    z-index: 10;
}
`
export const List = styled.li`
@media(max-width:768px){
    background-color: rgb(106, 154, 178);
    padding: 10px;
    margin: 10px;
    border-radius: 6px;
    &:hover{
        background-color: rgba(15,75,105,0.491);
        
      }

}
`
export const Icon = styled.i`
font-size: 25px;
cursor:pointer;
@media(max-width:992px){
    font-size: 20px;  
    
}
&:hover{
    color: rgb(19, 52, 64);
}
`
export const MenuBar = styled.div`
border: 1px solid white;
    padding: 7px 10px;
    border-radius: 6px;
    font-size: 25px;
    cursor: pointer;
    display: none; 
    color: white;
    @media(max-width:768px){
        display: block;         
    }  
`
export const Form =styled.form`
background-color: rgba(15,75,105,0.491);
    text-align: center;
    padding: 10px;
    -webkit-clip-path: polygon( 0 0 ,100% 0 ,100% 0 ,0 0);
    clip-path: polygon( 0 0 ,100% 0 ,100% 0 ,0 0);
    position: absolute;
    width: 100%;
    margin: 0 !important;
    position: absolute;
    right: 0;
    top: 63px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const Input =styled.input`
    width: 90%;
    font-size: 20px;
    padding: 8px;
    border-radius: 6px;
    margin-left: 20px;
`
export const FormCon = styled.div`
   position: absolute;
    background-color: rgba(15,75,105,0.491);
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 10000;
    clip-path: polygon(0 0 , 100% 0 , 100% 0 , 0 0);
    right: 0;
    top: 62px;
`

export const FormLogin = styled.form`
position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50% ,-50%);
    -ms-transform: translate(-50% ,-50%);
    transform: translate(-50% ,-50%);
    background-color: white;
    padding: 20px;
    border-radius: 6px;
    @media(max-width:768px){
        width:80%;
    }
`


export const HeaderLog = styled.h3`
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
`

export const EmailForm = styled.input`
   border: 1px solid #333;
    width: 100%;
    font-size: 20px;
    padding: 5px;
    margin-bottom: 10px;
`

export const PassWord = styled.input`
border: 1px solid #333;
width: 100%;
font-size: 20px;
padding: 5px;
margin-bottom: 10px;
`

export const LoginPass = styled.input`
position: absolute;
left: 9px;
padding: 5px;
color: white;
font-size: 20px;
cursor: pointer;
background-color: rgba(15,75,105,0.491);
margin-bottom: 20px !important;
right: 20px;
    &:hover{
        background: rgba(176, 210, 224, 0.466);   
        color:rgb(15, 82, 109);
        border: 1px solid rgb(15, 82, 109);
    }


`
export const InputCheck = styled.input`
  margin-top: 50px;

`

export const LinkLogin = styled.a`
&:hover{
    color: gray;
    text-decoration: underline;
}
`
export const LoginNow = styled(LinkLogin)`
background-color:white;
`
export const Check = styled.input`
position: absolute;
    width: 40px;
    background: red;
    height: 90px;
    opacity: 0;
    cursor: pointer;
`
export const CheckSea = styled.input`
position: absolute;
    width: 20px;
    height: 20px;
    opacity: 0;
    cursor: pointer;
`
export const CheckForm = styled.input`
    position: absolute;
    width: 20px;
    height: 20px;
    opacity: 0;
    cursor:pointer;
`