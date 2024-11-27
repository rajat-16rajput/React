import { useState } from "react";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  // console.log("resId: " + resId);
  //used a custom hook useRestaurantMenu to fetch the data from the api
  const resInfo = useRestaurantMenu(resId);

  // console.log({ resInfo });

  if (resInfo === null) return <Shimmer />;

  const { name, areaName, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  // console.log(name, areaName);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log({ categories });

  return (
    <>
      <div className="RestaurantMenu p-4 m-4 bg-yellow-200 text-center">
        <h1 className="font-bold my-6 text-xl">{name}</h1>
        <h2 className="font-bold text-lg">
          {areaName} - {cuisines.join(",")} - {costForTwoMessage}
        </h2>
        <div>
          {categories.map((category, index) => (
            //The ?. syntax ensures that if category is null or undefined,
            // the expression will short-circuit and return undefined.
            // Similarly, if category.card is null or undefined,
            //the expression will return undefined without causing an error.
            //This prevents "cannot read property 'card' of undefined" type errors.

            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
