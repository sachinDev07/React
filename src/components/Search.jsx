import { useState } from "react";

const Search = ({
        setFilteredRestaurants, 
        allRestaurants, 
        filterData
    }) => {

    const [searchText, setSearchText] = useState("");

    return (
        <div className="py-4 px-44 flex justify-center mt-5">
            <input data-testid="search-input" className="w-[500px] outline-none border-solid border-2 border-gray-600 py-3 px-4 text-xl text-black rounded-tl rounded-bl" 
            type="text" 
            placeholder="Search your favourite restaurent" 
            value={searchText} 
            onChange={(e) => { setSearchText(e.target.value);}}
            />
            <button data-testid="search-btn" className="px-6 py-1 bg-blue-600   text-white font-medium text-base leading-tight uppercase
              rounded-tr rounded-br shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
              onClick={() => {
                  const data = filterData(searchText, allRestaurants); 
                  setFilteredRestaurants(data);
              }}
              > Search
            </button>
        </div>
    );
};

export default Search;