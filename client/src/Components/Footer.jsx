import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div id="mainfooter">
      <Link id="footerlink" to="/">
        Home
      </Link>
    </div>
  );
}

export default Footer;
