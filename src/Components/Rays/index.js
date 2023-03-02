import React ,{useEffect , useState}  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { Title ,Imagecon , Image , Contentxt ,Header , Praph ,Icon  } from './style';



const Analyze = () =>{
 
  const [ray , setray] = useState([]);

  useEffect( () =>{
   axios.get('js/data.json').then(res => {setray(res.data.rays)});
  } ,[])
   
  const rays = ray.map( (ray) =>{
   return(
     
    <SwiperSlide key ={ray.id}>
    <Imagecon className="contentimg">
    <Image className="img" src={ray.image} />
    </Imagecon>
    <Contentxt>
    <Header>{ray.head}</Header>
    <Praph>{ray.prag}</Praph>
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
     <React.Fragment>
                 <div className="container">
         <Title >الأشعة</Title>
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
            slidesPerView: 1,
            slidesPerGroup: 1,
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
    
        {rays}
      </Swiper>
         </div>
         <Footer />
     </React.Fragment> 
  
    )
   
      
}
export default Analyze;