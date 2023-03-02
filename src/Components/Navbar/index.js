import React , {useEffect , useState ,Component} from "react";

import {Link} from "react-router-dom";
import {Nav , Slice , Img , Lists ,Icon , MenuBar ,List , Form ,Input , FormCon , FormLogin , HeaderLog ,EmailForm , PassWord ,LoginPass , InputCheck ,LinkLogin , LoginNow , Check , CheckSea , CheckForm} from "./style.js"
const Navbar = ()=> {
useEffect( ()=>{
let navsearch = document.getElementById('search-bar');
let textsea = document.querySelectorAll("h2");
navsearch.addEventListener('keyup' , (e) =>{
    let consea = e.target.value;
   
   textsea.forEach( (text) =>{
      if(text.textContent.includes(consea)){
         text.parentNode.style.display="block";
      } else{
         text.parentNode.style.display="none";
      }
   })
});

});
  
    return(
<div>

  

<Nav className="nav">
           <div className="container">
            
             <Slice>
             <Check type="checkbox" id="checkmenu" />
             <MenuBar id="menu-bar" className="fas fa-bars"></MenuBar>
                <a href="https://www.facebook.com/hospitaldmas" target="_blank">
                 <Img src="../images/img2.jpg" />
                </a>
     
     
                <Lists className="lists menu">
                 <List> <Link className="link" to='/'>الرئيسية</Link></List>
                 <List> <Link className="link" to='/Clinic'>العيادات</Link></List>
                 <List> <Link className="link" to="/Phramcy">الصيدلية</Link></List>
                 <List> <Link className="link" to="/Analyze"> التحاليل</Link></List>
                 <List> <Link className="link" to="/Rays">الاشعة</Link></List>
                 <List> <Link className="link" to="/Heart">القسطرةوالقلب</Link></List>
                 <List> <Link className="link" to="/Proces">العمليات</Link></List>
                 <List> <Link className="link"  to='/Contact'>اتصل بنا</Link></List>
     
                 
                </Lists>
     
             <div className="icons">
             <CheckSea type="checkbox" id="checksearch" />
             <Icon className="fas fa-search" id="search-btn"></Icon>
             <CheckForm type="checkbox" id="checkform" />
             <Icon className="fas fa-user" id="login-btn"></Icon>
             <Form action="" className="search-bar-container sear">
             <Input type="search" id="search-bar" placeholder="ابحث هنا..." />
             
             <Icon className="fas fa-search" id="search-btn sear"></Icon>
            </Form>

            <FormCon className="login">
            
            <FormLogin>
             <HeaderLog>login</HeaderLog>
             <EmailForm type="email" placeholder="أدخل الايميل" for="" />
             <PassWord type="password" placeholder="أدخل كلمة السر" for="" />
             <LoginPass type="submit" value="تسجيل الدخول الان"  for="" />
             <InputCheck type="checkbox" id="remember" for="" />
             <label for="remember">تذكرنى</label>
             <p>نسيت كلمه المرور? <LinkLogin href="#">اضغط هنا</LinkLogin></p>
             <p>ليس لديك حساب? <LoginNow href="#">سجل الأن</LoginNow></p>
         </FormLogin>  
            </FormCon>
                </div>
             </Slice>
     
           </div>

     
        </Nav>
</div>
     
        
         )


}


export default Navbar;
