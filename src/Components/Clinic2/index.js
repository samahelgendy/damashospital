import React , {Component , useEffect} from 'react';
import Footer from '../Footer/index';
import {Gallery , Input , Sess , List , BoxContainer , Box , Image , Content , Head , Timer , Heads , Time} from './style'
const Clinic2 = ()=>{

    useEffect( () =>{
        let clincs = document.querySelectorAll('.sess .clinc');
         
         clincs.forEach( (clinc) =>{
            clinc.addEventListener('click' , (e) =>{
               document.querySelector(".active").classList.remove("active");
               clinc.classList.add("active");
        
          });
       })
    
    
       })

    return(
        <div>
           <React.Fragment>

           <Gallery className="gallery" id="gallery">
          
          <Input type="radio" id="check6" name="photos" />
          <Input type="radio" id="check7" name="photos" />
          <Input type="radio" id="check8" name="photos" />
          <Input type="radio" id="check9" name="photos" />
          <Input type="radio" id="check10" name="photos" />
          <Heads> العيادات الخارجيه فى الفترة المسائية</Heads>
          <Time>يتوفر بالمركز العيادات الخارجية جميع التخصصات وذلك فى ايام السبت الى الخميس من كل اسبوع وفى تمام الساعة الخامسة مساء الى الساعة الثامنة مساء</Time>
  
      <Sess className="sess">
          <List className="all clinc active" for="check6" >العيادات الخارجية</List>
          <List className="rays clinc"  for="check7" >الباطنة</List>
          <List className="labs clinc"  for="check8">الجراحة</List>
          <List className="hearts clinc"  for="check9">العظام</List>
          <List className="biolgs clinc" for="check10">القلب</List>
      </Sess>
      
          <BoxContainer className="box-container">
              
  
              <Box className="boxs ray">
                  <Image src="../images/clinc1.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ محمد السعيد </Head>
                  <Timer>المواعيد : السبت والأحد والثلاثاء</Timer>
                  </Content>
              </Box>
  
              <Box className="boxs lab">
                  <Image src="../images/clinc2.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ أحمد حسنى</Head>
                  <Timer>المواعيد : السبت والثلاثاء والخميس</Timer>
                  </Content>
              </Box>
  
              <Box className="boxs binocular">
                  <Image src="../images/clinc3.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ علاء جلال</Head>
                  <Timer>المواعيد : الثلاثاء والأربعاء</Timer>
                  </Content>
              </Box>
  
              <Box className="boxs ray">
                  <Image src="../images/clinc5.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ عصام عشوش</Head>
                  <Timer>المواعيد : السبت والأحد والثلاثاء</Timer>
                  </Content>
              </Box>

              <Box className="boxs binocular">
                  <Image src="../images/clinc6.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ محمد على</Head>
                  <Timer>المواعيد : الأحد والخميس</Timer>
                  </Content>
              </Box>
  
              <Box className="boxs heart">
                  <Image src="../images/clinc9.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ عمرو محفوظ</Head>
                  <Timer>المواعيد :الثلاثاء</Timer>
                  </Content>
              </Box>
  

  
          </BoxContainer>
          </Gallery>
  

            <Footer />
            </React.Fragment> 
        </div>
    )
}

export default Clinic2;