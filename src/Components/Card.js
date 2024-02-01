import { styleCard } from "../Utils/constants";

const Card = (props) => {
  const { resData } = props; // {props object is getting {another object} in it from its parent} So we destructure the resData object and assign to a key variable having the same name resData.
  // console.log(JSON.stringify(props));// converts object for readability
  // console.log(props.speciality);

  // destructuring resData and making hecode clean
  const { imgLocn, name, speciality, starRating } = resData;

  return (
    <div className="card" style={styleCard}>
      <img className="card-image" src={imgLocn}></img>
      <h3>{name}</h3>
      <h4>Speciality : {speciality}</h4>
      <h4>{starRating} star</h4>
    </div>
  );
};

export default Card;
