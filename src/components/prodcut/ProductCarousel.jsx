import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";

export default function ProductCarousel({ products }) {
  return (
    <div className="relative group">
      {/* NAV BUTTONS */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* LEFT */}
        <button className="product-prev pointer-events-auto absolute -left-3 top-1/3 -translate-y-1/2">
          <div
            className="
              w-11 h-11 flex items-center justify-center
              bg-white/90 backdrop-blur
              border border-black/10
              rounded-[14px]
              shadow-md
              transition-all duration-300 ease-out
              opacity-0 scale-75
              group-hover:opacity-100 group-hover:scale-100
              hover:scale-110 active:scale-95
            "
          >
            <ChevronLeft />
          </div>
        </button>

        {/* RIGHT */}
        <button className="product-next pointer-events-auto absolute -right-3 top-1/3 -translate-y-1/2">
          <div
            className="
              w-11 h-11 flex items-center justify-center
              bg-white/90 backdrop-blur
              border border-black/10
              rounded-[14px]
              shadow-md
              transition-all duration-300 ease-out
              opacity-0 scale-75
              group-hover:opacity-100 group-hover:scale-100
              hover:scale-110 active:scale-95
            "
          >
            <ChevronRight />
          </div>
        </button>
      </div>

      <div className="relative left-1/2 -translate-x-1/2 w-screen lg:left-0 lg:translate-x-0 lg:w-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".product-next",
            prevEl: ".product-prev",
          }}
          spaceBetween={16}
          speed={500}
          grabCursor={true}
          breakpoints={{
            //MOBILE
            0: {
              slidesOffsetBefore: 40,
              slidesOffsetAfter: 40,
            },
            640: {
              slidesOffsetBefore: 80,
              slidesOffsetAfter: 80,
            },
            768: {
              slidesOffsetBefore: 120,
              slidesOffsetAfter: 120,
            },

            //DESKTOP
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="
                w-1/2!
                sm:w-1/3!
                md:w-1/3!
                lg:w-[calc(25%-12px)]!
              "
            >
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
