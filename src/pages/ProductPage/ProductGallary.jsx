import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import GallarySkeleton from "./GallarySkeleton";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/thumbs";

export default function ProductGallery({ productData, isLoading }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  if (isLoading) {
    return <GallarySkeleton />;
  }

  const images = productData.images;

  return (
    <div className="max-w-5/6 mx-auto">
      {/* MAIN IMAGE */}
      <Swiper
        spaceBetween={10}
        modules={[Thumbs]}
        autoHeight={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mb-3"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img.url}
              className="w-full h-auto object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMBNAILS */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={"auto"}
        freeMode={true}
        modules={[FreeMode, Thumbs]}
      >
        {images.map((img, i) => (
          <SwiperSlide className="p-0.5 max-w-fit" key={i}>
            <img
              src={img.url}
              className="w-full h-20 object-contain rounded-sm cursor-pointer shadow-md shadow-gray-300 hover:scale-105 transition-all duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
