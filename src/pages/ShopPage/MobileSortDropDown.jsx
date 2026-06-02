import { useState, useEffect } from "react";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Flash Sale", value: "flashSale" },
  { label: "Alphabetically, A-Z", value: "alphabetical-AZ" },
  { label: "Alphabetically, Z-A", value: "alphabetical-ZA" },
  { label: "Price, high to low", value: "priceAssending" },
  { label: "Price, low to high", value: "priceDescending" },
];

export default function MobileSortDropDown() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("Featured");

  const { updateSortBy } = useFilteredProducts();

  const selected = sortOptions.find((option) => option.label === currentValue);

  function toggleSort() {
    setIsSortOpen((prev) => !prev);
  }

  // esc listener
  useEffect(() => {
    if (!isSortOpen) return;

    const esc = (e) => e.key === "Escape" && toggleSort();

    window.addEventListener("keydown", esc);

    return () => window.removeEventListener("keydown", esc);
  }, [isSortOpen]);

  // stop background scroll
  useEffect(() => {
    if (isSortOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSortOpen]);

  return (
    <>
      {/* SORT BUTTON */}
      <button
        type="button"
        onClick={toggleSort}
        className="w-1/2 flex items-center justify-center border border-t-0 border-l-0 border-gray-300 px-4 py-2 font-medium"
      >
        <span className=" pr-2">Sort By</span>
        <span
          className={`transition-transform duration-400 
          `}
        >
          <svg
            focusable="false"
            width="12"
            height="12"
            className="icon icon--chevron icon--inline  "
            viewBox="0 0 12 8"
          >
            <path
              fill="none"
              d="M1 1l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.6"
            ></path>
          </svg>
        </span>
      </button>

      {/* DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isSortOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45" onClick={toggleSort} />

        {/* SORT PANEL */}
        <div
          className={`absolute top-0 right-0 h-full w-[80vw] max-w-100 bg-white transition-transform duration-500 ${
            isSortOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
            <p className="font-medium text-xl">Sort By</p>

            <button onClick={toggleSort}>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-45"
              >
                <path
                  d="M4 12H20M12 4V20"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* OPTIONS */}
          <div className="flex flex-col">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  updateSortBy(option.value);
                  setCurrentValue(option.label);
                  toggleSort();

                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className={`text-left px-5 py-4 border-b border-gray-200 ${
                  currentValue === option.label ? "font-semibold" : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
