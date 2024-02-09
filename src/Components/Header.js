import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnVal, setbtnVal] = useState("login");

  useEffect(() => {
    console.log("Header useEffect called");
  }, []);
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Cart</li>

          <button
            className="login-btn"
            onClick={() => {
              btnVal === "login" ? setbtnVal("logout") : setbtnVal("login");
              console.log("header render");
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
