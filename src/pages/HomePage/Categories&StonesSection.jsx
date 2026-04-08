import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight, Divide } from "lucide-react";
import Button from "../../components/ui/Button";

export default function CategoriesStonesSection({ title, content }) {
  return (
    <div className="relative ">
      {/*TITLE*/}
      <h2 className="text-3xl text-center font-semibold mb-10">{title}</h2>
      {/*BTNS*/}
      <div className="absolute flex flex-col top-5/12 right-20 z-20">
        {/* LEFT  */}
        <button className="catigories-stones-next cursor-pointer">
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
        <button className="catigories-stones-prev cursor-pointer">
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
            prevEl: ".catigories-stones-prev",
            nextEl: ".catigories-stones-next",
          }}
          slidesPerView={"auto"}
          spaceBetween={20}
          centeredSlides={false}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesOffsetBefore: 56,
              slidesOffsetAfter: 56,
            },
            480: {
              slidesOffsetBefore: 80,
              slidesOffsetAfter: 80,
            },
            640: {
              slidesOffsetBefore: 120,
              slidesOffsetAfter: 120,
            },
            768: {
              slidesOffsetBefore: 150,
              slidesOffsetAfter: 150,
            },
            1024: {
              slidesOffsetBefore: 170,
              slidesOffsetAfter: 170,
            },
            1280: {
              slidesOffsetBefore: 200,
              slidesOffsetAfter: 200,
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
                    : "absolute left-1/2 -translate-x-1/2 -bottom-2.5 text-gray-900 text-2xl font-semibold"
                }`}
              >
                {item.name}
              </p>
              <img src={`${item.url}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-12">
        <Button>View All</Button>
      </div>
    </div>
  );
}
