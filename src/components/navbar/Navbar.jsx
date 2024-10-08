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
        dispatch(login({ userData }));
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
            <ul className="menu-links">
              <li>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to={user ? `/profile/${user.$id}` : "/signin"}
                >
                  profile
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

            <div className="menu-auth">
              <div>
                <Link onClick={() => window.scrollTo(0, 0)} to="/create-story">
                  <span>
                    <HiOutlinePencilSquare />
                  </span>
                  Write
                </Link>
              </div>
              <div className="menu-auth__user-actions">
                {!user && (
                  <Link to="/signin">
                    <button>Login</button>
                  </Link>
                )}

                {user && (
                  <>
                    <Dropdown user={user} />
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
