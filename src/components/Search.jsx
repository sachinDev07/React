import { useState } from "react";

const Search = ({
        setFilteredRestaurants, 
        allRestaurants, 
        filterData,
        restaurants
    }) => {

    const [searchText, setSearchText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
          const data = filterData(searchText, restaurants);
          setFilteredRestaurants(data);
          setErrorMessage("");
          if (data.length === 0) {
            setErrorMessage(
              `Sorry, we couldn't find any results for "${searchText}"`
            );
          }
        } else {
          setErrorMessage("");
          setFilteredRestaurants(restaurants);
        }
      };

    return (
        <>
            <div className="py-4 px-44 flex justify-center mt-5">
                <input data-testid="search-input" className="w-[500px] outline-none border-solid border-2 border-gray-600 py-3 px-4 text-xl text-black rounded-tl rounded-bl" 
                type="text" 
                placeholder="Search your favourite restaurent" 
                value={searchText} 
                onChange={(e) => { 
                    setSearchText(e.target.value);
                    searchData(e.target.value, allRestaurants);
                }}
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
            {errorMessage && <div className="py-4 px-44 mt-8 flex justify-center items-center text-2xl text-gray-400">{errorMessage}</div>}
        </>
    );
};

export default Search;