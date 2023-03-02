import React , {Component , useEffect} from 'react';

import {Gallery , Input , Sess , List , BoxContainer , Box , Image , Content , Head , Timer , Heads , Time} from './style'
const Clinic = ()=>{

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
        <div>
           

           <Gallery className="gallery" id="gallery">
          
          <Input type="radio" id="check1" name="photos" />
          <Input type="radio" id="check2" name="photos" />
          <Input type="radio" id="check3" name="photos" />
          <Input type="radio" id="check4" name="photos" />
          <Input type="radio" id="check5" name="photos" />
          <Heads> العيادات الخارجيه فى الفترة الصباحية</Heads>
          <Time>يتوفر بالمركز العديد من العيادات مثل (عيادات الباطنة العامة ,  عيادات الجراحه العامة وجراحة الجهاز الهضمى , عيادة الامراض الصدرية ,  عيادة القلب والاوعية الدموية)وذلك فى ايام السبت الى الخميس من كل اسبوع وفى تمام الساعة التاسعة صباحا الى الساعة الثانية ظهرا</Time>
  
      <Sess className="sess">
          <List className="all list active" for="check1" >العيادات الخارجية</List>
          <List className="ray list"  for="check2" >الباطنة</List>
          <List className="lab list"  for="check3">الجراحة</List>
          <List className="heart list"  for="check4">الصدر</List>
          <List className="biolg list" for="check5">القلب</List>
      </Sess>
      
          <BoxContainer className="box-container">
              
              <Box className="box hearts">
                  <Image src="../images/clinc.jpg" alt="" />
                  <Content className="content">
                  <Head>د / عبدالغنى بدران</Head>
                  <Timer>المواعيد : السبت والأحد والثلاثاء</Timer>
                  </Content>
              </Box>
  
              <Box className="box rays">
                  <Image src="../images/clinc1.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ محمد السعيد </Head>
                  <Timer>المواعيد : السبت والأحد والثلاثاء</Timer>
                  </Content>
              </Box>
  
              <Box className="box labs">
                  <Image src="../images/clinc2.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ أحمد حسنى</Head>
                  <Timer>المواعيد : السبت والثلاثاء والخميس</Timer>
                  </Content>
              </Box>
  
              <Box className="box binoculars">
                  <Image src="../images/clinc3.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ علاء جلال</Head>
                  <Timer>المواعيد : الثلاثاء والأربعاء</Timer>
                  </Content>
              </Box>
  
              <Box className="box hearts">
                  <Image src="../images/clinc4.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ فتحى الجندى</Head>
                  <Timer>المواعيد : السبت والأحد والثلاثاء</Timer>
                  </Content>
              </Box>
  
              <Box className="box rays">
                  <Image src="../images/clinc5.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ عصام عشوش</Head>
                  <Timer>المواعيد : السبت والأحد والثلاثاء</Timer>
                  </Content>
              </Box>
              <Box className="box binoculars">
                  <Image src="../images/clinc6.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ محمد على</Head>
                  <Timer>المواعيد : الأحد والخميس</Timer>
                  </Content>
              </Box>
  
              <Box className="box rays">
                  <Image src="../images/clinc7.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ محمد الألفى</Head>
                  <Timer>المواعيد : السبت والأحد والثلاثاء</Timer>
                  </Content>
              </Box>
  
              <Box className="box labs">
                  <Image src="../images/clinc8.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ غانم</Head>
                  <Timer>المواعيد : السبت والخميس</Timer>
                  </Content>
              </Box>
  
              <Box className="box binoculars">
                  <Image src="../images/clinc9.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ محمد خيرى</Head>
                  <Timer>المواعيد : السبت والثلاثاء</Timer>
                  </Content>
              </Box>
  
              <Box className="box hearts">
                  <Image src="../images/clinc10.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ هبه ابو الحسن</Head>
                  <Timer>المواعيد : السبت والأحد والثلاثاء</Timer>
                  </Content>
              </Box>
  
              <Box className="box rays">
                  <Image src="../images/clinc11.jpg" alt="" />
                  <Content className="content">
                  <Head>د/ محمد عادل</Head>
                  <Timer>المواعيد : السبت والأحد والثلاثاء</Timer>
                  </Content>
              </Box>
  
          </BoxContainer>
          </Gallery>
  

        </div>
    )
}

export default Clinic;