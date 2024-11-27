import { SWIGGY_API } from "../Utils/constants";
import { useState, useEffect } from "react";
import Card, { withOpenLabel } from "./Card";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofHotels, setListOfHotels] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);

  //console.log("listofHotels : ", listofHotels);
  //withOpenLabel is a HOC which contains Card as a parameter. It will return us a new component which has a label inside it
  const CardOpen = withOpenLabel(Card);

  //console.log({ listofHotels });
  //useEffect always contain a callBack function and a dependency array
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(SWIGGY_API);
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

  if (searchList.length === 0) {
    return (
      <div>
        <h1 className="font-bold text-3xl flex justify-center py-4">
          Please wait while we are getting things ready for you
        </h1>
        <div>
          <Shimmer />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="body">
        <div className="flex ">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              // value={searchText}: Binds the value of the input field to the state variable searchText. This means that the value displayed in the input field is controlled by the searchText state variable.
              value={searchText}
              //onChangefunction takes in an anonymous function with e as a parameter which is the input provided by the user
              onChange={(e) => {
                setSearchText(e.target.value); //component will re render with every letter typed
              }}
            ></input>

            <button
              className="px-4 py-1 bg-green-200 m-4 rounded-lg"
              onClick={() => {
                //It will filter from the original list of restaurants if matching case found then it will update the search list from the list of hotels
                const filteredRestaurant = listofHotels.filter((element) =>
                  element.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setSearchList(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>

          <div className="search ml-0 pl-0 flex items-center">
            <button
              className="px-4 py-2 bg-blue-200 rounded-lg"
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
        </div>
      </div>

      <div className="card-container flex flex-wrap">
        {/* displaying the searchlist */}
        {searchList.map((resObj) => (
          <Link key={resObj.info.id} to={"/restaurant/" + resObj.info.id}>
            {/* If the restaurant is Open add Open label to it */}
            {resObj.info.isOpen ? (
              <CardOpen resObj={resObj} />
            ) : (
              <Card resObj={resObj} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
