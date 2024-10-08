import React from "react";
import "./style.scss";
import { useState } from "react";
import { account } from "../../appwrite/auth.js";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

function Dropdown() {
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

  const userProfile = useSelector((state) => state.user.userProfile);

  const user = useSelector((state) => state.auth.userData);

  return (
    <>
      <div className="dropdown-section">
        <div className=" profile-image" onClick={toggleDropdown}>
          {userProfile.img ? (
            <Avatar src={userProfile.img} />
          ) : (
            <Avatar
              sx={{
                bgcolor: "grey",
                textTransform: "capitalize",
                width: 33,
                height: 33,
                cursor: "pointer",
              }}
            >
              {userProfile.name ? userProfile.name[0] : user.name[0]}
            </Avatar>
          )}
        </div>

        {isOpen && (
          <div className="dropdown-container">
            <div className="dropdown-wrapper" onClick={toggleDropdown}></div>
            <div className="dropdown">
              <div className="dropdown-items">
                <div className="item_not-working">
                  Signed in as <br />
                  <span className="user-name">{user.email}</span>
                </div>
                <div className="divider"></div>
                <div className="item">
                  <Link to="/create-story" onClick={window.scrollTo(0, 0)}>
                    Write
                  </Link>
                </div>
                <div className="divider"></div>

                {user && (
                  <div className="item">
                    <Link to={`/profile/${user.$id}`}>Profile</Link>
                  </div>
                )}
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
