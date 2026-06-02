import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";
import SkeletonProductCard from "./skeletonProductCard";
import { useEffect } from "react";

export default function ProductCarousel({ products, isLoading }) {
  return (
    <div className="relative group min-h-72">
      {/* NAV BUTTONS */}
      <div
        className="
      z-10 pointer-events-none hidden h-auto
      lg:absolute lg:inset-0 lg:block lg:h-auto
      "
      >
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

      <div className="relative left-[47%] -translate-x-[47%] w-screen lg:left-0 lg:translate-x-0 lg:w-auto">
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
            0: {
              slidesPerView: 1.1,
              slidesOffsetBefore: 20,
              slidesOffsetAfter: 20,
            },
            640: {
              slidesPerView: 2.2,
              slidesOffsetBefore: 22,
              slidesOffsetAfter: 22,
            },
            768: {
              slidesPerView: 2.2,
              slidesOffsetBefore: 24,
              slidesOffsetAfter: 24,
            },
            1024: {
              slidesPerView: 3,
              slidesOffsetBefore: 26,
              slidesOffsetAfter: 26,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {isLoading
            ? Array.from({ length: 12 }).map((i) => (
                <SwiperSlide key={i} className="h-auto">
                  <SkeletonProductCard />
                </SwiperSlide>
              ))
            : products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
}
