import "./style.scss";
import { Link } from "react-router-dom";
import { getUser } from "../../appwrite/auth.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice.js";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Dropdown from "../dropdown/Dropdown.jsx";

function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userData);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const userData = await getUser();
        console.log(dispatch(login({ userData })));
      } catch (error) {
        console.error("error get userData", error);
      }
    };
    getCurrentUser();
  }, []);
  return (
    <nav className="navbar-section">
      <div className="container">
        <div className="pratibela-nav">
          <div className="pratibela-nav__logo">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              Pratibela
            </Link>
          </div>
          <div className="pratibela-nav__menu">
            <ul>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/blog">
                  blog
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/about">
                  about
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/contact">
                  contact
                </Link>
              </li>
            </ul>

            <div className="pratibela-nav__menu__auth">
              <div>
                <Link onClick={() => window.scrollTo(0, 0)} to="/create-story">
                  <span>
                    <HiOutlinePencilSquare />
                  </span>
                  Write
                </Link>
              </div>

              <div className="pratibela-nav__menu__auth__user-actions">
                {!user && (
                  <button>
                    <Link to="/signin">Login</Link>
                  </button>
                )}

                {user && (
                  <>
                    <Dropdown user_name={user.name} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
