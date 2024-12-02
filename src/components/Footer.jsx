import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Noah Park-Nguyen. All rights
          reserved.
        </p>
        <Link to="header" className="back-to-top" smooth={true} duration={500}>
          <FaArrowUp size={30} />
          Back to Top
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
