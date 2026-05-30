import { useState, useEffect, useRef, useMemo } from "react";
import { useFilteredProducts } from "../../Context/FilteredProductsContext";
import Button from "../../components/ui/Button";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../data/products";
import SearchProductCard from "./SearchProductCard";
import { useNavigate } from "react-router-dom";

export default function SearchModal() {
  const {
    isSearchOpen,
    searchQuery,
    toggleIsSearchOpen,
    updateSearchQuery,
    submitSearchQuery,
  } = useFilteredProducts();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const navigate = useNavigate();

  function handleSearchQuerySubmit() {
    submitSearchQuery();
    navigate("/shop");
    toggleIsSearchOpen();
  }

  //derive the search query result from products
  const searchResults = useMemo(() => {
    let result = [...products];

    result = result.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return result;
  }, [searchQuery]);

  // esc button event listener to close cart slider
  useEffect(() => {
    if (!isSearchOpen) return;

    const esc = (e) => e.key === "Escape" && toggleIsSearchOpen();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [isSearchOpen]);

  // scroll stopper for the background while cart is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  //ref and use effect to focus on the search input when the modal is open
  const inputRef = useRef(null);
  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus();
    }
  }, [isSearchOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isSearchOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/45"
        onClick={() => toggleIsSearchOpen()}
      />
      <div
        className={`absolute top-0 right-0 h-full w-124 bg-white transition-transform duration-500 flex flex-col justify-between ${
          isSearchOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="max-h-full">
          <div className="flex justify-between mb-5 border-b border-gray-300 px-6 py-3">
            <div className="flex items-center w-4/5 gap-1.5 ">
              <img
                src="https://rjkfpympkaiwclrnhulw.supabase.co/storage/v1/object/public/general/search.png"
                className="h-6 w-6"
              />
              <input
                ref={inputRef}
                className="w-full border-none outline-none"
                type="text"
                placeholder="What are you looking for?"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchQuerySubmit();
                  }
                }}
                onChange={(e) => updateSearchQuery(e)}
              />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => toggleIsSearchOpen()}
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-45"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 12H20M12 4V20"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4 max-h-[80vh] overflow-y-auto">
            {searchQuery ? (
              searchResults.map((product) => (
                <SearchProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="mx-5">
                <p className="text-sm font-semibold mb-2">HELP</p>

                <ul className="space-y-2 text-xs text-gray-600">
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Stores</a>
                  </li>
                  <li>
                    <a href="#">Care Guide</a>
                  </li>
                  <li>
                    <a href="#">Our Materials</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Ring Size Chart</a>
                  </li>
                  <li>
                    <a href="#">Track Order</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="px-4 py-3">
          {searchQuery && (
            <Button
              className="w-full flex justify-center items-center gap-2 h-14"
              onClick={() => handleSearchQuerySubmit()}
            >
              <img
                width="26"
                height="26"
                src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/search--v1.png"
                alt="search--v1"
              />
              <span className="text-base font-semibold">SEARCH</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
