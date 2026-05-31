import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight, Divide } from "lucide-react";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";
import { Link, useNavigate } from "react-router-dom";

export default function CategoriesStonesCarousel({
  content,
  title,
  classNamePrev,
  classNameNext,
}) {
  const { categoryFilterHomePage, stonesFilterHomePage, clearFilters } =
    useFilteredProducts();
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute flex flex-col top-5/12 -right-10 z-20">
        {/* LEFT BTN */}
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

        {/* RIGHT BTN */}
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
                    ? "absolute left-1/2 -translate-x-1/2 top-1/2 text-gray-300 text-2xl font-semibold cursor-pointer"
                    : "absolute left-1/2 -translate-x-1/2 -bottom-2.5 text-gray-900 text-2xl font-semibold text-nowrap cursor-pointer"
                }`}
              >
                {item.name}
              </p>
              <Link to="/shop">
                <img
                  className="cursor-pointer"
                  src={`${item.url}`}
                  onClick={() => {
                    if (title === "Categories") {
                      clearFilters();
                      categoryFilterHomePage(item.value);
                      window.scrollTo(0, 0);
                    } else {
                      clearFilters();
                      stonesFilterHomePage(item.value);
                      window.scrollTo(0, 0);
                    }
                  }}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
