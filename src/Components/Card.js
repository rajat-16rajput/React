import { styleCard } from "../Utils/constants";

const Card = (props) => {
  const { resData } = props;
  console.log(props);

  return (
    <div className="card" style={styleCard}>
      <img className="card-image" src={resData.imgLocn}></img>
      <h3>{resData.name}</h3>
      <h4> {resData.speciality}</h4>
      <h4>{resData.starRating} star</h4>
    </div>
  );
};

export default Card;
