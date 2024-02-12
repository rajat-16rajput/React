import { SWIGGY_API } from "../Utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Body = () => {
  const [listofHotels, setListOfHotels] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);

  //useEffect always contain a callBack function and a dependency array
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    setListOfHotels(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log(listofHotels);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === "false")
    return <h1>No internet connected, please check your connection</h1>;

  return (
    <>
      <div>
        <input
          type="text"
          className="search-box"
          // value={searchText}: Binds the value of the input field to the state variable searchText. This means that the value displayed in the input field is controlled by the searchText state variable.
          value={searchText}
          //onChangefunction takes in a anonymous function with e as a parameter which is the input provided by the user
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
          <Link key={resObj.info.id} to={"/restaurant/" + resObj.info.id}>
            <Card resObj={resObj} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
