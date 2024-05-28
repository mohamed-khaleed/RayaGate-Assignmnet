import SearchBox from "./SearchBox";
import React from 'react';
function Header() {
  return (
    <header className="bg-dark-green flex flex-col items-center justify-center gap-10 p-4 md:gap-20 md:h-[70vh]">
      <h1 className="text-light-sky-blue text-4xl leading-10 font-extrabold capitalize text-center md:text-8xl md:leading-20">
        find the most <br /> exciting posts ever
      </h1>
      <SearchBox  />
    </header>
  );
}

export default Header;
