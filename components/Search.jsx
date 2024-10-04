import React, { useState, useCallback } from "react";

function Search({ setSearchTerm, setPageNumber, placeholder }) {
  const [searchQuery, setSearchQuery] = useState("");

  // custom debounce fn
  const useDebounce = (fn, delay) => {
    let timeout;

    // return function that takes arg and apply to the function
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };

  const debouncedSearch = useDebounce((value) => {
    setPageNumber(1);
    setSearchTerm(value);
  }, 1500); // Adjust the delay as needed (in milliseconds)

  const handleSearch = useCallback(
    (e) => {
      const value = e.target.value;
      setSearchQuery(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  return (
    <div className="relative w-full">
      <input
        type="search"
        className=" flex-1 appearance-none rounded-lg border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-darkGreen focus:border-transparent"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearch}
      />

      <button type="submit">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 absolute left-1 top-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg> */}
      </button>
    </div>
  );
}

export default Search;
