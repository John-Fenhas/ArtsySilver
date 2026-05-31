import { useState, useRef, useEffect } from "react";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Flash Sale", value: "flashSale" },
  { label: "Alphabetically, A-Z", value: "alphabetical-AZ" },
  { label: "Alphabetically, Z-A", value: "alphabetical-ZA" },
  { label: "Price, high to low", value: "priceAssending" },
  { label: "Price, low to high", value: "priceDescending" },
];

export default function SortDropDown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const [currentValue, setCurrentValue] = useState("Featured");
  let selected = sortOptions.find((option) => option.label === currentValue);

  // outside ref click listner to close dropdown
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const { isLoading, updateSortBy } = useFilteredProducts();

  return (
    <div ref={ref} className="relative w-max">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between rounded-xl px-4 text-sm focus:outline-none "
      >
        <span className="text-slate-600 pr-2">Sort By: </span>
        <span className={`py-0.5 rounded text-slate-800 text-sm pr-2`}>
          {selected?.label}
        </span>

        <svg
          className={`h-3 w-3 text-gray-800 transition ${open && "rotate-180"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute z-10 mt-1 w-full rounded-xl bg-white shadow-sm shadow-gray-500 overflow-hidden max-h-80 overflow-y-auto"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255,255,255,0.2) transparent",
          }}
        >
          {sortOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                updateSortBy(option.value);
                setOpen(false);
                setCurrentValue(option.label);
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-white/5 transition"
            >
              <span className={`px-2 py-0.5 rounded text-gray-800 text-sm`}>
                {option.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
