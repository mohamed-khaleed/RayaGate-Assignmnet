import SearchBox from "./SearchBox";

function Header() {
  return (
    <header className="bg-dark-green flex h-[70vh] flex-col items-center justify-center gap-20">
      <h1 className="text-light-sky-blue text-8xl leading-20 font-extrabold capitalize text-center">
        find them most <br/> exciting posts ever
      </h1>
      <SearchBox />
    </header>
  );
}

export default Header;
