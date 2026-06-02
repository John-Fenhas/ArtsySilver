import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import useIsMobile from "../../hooks/isMobile";

export default function HeroSlider() {
  const isMobile = useIsMobile();

  const slides = isMobile
    ? [
        "https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/mobile-slider-img-1.webp",
        "https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/mobile-slider-img-2.webp",
      ]
    : [
        "https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/slider-img-1.webp",
        "https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/slider-img-2.webp",
        "https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/slider-img-3.webp",
        "https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/slider-img-4.webp",
      ];

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <img className="w-full h-auto scale-100" src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
