import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind('[data-fancybox="gallery"]',{
  dragToClose: true,
  Carousel:{
     Thumbs:{
       type: "modern",
     }
    }
  }
)