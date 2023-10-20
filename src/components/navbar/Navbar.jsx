import "./style.scss";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar-section">
      <div className="container">
        <div className="pratibela-nav">
          <div className="pratibela-nav__logo">
            <Link to="/">Pratibela</Link>
          </div>
          <ul className="pratibela-nav__menu">
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
