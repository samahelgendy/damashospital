import React from "react";
import './style.css';
const Footer = () =>{
    return(

      <div>
      
      <div className="footer">
          <div className="container">
          
          <div className="content">

            <div className="sites">
              <h6>مركز الكبد والجهاز الهضمى بدماص</h6>
              <div className="social">
                <ul>
                    <li><a href="https://www.facebook.com/hospitaldmas" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.google.com/search?q=%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D9%84%D9%83%D8%A8%D8%AF+%D9%88%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2+%D8%A7%D9%84%D9%87%D8%B6%D9%85%D9%89+%D8%A8%D8%AF%D9%85%D8%A7%D8%B5&sxsrf=AJOqlzWqj5tnnRVvpShP1cq-1VfVDj2tZA:1677186401946&source=lnms&tbm=vid&sa=X&ved=2ahUKEwjS1Nadxqz9AhUzhP0HHbdCDiAQ_AUoA3oECAEQBQ&biw=1280&bih=609&dpr=1.5#fpstate=ive&vld=cid:4f5b87a6,vid:qbFK0qeMqlA" target="_
                    "><i className="fab fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                </ul>
            </div>

          </div>
          

               <div className="confooter">
                <div className="address">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="prag">
                        <p>محافظة الدقهلية , المنصورة</p>
                        <p>دماص , ميدان المحطة</p>
                        </div>
                </div>
                <div className="address">
                    <i className="far fa-clock"></i>
                   <div className="prag">
                   <p>الفترة الصباحية:- (ص9- 2م) السبت : الخميس</p>
                    <p>الفترة المسائية:- (م5 -8م) السبت : الخميس</p>
                   </div>
            </div>
            <div className="address">
                <i className="fas fa-mobile-alt"></i>
                 <div className="prag">
                 <p>0504885509</p>
                <p>damas@gmail.com</p>
                 </div>
           </div>
            </div>
          
          </div>
         </div> 
      </div>
      </div>
      
    )
      
}

export default Footer;