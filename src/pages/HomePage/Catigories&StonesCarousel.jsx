import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight, Divide } from "lucide-react";

export default function CategoriesStonesCarousel({
  content,
  title,
  classNamePrev,
  classNameNext,
}) {
  return (
    <div className="relative">
      <div className="absolute flex flex-col top-5/12 -right-10 z-20">
        {/* LEFT  */}
        <button className={`cursor-pointer ${classNameNext}`}>
          <div
            className="
              w-11 h-11 flex items-center justify-center
              bg-black backdrop-blur
              border-none
              rounded-t-2xl
              shadow-md
            "
          >
            <ChevronLeft color="white" />
          </div>
        </button>

        {/* RIGHT */}
        <button className={`cursor-pointer ${classNamePrev}`}>
          <div
            className="
              w-11 h-11 flex items-center justify-center
              bg-black backdrop-blur
              border-none
              rounded-b-2xl
              shadow-md
            "
          >
            <ChevronRight color="white" />
          </div>
        </button>
      </div>
      <div className="relative left-[49%] -translate-x-1/2 w-screen">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: `.${classNamePrev}`,
            nextEl: `.${classNameNext}`,
          }}
          slidesPerView={"auto"}
          spaceBetween={20}
          centeredSlides={false}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesOffsetBefore: 20,
              slidesOffsetAfter: 20,
            },
            480: {
              slidesOffsetBefore: 22,
              slidesOffsetAfter: 22,
            },
            640: {
              slidesOffsetBefore: 24,
              slidesOffsetAfter: 24,
            },
            768: {
              slidesOffsetBefore: 26,
              slidesOffsetAfter: 26,
            },
            1024: {
              slidesOffsetBefore: 80,
              slidesOffsetAfter: 80,
            },
            1280: {
              slidesOffsetBefore: 96,
              slidesOffsetAfter: 96,
            },
            1441: {
              slidesOffsetBefore: 156,
              slidesOffsetAfter: 156,
            },
          }}
        >
          {content.map((item) => (
            <SwiperSlide
              key={item.name}
              className="
                w-80!
                md:w-86!
                lg:w-[320px]!
                xl:w-95!
                h-auto bg-white rounded-xl flex items-center justify-center
                relative
                mb-12
              "
            >
              <p
                className={`${
                  title === "Categories"
                    ? "absolute left-1/2 -translate-x-1/2 top-1/2 text-gray-300 text-2xl font-semibold"
                    : "absolute left-1/2 -translate-x-1/2 -bottom-2.5 text-gray-900 text-2xl font-semibold text-nowrap"
                }`}
              >
                {item.name}
              </p>
              <img src={`${item.url}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
