
import React ,{useEffect , useState} from "react";
import Footer from "../Footer";
import {Phar , Article , Search , Input , Span , I , Con , Card , Text , Image , Imgmed ,PragText , Sale , Saledel} from './style'
import axios from "axios";
const Phramcy = () =>{
     const [prag , setprag] = useState([]);
    axios.get('js/data.json').then(res =>{
        setprag(res.data.phrmacy);
    } , []);

    const prags = prag.map( (pr) =>{
        return(
            <Card key ={pr.id}>
            <Image>
                <Imgmed src={pr.image} alt="" />
            </Image>
            <Text>
               <h2 className="namemed">{pr.title}</h2>
               <PragText>{pr.body}</PragText>
               <Sale>
               <Saledel>{pr.del}</Saledel>
               <p>{pr.sale}</p>
               </Sale>
            </Text>
        </Card >
        )
    })
    useEffect( () =>{

        


        


       let heads = document.querySelectorAll("h2.namemed");
       let search = document.querySelector(".search");
       search.addEventListener('keyup' , function (e){
           let searchVal = e.target.value.toLowerCase();
           heads.forEach( (head) =>{
              if(head.textContent.toLocaleLowerCase().includes(searchVal)){
                  head.parentNode.parentNode.style.display ="block";
              } else{
                head.parentNode.parentNode.style.display ="none";
              }
           })
       })
    })

    return(  

    <React.Fragment>
                <div className="gallery" id="gallery">
          <div className="container">
          <Phar> الأدوية المتوفرة بالمركز</Phar>
          <Article>
          يتوفر بالمركز أدويه لأمراض
          الكبد والجهازالهضمى والقلب والغدد والمناعة والسكر والضغط كما يتوفر العديد من الأدويه المستورده لعلاج فشل عضلة القلب والفشل الكلوى الضغط والسكر وجلطات القلب ونزيف الجهاز الهضمى
          </Article>
               
               <Search>
                <Input className="search" type="text" placeholder="ابحث هنا...." />
                <Span><I className="fa-sharp fa-solid fa-magnifying-glass"></I></Span>
               </Search>

               <Con>
                    { prags }
               </Con>
          </div>
        </div>
        <Footer />
    </React.Fragment>
    )

      


}

export default Phramcy;