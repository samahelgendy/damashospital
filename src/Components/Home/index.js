import React , {useEffect} from "react";
import {SecImage , Image ,Head ,Media , Span ,Content} from './style'

const Home = () =>{
    useEffect( () =>{
      const clic = document.querySelectorAll(".dfiimg");
      const img = document.querySelector(".main-img");
      
      clic.forEach( (cl) =>{
        cl.addEventListener('click' , () =>{
             document.querySelector('.points .active').classList.remove('active');
             cl.classList.add('active')
            img.src = cl.dataset.img
        })
      })
    })
    return(
        <SecImage className="img">
            <Image className="main-img" src="../images/img1.jpg" alt=""/>
            <div className="media">
                <Media>اعلان هام</Media>
            </div>
            <Head className="header"></Head>
            <Content className="points">
              <Span className="dfiimg active" first="1" data-img="../images/img1.jpg"></Span>
              <Span className="dfiimg" first="2" data-img="../images/img5.jpg"></Span>
              <Span className="dfiimg" first="3" data-img="../images/dr3.jpg"></Span>
              <Span className="dfiimg" first="4" data-img="../images/img2.jpg"></Span>
              <span></span>
              <span></span>
            </Content>
        </SecImage>
    )
      
}
export default Home;