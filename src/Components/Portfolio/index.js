
import React ,{useEffect} from "react";
// import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';
import {Gallery , Input , Sess , List , BoxContainer , Box , Image , Content , Head , Title} from './style'
const Portfolio = () =>{


       
   useEffect( () =>{
    let lists = document.querySelectorAll('.sess .list');
     
      lists.forEach( (list) =>{
        list.addEventListener('click' , (e) =>{
           document.querySelector(".active").classList.remove("active");
           list.classList.add("active");
           


           
     
      })
   })


   })
    return(   
        
     

        <Gallery className="gallery" id="gallery">
          
        <Input type="radio" id="check1" name="photos" />
        <Input type="radio" id="check2" name="photos" />
        <Input type="radio" id="check3" name="photos" />
        <Input type="radio" id="check4" name="photos" />
        <Input type="radio" id="check5" name="photos" />
        <Title> الفحص والتشخيص</Title>

    <Sess className="sess">
        <List className="all list active" for="check1" >كل الاقسام</List>
        <List className="ray list"  for="check2" >الأشعة</List>
        <List className="lab list"  for="check3">التحاليل</List>
        <List className="heart list"  for="check4">رسم القلب</List>
        <List className="biolg list" for="check5">المناظير</List>
    </Sess>
    
        <BoxContainer className="box-container">
            
            <Box className="box hearts">
                <Image src="../images/heart3.jpg" alt="" />
                <Content className="content">
                <Head>رسم القلب بالمجهود</Head>
                </Content>
            </Box>

            <Box className="box rays">
                <Image src="../images/rays (2).jpg" alt="" />
                <Content className="content">
                <Head>معمل التحاليل</Head>
                </Content>
            </Box>

            <Box className="box labs">
                <Image src="../images/labs.jpg" alt="" />
                <Content className="content">
                <Head>معمل التحاليل</Head>
                </Content>
            </Box>

            <Box className="box binoculars">
                <Image src="../images/bilog.jpg" alt="" />
                <Content className="content">
                <Head>المناظير</Head>
                </Content>
            </Box>

            <Box className="box hearts">
                <Image src="../images/heart.jpg" alt="" />
                <Content className="content">
                <Head>رسم القلب بالمجهود</Head>
                </Content>
            </Box>

            <Box className="box rays">
                <Image src="../images/rays9.jpg" alt="" />
                <Content className="content">
                <Head>الاشعة</Head>
                </Content>
            </Box>
            <Box className="box binoculars">
                <Image src="../images/bilog2.jpg" alt="" />
                <Content className="content">
                <Head>مناظير القولون</Head>
                </Content>
            </Box>

            <Box className="box rays">
                <Image src="../images/rays9.jpg" alt="" />
                <Content className="content">
                <Head>معمل التحاليل</Head>
                </Content>
            </Box>

            <Box className="box labs">
                <Image src="../images/labs2.jpg" alt="" />
                <Content className="content">
                <Head>معمل التحاليل</Head>
                </Content>
            </Box>

            <Box className="box binoculars">
                <Image src="../images/bilog3.jpg" alt="" />
                <Content className="content">
                <Head>المناظير</Head>
                </Content>
            </Box>

            <Box className="box hearts">
                <Image src="../images/hear.jpg" alt="" />
                <Content className="content">
                <Head>رسم القلب بالمجهود</Head>
                </Content>
            </Box>

            <Box className="box rays">
                <Image src="../images/rays3 (2).jpg" alt="" />
                <Content className="content">
                <Head>الاشعة</Head>
                </Content>
            </Box>

        </BoxContainer>
        </Gallery>

    )
      


}

export default Portfolio;