import React from "react";
import "./style.scss";
import { useState } from "react";
import { account } from "../../appwrite/auth.js";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { Link } from "react-router-dom";

function Dropdown({ user_name }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      dispatch(logout());
    } catch (error) {
      console.error("error in logging out", error);
    }
  };

  return (
    <>
      <div className="dropdown-section">
        <div className=" profile-dropdown" onClick={toggleDropdown}>
          <div className="profile-image"></div>
        </div>

        {isOpen && (
          <div className="dropdown-container">
            <div className="dropdown">
              <div className="dropdown-items">
                <div className="item_not-working">
                  Signed in as <br />
                  <span className="user-name">{user_name}</span>
                </div>
                <div className="divider"></div>
                <div className="item">
                  <Link to="/create-story" onClick={window.scrollTo(0, 0)}>
                    Write
                  </Link>
                </div>
                <div className="divider"></div>

                <div className="item">
                  <Link to="/profile/">Profile</Link>
                </div>
                <div className="item_not-working">Stories</div>
                <div className="item_not-working">Bookmark</div>
                <div className="divider"></div>
                <div className="item_not-working">Settings</div>
                <div className="item">
                  <Link to="/contact" onClick={window.scrollTo(0, 0)}>
                    Help
                  </Link>
                </div>
                <div className="divider"></div>
                <div
                  className="logout-button"
                  type="button"
                  onClick={handleLogout}
                >
                  Sign out
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
