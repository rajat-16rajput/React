import { SWIGGY_API } from "../Utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";
const Body = () => {
  const [listofHotels, setListOfHotels] = useState([]);

  useEffect(() => {
    console.log("use Effect called");
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    setListOfHotels(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(listofHotels);
  };

  return (
    <>
      <div>
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listofHotels.filter(
              (element) => element.info.avgRating > 4
            );
            console.log(listofHotels);
            console.log(filteredList);
            setListOfHotels(filteredList);
          }}
        >
          top restauants
        </button>
      </div>
      <div className="card-container">
        {listofHotels.map((resObj) => (
          <Card key={resObj.id} resObj={resObj} />
        ))}
      </div>
    </>
  );
};

export default Body;
