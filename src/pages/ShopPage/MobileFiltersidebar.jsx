import { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import CollapsibleBlock from "../../components/ui/CollapsibleBlock";
import RangeSlider from "./RangeSlider";
import StockAvailability from "./StockAvailability";
import SizeFilter from "./SizeFilter";

export default function MobileFilterSidebar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function toggleFilters() {
    setIsFilterOpen((prev) => !prev);
  }

  useEffect(() => {
    if (!isFilterOpen) return;

    const esc = (e) => e.key === "Escape" && toggleFilters();

    window.addEventListener("keydown", esc);

    return () => window.removeEventListener("keydown", esc);
  }, [isFilterOpen]);

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilterOpen]);

  return (
    <>
      {/* FILTER BUTTON */}
      <button
        onClick={toggleFilters}
        className="w-1/2 flex items-center justify-center border border-t-0 border-gray-300 px-4 py-2 font-medium"
      >
        <svg
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="style=linear">
              <g id="filter-circle">
                <path
                  id="vector"
                  d="M2 17.5H7"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  id="vector_2"
                  d="M22 6.5H17"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  id="vector_3"
                  d="M13 17.5H22"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  id="vector_4"
                  d="M11 6.5H2"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  id="vector_5"
                  d="M10 20.3999C8.34315 20.3999 7 19.0568 7 17.3999C7 15.743 8.34315 14.3999 10 14.3999C11.6569 14.3999 13 15.743 13 17.3999C13 19.0568 11.6569 20.3999 10 20.3999Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  id="vector_6"
                  d="M14 9.3999C15.6569 9.3999 17 8.05676 17 6.3999C17 4.74305 15.6569 3.3999 14 3.3999C12.3431 3.3999 11 4.74305 11 6.3999C11 8.05676 12.3431 9.3999 14 9.3999Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <span className="pl-2">Filters</span>
      </button>

      {/* DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isFilterOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45" onClick={toggleFilters} />

        {/* SIDEBAR */}
        <div
          className={`absolute top-0 left-0 h-full w-[85vw] max-w-100 bg-white overflow-y-auto transition-transform duration-500 ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
            <p className="font-medium text-xl">Filters</p>

            <button onClick={toggleFilters}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="rotate-45"
              >
                <path
                  d="M4 12H20M12 4V20"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* EXISTING FILTERS */}
          <div className="px-5">
            <CollapsibleBlock title={"Availability"}>
              <StockAvailability />
            </CollapsibleBlock>

            <CollapsibleBlock title={"Price"}>
              <RangeSlider />
            </CollapsibleBlock>

            <CollapsibleBlock title={"Size"}>
              <SizeFilter />
            </CollapsibleBlock>

            <CollapsibleBlock title={"Product Type"}>
              <CategoryFilter />
            </CollapsibleBlock>
          </div>
        </div>
      </div>
    </>
  );
}
