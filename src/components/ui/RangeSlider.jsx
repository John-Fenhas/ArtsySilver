import { useState } from "react";

export default function RangeSlider() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9999);
  const minLimit = 0;
  const maxLimit = 10000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };
  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };
  return (
    <div className="relative">
      <div>
        {/*Range Min Input*/}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full pointer-events-none appearance-none"
        />
        {/*Range Max Input*/}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full pointer-events-none appearance-none"
        />
      </div>
      <div>
        {/*Text Min Input*/}
        <input
          type="text"
          value={minValue}
          onChange={handleMinChange}
          placeholder="0 LE"
        />
        {/*Text Max Input*/}
        <input
          type="text"
          value={maxValue}
          onChange={handleMaxChange}
          placeholder="9999 LE"
        />
      </div>
    </div>
  );
}
