import { useEffect, useState } from "react";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { MENU_API } from "../Utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //used a custom hook useRestaurantMenu to fetch the data from the api
  const resInfo = useRestaurantMenu(resId);

  console.log({ resInfo });

  if (resInfo === null) return <Shimmer />;

  const { name, areaName } = resInfo?.cards[0]?.card?.card?.info;
  //console.log(name, areaName);
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  console.log({ itemCards });

  return (
    <>
      <div className="RestaurantMenu">
        <h1>{name}</h1>
        <h2>{areaName}</h2>
        <h3>Menu</h3>
        {/* {console.log("itemCards:", itemCards)} */}
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -
            {"Rs. " +
              (item.card.info.price / 100 || item.card.info.defaultPrice / 100)}
          </li>
        ))}
        ;
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
