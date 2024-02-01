import { Hotels } from "../Utils/mockData";
import { useState } from "react";
import Card from "./Card";
const Body = () => {
  const [listofHotels, setListOfHotels] = useState(Hotels);
  return (
    <>
      <div>
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listofHotels.filter(
              (element) => element.starRating > 4
            );
            console.log(filteredList);
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
