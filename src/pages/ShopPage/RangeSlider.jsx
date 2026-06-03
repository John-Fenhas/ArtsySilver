import { useState, useRef, useEffect } from "react";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";

// ranges are controlled inputs while the number are uncontrolled the number inputs show the min or max value in the placeholder
// which is controlled by each prespictive state. the number inputs have a keydown listner to change the min and max value not an onchange handler

export default function RangeSlider() {
  const { filters, isLoading, updatePriceFilter } = useFilteredProducts();

  // current min and max value states
  const [minValue, setMinValue] = useState(filters.minPrice);
  const [maxValue, setMaxValue] = useState(filters.maxPrice);

  useEffect(() => {
    const t = setTimeout(() => updatePriceFilter(minValue, maxValue), 300);
    return () => clearTimeout(t);
  }, [minValue, maxValue]);

  useEffect(() => {
    setMaxValue(filters.maxPrice);
    setMinValue(filters.minPrice);
  }, [filters.minPrice, filters.maxPrice]);

  // max allowed min and max values
  const minLimit = 0;
  const maxLimit = 5000;

  // ref for both number inputs to reset them to show the placeholder(min or max value) in the text input when the range is changing
  const minRef = useRef();
  const maxRef = useRef();

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
    minRef.current.value = "";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
    maxRef.current.value = "";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mx-1">
      <div className="">
        {/*Range Min Input*/}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          onChange={handleMinChange}
          className={`absolute w-full -top-1.5 -left-0.5 appearance-none  `}
        />
        {/*Range Max Input*/}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          onChange={handleMaxChange}
          className={`absolute -top-1.5 -right-1 w-full appearance-none `}
        />
        {/*Track for range*/}
        <div className="relative h-1 bg-gray-300 rounded">
          <div
            className="absolute h-1 bg-black rounded"
            style={{
              left: `${(minValue / maxLimit) * 100}%`,
              right: `${99 - (maxValue / maxLimit) * 100}%`,
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-full pt-14 pb-4">
        {/*Text Min Input*/}
        <div className="flex justify-between items-center px-1.5 w-2/5 h-10 border border-gray-400 rounded-sm">
          <input
            type="number"
            ref={minRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleMinChange(e);
              }
            }}
            placeholder={minValue}
            className="
            w-full h-full placeholder-gray-800 text-sm placeholder-
            focus:border-none 
            focus:outline-0
            "
          />
          <span className="text-gray-400 mr-2">LE</span>
        </div>
        <span>To</span>
        {/*Text Max Input*/}

        <div className="flex justify-between items-center px-1.5 w-2/5 h-10 border border-gray-400 rounded-sm">
          <input
            type="number"
            ref={maxRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleMaxChange(e);
              }
            }}
            placeholder={maxValue}
            className="
            w-full h-full placeholder-gray-800 text-sm placeholder-
            focus:border-none 
            focus:outline-0
            "
          />
          <span className="text-gray-400 mr-2">LE</span>
        </div>
      </div>
    </div>
  );
}
