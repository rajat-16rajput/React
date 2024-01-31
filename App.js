import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#F0F0F0",
};

const Hotels = [
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
    starRating: "5",
    imgLocn:
      "https://files.yappe.in/place/full/sagar-papaji-ka-dhaba-1772279.webp",
  },
  {
    id: 5,
    name: "Paradise Biryani",
    speciality: "Reshmi kabab",
    starRating: "5",
    imgLocn:
      "https://files.yappe.in/place/full/sagar-papaji-ka-dhaba-1772279.webp",
  },
  {
    id: 6,
    name: "Bird Valley ",
    speciality: "Reshmi kabab",
    starRating: "5",
    imgLocn:
      "https://files.yappe.in/place/full/sagar-papaji-ka-dhaba-1772279.webp",
  },
  {
    id: 7,
    name: "Papaji Dhaba",
    speciality: "Reshmi kabab",
    starRating: "5",
    imgLocn:
      "https://files.yappe.in/place/full/sagar-papaji-ka-dhaba-1772279.webp",
  },
];

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
const Body = () => {
  const hotelType = "Cafe";
  return (
    // <div className="body">
    <>
      <div className="search">Search</div>
      <div className="card-container">
        {Hotels.map((hotel) => (
          <Card key={hotel.id} resData={hotel} />
        ))}
      </div>
    </>
    // </div>
  );
};
const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>fb</li>
        <li>if</li>
        <li>snap</li>
        <li>whatsapp</li>
      </ul>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); // NOTE : document.getElementById
root.render(<AppLayout />); // NOTE this! How did you add the component name to render method
