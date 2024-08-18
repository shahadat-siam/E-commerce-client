import img1 from "../../../assets/images/banner (1).jpg";
import img2 from "../../../assets/images/banner.jpg";
import img3 from "../../../assets/images/banner3.jpg";
import img4 from "../../../assets/images/banner4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"; 
import 'swiper/css/navigation';

import { Autoplay,Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide"; 

export default function Slider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, 
        }} 
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation  ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide image={img1} title={'Discover New Arrivals'} subtitle={'Explore our latest collection'} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={img2} title={'Special Offers'} subtitle={'Limited-time discounts'}/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={img3} title={'Free Shipping'} subtitle={'On orders over $200'}/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={img4} title={'Your Gateway to Style'} subtitle={'Shop Trendy Fashion at Unbeatable Prices'}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
