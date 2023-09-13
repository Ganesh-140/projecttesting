import React, {
  useEffect,
  useState
} from 'react';
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  Autoplay,
  Pagination,
  Navigation
} from 'swiper/modules';

const CarouselComponent = () => {
  const [banners, setBanners] = useState([])
  useEffect(() => {
    fetch("./content/contain.json")
      .then((res) => res.json())
      .then((response) => {
        setBanners(response.banner);
      })
  }, [])

  return ( 
    <>
    <Swiper spaceBetween = {
      30
    }
    centeredSlides = {
      true
    }
    breakpoints = {
      {
        767: {
          slidesPerView: 1,
        },
        1300: {
          slidesPerView: 1,
        },
      }
    }
    autoplay = {
      {
        delay: 2500,
        disableOnInteraction: false,
      }
    }
    pagination = {
      {
        clickable: true,
      }
    }
    navigation = {
      true
    }
    modules = {
      [Autoplay, Pagination, Navigation]
    }>
    {
      banners.map((items, index) => {
        return <SwiperSlide key = {index}>
          <picture>
              <source media = "(max-width: 767px)" srcSet = {items.mobile}/>
              <img src = {items.desktop} alt=""/>
              </picture>
          </SwiperSlide>
      })
    }
     </Swiper>
     </>
  );
};

export default CarouselComponent;