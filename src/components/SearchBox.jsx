import { useContext } from "react";
import { SearchContext } from '../context/SearchContext';
import React from 'react';
function SearchBox() {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  return (
    <div className="bg-light-sky-blue w-full flex flex-col p-4 rounded md:flex-row md:w-[60%]">
      <div className="relative flex h-full w-full items-center overflow-hidden bg-light-sky-blue focus-within:shadow-lg md:w-[80%]">
        <div className="grid h-full w-12 place-items-center text-dark-green">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="peer h-full w-full pr-2 text-sm bg-light-sky-blue text-gray-700 outline-none"
          type="text"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search something.."
        />
      </div>
      <button aria-label="search button" className="bg-dark-green mt-4 py-3 px-6 text-white font-bold capitalize rounded md:mt-0 md:ml-4 md:px-12 hover:bg-light-green">
        search
      </button>
    </div>
  );
}

export default SearchBox;
