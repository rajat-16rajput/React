import { useEffect, useState } from "react";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { MENU_API } from "../Utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();

  //used a custom hook useRestaurantMenu to fetch the data from the api
  const resInfo = useRestaurantMenu(resId);

  console.log({ resInfo });

  if (resInfo === null) return <Shimmer />;

  const { name, areaName, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  //console.log(name, areaName);
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  console.log({ itemCards });

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <>
      <div className="RestaurantMenu p-4 m-4 bg-yellow-200 text-center">
        <h1 className="font-bold my-6 text-xl">{name}</h1>
        <h2 className="font-bold text-lg">
          {areaName} - {cuisines.join(",")} - {costForTwoMessage}
        </h2>
        <div>
          {categories.map((category) => (
            //The ?. syntax ensures that if category is null or undefined, the expression will short-circuit and return undefined. Similarly, if category.card is null or undefined, the expression will return undefined without causing an error. This prevents "cannot read property 'card' of undefined" type errors.
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
            />
          ))}
        </div>
        {/* <h3 className="font-medium">Menu</h3> */}
        {/* {console.log("itemCards:", itemCards)}
        {itemCards.map((item) => (
          <li className="font-serif" key={item.card.info.id}>
            {item.card.info.name} -
            {"Rs. " +
              (item.card.info.price / 100 || item.card.info.defaultPrice / 100)}
          </li>
        ))} */}

        {/* <ul>{itemCards.map((item) => ({ name: item.card.info.name }))}</ul> */}
        {/* <h1>{name}</h1>
        <h3>{itemCards[0].card.info.name}</h3>
        <h3>{itemCards[1].card.info.name}</h3>
        <h3>{itemCards[2].card.info.name}</h3> */}
      </div>
    </>
  );
};

export default RestaurantMenu;
