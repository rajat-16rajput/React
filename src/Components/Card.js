import { useContext } from "react";
import UserInfo from "../Utils/UserInfo";

const Card = (props) => {
  const { resObj } = props;
  //console.log({ props });
  const dataUser = useContext(UserInfo);
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    locality,
    aggregatedDiscountInfoV3,
  } = resObj?.info;

  return (
    //w-[creates a dyanamic style as 200 px is a customized value]
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="card-image rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h3>
        {"Discount : " +
          aggregatedDiscountInfoV3?.header +
          " " +
          aggregatedDiscountInfoV3?.subHeader}
      </h3>
      <h3>{locality}</h3>
      <h4> {cuisines.join(" ")}</h4>
      <h4>{avgRating} star</h4>
      {/* <h4>{dataUser.name}</h4> */}
    </div>
  );
};

//Higher order component
//input - Card || output-PromotedResCard

export const withOpenLabel = (Card) => {
  console.log(Card);
  return (props) => {
    console.log({ props });
    return (
      <div>
        <label className="absolute bg-green-700 rounded-lg p-2 m-2">Open</label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
