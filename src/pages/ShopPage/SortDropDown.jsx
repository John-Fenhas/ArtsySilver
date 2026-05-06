import { useState, useRef, useEffect } from "react";

const sortOptions = [
  { label: "Flash Sale", value: "flash-sale" },
  { label: "Alphabetically, A-Z", value: "alpha-a-z" },
  { label: "Alphabetically, Z-A", value: "alpha-z-a" },
  { label: "Price, low to high", value: "price-descending" },
  { label: "Price, high to low", value: "price-assending" },
];

export default function SortDropDown({ value = "", onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const currentValue = value === "" ? "Flash Sale" : value;
  let selected = sortOptions.find((option) => option.label === currentValue);

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
          className="absolute z-10 mt-1 w-full rounded-xl bg-white shadow-sm shadow-gray-500 overflow-hidden max-h-52 overflow-y-auto"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255,255,255,0.2) transparent",
          }}
        >
          {sortOptions.map((d) => (
            <div
              key={d.value}
              onClick={() => {
                onChange(d.value);
                setOpen(false);
              }}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-white/5 transition"
            >
              <span className={`px-2 py-0.5 rounded text-gray-800 text-sm`}>
                {d.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
