import React from "react";
import  './style.css';
import Footer  from "../Footer/index";
const Contact = () =>{
    return(
    <React.Fragment>
     <div className="drop">
  <div className="container">
      <h4 className="samah" data-text ="اتصل بنا"> 
      <span className="line">اتصل بنا</span>
      </h4>
      <form action="">
          <div className="form-input">
              <input type="text" placeholder="ادخل اسمك" required />
              <input type="email" placeholder="ادخل الايميل" required />
          </div>
          <input type="text" className="sub" placeholder="اكتب الموضوع" required />
          <textarea cols="30" rows="10" placeholder="اكتب الرسالة" required ></textarea>
          <input type="submit" value="ارسال" />
      </form>
  </div>
</div>
<Footer />
   </React.Fragment>
    )
      
}
export default Contact;