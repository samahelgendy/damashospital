import React ,{useEffect , useState}  from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { Title ,Imagecon , Image , Contentxt ,Header , Praph ,Icon  } from './style';



const SocialMedia = () =>{
 
  const [med , setmed] = useState([]);

  useEffect( () =>{
   axios.get('js/data.json').then(res => {setmed(res.data.medicin)});
  } ,[])
   
  const medicins = med.map( (medicin) =>{
   return(
    <SwiperSlide key ={medicin.id}>
    <Imagecon className="contentimg">
    <Image className="img" src={medicin.image} />
    </Imagecon>
    <Contentxt>
      <Header>{medicin.medname}</Header>
      <Praph>{medicin.benfit}</Praph>
    </Contentxt>
    <Icon>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-regular fa-star"></i>
    </Icon>
  </SwiperSlide>
   )
  })
    return(
     
      
         <div className="container">
         <Title >الصيدلية</Title>
         <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
    
        {medicins}
      </Swiper>
         </div>
      
    
  
    )
   
      
}
export default SocialMedia;