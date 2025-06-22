import Swiper from 'swiper';
import {Autoplay, Navigation} from 'swiper/modules';

const swiperOurTrip = new Swiper('.our-trip__swiper', {
  modules:[Autoplay,Navigation],
  loop: true,
  autoplay:{
    delay:2000,
    disableOnInteraction: true,
  },
  speed:1800,
  breakpoints:{
    0:{
      slidesPerView:1.1,
      spaceBetween: 8,
    },
    769:{
      slidesPerView:1,
    }
  },
  navigation:{
    nextEl:".our-trip__btn-next",
    prevEl:".our-trip__btn-prev",
  },
})