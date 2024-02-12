import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  // IMP NOTE : React relies on its reconciliation algorithm to determine when and how to update the DOM. When you directly change the state variable, React doesn't know that the state has changed, so it won't trigger a re-render of the component. So, always use setbtnVal in this case to updae the state value.  Since React doesn't re-render the component, the UI won't reflect the changes you made to the state variable. This can lead to inconsistencies between the state and the rendered UI.

  const [btnVal, setbtnVal] = useState("login");

  // useEffect(() => {
  //   console.log("Header useEffect called");
  // }, []);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
          alt="Header Logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus === "true" ? "✅" : "❌"}</li>
          <li>
            {/* When a user clicks on this link, the application will navigate to the URL specified in the to prop, which in this case is the home route /. This is done using the routing mechanism provided by react-router-dom, ensuring that the navigation happens without a full page reload, making it a single-page application (SPA) feature. */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/groceries">Groceries</Link>
          </li>
          <li>Cart</li>

          <button
            className="login-btn"
            //NOTE : onClick={ANONYMOUS FUNCTION}
            onClick={() => {
              btnVal === "login" ? setbtnVal("logout") : setbtnVal("login");
              console.log("header render");
            }}
          >
            {/* State variable */}
            {btnVal}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
