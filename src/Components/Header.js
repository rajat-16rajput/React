import { useState } from "react";

const Header = () => {
  const [btnVal, setbtnVal] = useState("login");

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

          <button
            className="login-btn"
            onClick={() => {
              btnVal === "login" ? setbtnVal("logout") : setbtnVal("login");
            }}
          >
            {btnVal}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
