import logo from "../../logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // let btnName="login";

  const [btnNameReact, setbtnNameReact] = useState("login");

  return (
    <div className="headerContainer">
      <div className="logo">
        <img className="img-logo" src={logo} />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/ ">Home</Link>
          </li>
          <li>
            <Link to="/about ">About Us</Link>
          </li>
          <li>
            <Link to="/contact ">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery ">Grocery</Link>
          </li>
          <li>MyCart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setbtnNameReact("logout")
                : setbtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
