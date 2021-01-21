import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/new">Add a Car</Link>
    </div>
  );
}

export default Header;
