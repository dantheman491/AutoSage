import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div id="mainfooter">
      <Link id="footerlink" to="/">
        Home
      </Link>
      <h5>Daniel Ramirez</h5>
    </div>
  );
}

export default Footer;
