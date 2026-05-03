import { useState } from "react";

export default function RangeSlider() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(4999);
  const minLimit = 0;
  const maxLimit = 5000;
  const isMinCloser = minValue > maxValue - 100;

  const [minTouched, setMinTouched] = useState(false);
  const [maxTouched, setMaxTouched] = useState(false);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };
  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };
  return (
    <div className="relative mx-1">
      <div>
        {/*Range Min Input*/}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          onChange={handleMinChange}
          className={`absolute w-full -top-1.5 -left-0.5 appearance-none ${!isMinCloser ? "z-20" : "z-10"} `}
        />
        {/*Range Max Input*/}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          onChange={handleMaxChange}
          className={`absolute -top-1.5 -right-0.5 w-full appearance-none ${isMinCloser ? "z-20" : "z-10"}`}
        />
        {/*Track for range*/}
        <div className="relative h-1 bg-gray-300 rounded">
          <div
            className="absolute h-1 bg-black rounded"
            style={{
              left: `${(minValue / maxLimit) * 100}%`,
              right: `${100 - (maxValue / maxLimit) * 100}%`,
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-full pt-14 pb-4">
        {/*Text Min Input*/}
        <div className="flex justify-between items-center px-1.5 w-2/5 h-10 border border-gray-400 rounded-sm">
          <input
            type="number"
            value={minTouched ? minValue : ""}
            onChange={(e) => {
              setMinTouched(true);
              handleMinChange(e);
            }}
            placeholder="0"
            className="
            w-full h-full placeholder-gray-800 placeholder-
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
            value={maxTouched ? maxValue : ""}
            onChange={(e) => {
              setMaxTouched(true);
              handleMaxChange(e);
            }}
            placeholder="9999"
            className="
            w-full h-full placeholder-gray-800 placeholder-
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
