import React from "react";
import ReactDOM from "react-dom";

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
const Card = () => {
  return (
    <div className="card" style={styleCard}>
      <img
        className="card-image"
        src="https://files.yappe.in/place/full/sagar-papaji-ka-dhaba-1772279.webp"
      ></img>
      <h3>Papaji Dhaba</h3>
      <h4>Speciality : Reshmi kabab</h4>
      <h4>5 star</h4>
    </div>
  );
};
const Body = () => {
  return (
    // <div className="body">
    <>
      <div className="search">Search</div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
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
