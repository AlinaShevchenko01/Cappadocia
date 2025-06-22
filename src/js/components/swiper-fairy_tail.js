import Swiper from 'swiper';
import {Autoplay, Navigation} from 'swiper/modules';


const swiperFairyTail= new Swiper('.fairy-tail__swiper',{
  modules:[Autoplay, Navigation],
  loop:true,
  autoplay:{
    delay:1800,
    disableOnInteraction: true,
  },
  speed:1800,
  breakpoints: {
    0:{
      slidesPerView:1.1,
      spaceBetween: 8,
    },
    769:{
      slidesPerView:1,
    }
  },
  navigation:{
    nextEl:'.fairy-tail__btn-next',
    prevEl:'.fairy-tail__btn-prev',
  },
});