import logo from "../../logo.png";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logo">
        <img className="img-logo" src={logo} />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>MyCart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
