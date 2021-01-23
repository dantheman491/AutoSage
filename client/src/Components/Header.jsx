import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <Link to="/"> Home </Link>
      <Link to="/addACar"> Add a Car </Link>
    </div>
  );
}

export default Header;
