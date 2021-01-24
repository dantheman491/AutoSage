import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <Link id="home" to="/">
        {" "}
        Home{" "}
      </Link>
      <h1>AutoSage</h1>
      <Link id="link2add" to="/addACar">
        {" "}
        Add a Car{" "}
      </Link>
    </div>
  );
}

export default Header;
