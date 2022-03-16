import { useEffect, useRef } from "react";
import { DebounceInput } from "react-debounce-input";
import { tw } from "twind";

import AnimalList from "./pages/animals/AnimalList";

import useAnimalSearch from "./hooks/useAnimalSearch";

function App() {
  const searchInputRef = useRef(null);
  const { search, animals } = useAnimalSearch();

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    if (lastQuery) {
      searchInputRef.current.value = lastQuery;
    }
  }, []);

  return (
    <div className={tw`grid grid-cols-12`}>
      <div
        className={tw`col-span-4 text-white font-sans font-bold bg-black min-h-screen pl-7`}
      >
        <div
          className={tw`grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start`}
        >
          <div className={tw`row-span-4 row-start-2 text-4xl`}>
            Animal Kingdom
            <div className={tw`pt-10 pr-20`}>
              <label className={tw`text-sm font-sans font-medium`}>
                Search an Animal
              </label>
              <DebounceInput
                type="text"
                className={tw`w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans`}
                placeholder="Search"
                ref={searchInputRef}
                minLength={1}
                debounceTimeout={500}
                onChange={(e) => search(e.target.value)}
              />
            </div>
          </div>

          <div
            className={tw`text-sm font-sans font-medium text-gray-400`}
          >
            Copyright &copy; 2022
          </div>
        </div>
      </div>

      <div
        className={tw`h-screen col-span-8 text-red font-sans font-bold overflow-y-auto flex align-center justify-center`}
      >
        <AnimalList animals={animals} />
      </div>
    </div>
  );
}

export default App;
