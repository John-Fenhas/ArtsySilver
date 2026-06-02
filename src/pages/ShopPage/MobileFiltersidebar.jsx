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
        className="w-1/2 flex items-center justify-center border border-gray-300 px-4 py-2 font-medium"
      >
        Filters
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
