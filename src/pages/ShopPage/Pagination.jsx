import { button } from "framer-motion/client";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";

export default function Pagination() {
  const {
    totalPageCount,
    currrentPage,
    isLoading,
    nextPage,
    prevPage,
    goToPage,
  } = useFilteredProducts();
  console.log(totalPageCount);

  return (
    <div className="flex">
      {/*prev page btn*/}
      <button
        className="w-12 h-12 flex justify-center items-center  rounded-l-xl border border-gray-300 cursor-pointer"
        onClick={() => prevPage()}
      >
        <svg
          width="26px"
          height="26px"
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
            <path
              d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
              fill="#0F0F0F"
            ></path>
          </g>
        </svg>
      </button>
      {Array.from({ length: totalPageCount }).map((_, i) => (
        <button
          className={
            currrentPage === i + 1
              ? `w-12 h-12 flex justify-center items-center border-2 border-gray-500 cursor-pointer`
              : `w-12 h-12 flex justify-center items-center border-r border-y border-gray-300 cursor-pointer`
          }
          key={i}
          onClick={() => goToPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      {/*next page btn*/}
      <button
        className="w-12 h-12 flex justify-center items-center rounded-r-xl border border-l-0 border-gray-300 cursor-pointer"
        onClick={() => nextPage()}
      >
        <svg
          width="26px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
              fill="#0F0F0F"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
}
