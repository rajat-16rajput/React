import { Hotels } from "../Utils/mockData";
import { SWIGGY_API } from "../Utils/constants";
import { useState, useEffect } from "react";
import Card from "./Card";
const Body = () => {
  const [listofHotels, setListOfHotels] = useState([
    {
      id: 1,
      name: "Papaji Dhaba",
      speciality: "Reshmi kabab",
      starRating: "5",
      imgLocn:
        "https://files.yappe.in/place/full/sagar-papaji-ka-dhaba-1772279.webp",
    },

    {
      id: 2,
      name: "Nilofer Cafe",
      speciality: "Reshmi kabab",
      starRating: "5",
      imgLocn:
        "https://files.yappe.in/place/full/sagar-papaji-ka-dhaba-1772279.webp",
    },
    {
      id: 3,
      name: "Cafe goodluck",
      speciality: "Reshmi kabab",
      starRating: "5",
      imgLocn:
        "https://files.yappe.in/place/full/sagar-papaji-ka-dhaba-1772279.webp",
    },
    {
      id: 4,
      name: "Shipra Regency",
      speciality: "Reshmi kabab",
      starRating: "2",
      imgLocn:
        "https://files.yappe.in/place/full/sagar-papaji-ka-dhaba-1772279.webp",
    },
  ]);
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    // setListOfHotels(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // console.log(listofHotels);
  };

  return (
    <>
      <div>
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listofHotels.filter(
              (element) => element.starRating > 3
            );
            // console.log(filteredList);
            setListOfHotels(filteredList);
          }}
        >
          top restauants
        </button>
      </div>
      <div className="card-container">
        {listofHotels.map((resData) => (
          <Card key={resData.id} resData={resData} />
        ))}
      </div>
    </>
  );
};

export default Body;
