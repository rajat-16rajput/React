import { SWIGGY_API } from "../Utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";
const Body = () => {
  const [listofHotels, setListOfHotels] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    console.log("use Effect called");
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    setListOfHotels(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchList(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(listofHotels);
  };

  return (
    <>
      <div>
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value); //component will re render with every letter typed
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            //It will filter from the original list of restaurants if matching case found then it will update the search list from the list of hotels
            const filteredRestaurant = listofHotels.filter((element) =>
              element.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchList(filteredRestaurant);
          }}
        >
          Search
        </button>

        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listofHotels.filter(
              (element) => element.info.avgRating > 4
            );
            {
              /* displaying the searchlist */
            }
            setSearchList(filteredList);
          }}
        >
          top restauants
        </button>
      </div>
      <div className="card-container">
        {/* displaying the searchlist */}
        {searchList.map((resObj) => (
          <Card key={resObj.id} resObj={resObj} />
        ))}
      </div>
    </>
  );
};

export default Body;
