import React ,{useEffect , useState} from "react";
import {Govern ,Content , Prag} from './style'
import axios  from "axios";

const Profile = () =>{

      
        return (
        <Govern className="govern">

         <div className="container">
         <Content>
            <h2>قسم نفقة الدولة</h2>
            <Prag>
          قسم نفقة الدولة من اهم الاقسام بمركز الكبد والجهاز الهضمى لصرف الادوية بالمجان للمرضى الفقراء والمحتاجين 
            </Prag>

            <Prag>
                    يعمل قسم نفقة الدولة على عمل قرارات وقضاء كافة الاجراءات الطبية التى يحتاجها المريض من أدوية وأشعة وتحاليل وعمليات صغرى وكبرى ان لازم الأمر وهذا لمدة ستة أشهر ثم يأتى المريض بأوراق الازمة من أشعة وتحاليل وصورتين من البطاقة الشخصية لتجديد القرار الخاص به مرة ثانية                
          </Prag>
           </Content>
         </div>
          
        </Govern>

     
        )
      
}

export default Profile;