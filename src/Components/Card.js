import { styleCard } from "../Utils/constants";

const Card = (props) => {
  const { resObj } = props;
  //console.log({ props });
  const { name, cuisines, avgRating, cloudinaryImageId, locality } =
    resObj?.info;
  return (
    <div className="card" style={styleCard}>
      <img
        className="card-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>

      <h3>{name}</h3>
      <h3>{locality}</h3>
      <h4> {cuisines.join(" ")}</h4>
      <h4>{avgRating} star</h4>
    </div>
  );
};

export default Card;
