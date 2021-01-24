import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div>
      <Link id="footerhome" to="/">
        Home
      </Link>
      {/* <Link to="/new">Add a Car</Link> */}
    </div>
  );
}

export default Footer;
