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



const Heart = () =>{
 
  const [heart , setheart] = useState([]);

  useEffect( () =>{
   axios.get('js/data.json').then(res => {setheart(res.data.hearts)});
  } ,[])
   
  const hearts = heart.map( (hear) =>{
   return(
     
    <SwiperSlide key ={hear.id}>
    <Imagecon className="contentimg">
    <Image className="img" src={hear.image} />
    </Imagecon>
    <Contentxt>
    <Header>{hear.head}</Header>
    <Praph>{hear.prag}</Praph>
    </Contentxt>
    <Icon>

    </Icon>
  </SwiperSlide>

   )
  })
    return(
     <React.Fragment>
                 <div className="container">
         <Title >وحدة القسطرة والقلب</Title>
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
    
        {hearts}
      </Swiper>
         </div>
         <Footer />
     </React.Fragment> 
  
    )
   
      
}
export default Heart;