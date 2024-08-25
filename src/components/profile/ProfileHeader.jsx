import "./style.scss";
import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import Model from "./model/Model";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

function Profile() {
  const [modal, setModal] = useState(false);

  const userProfile = useSelector((state) => state.user.userProfile);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <section className="profile-header-section">
        <div className="container">
          <div className="profile-header-content">
            <div className="profile-header-content__img">
              {userProfile.img ? (
                <Avatar
                  src={userProfile.img}
                  sx={{ width: 250, height: 250 }}
                />
              ) : (
                <Avatar
                  sx={{
                    bgcolor: "grey",
                    textTransform: "capitalize",
                    cursor: "pointer",
                    width: 250,
                    height: 250,
                    fontSize: "100px",
                  }}
                >
                  {userProfile.name ? userProfile.name[0] : user.name[0]}
                </Avatar>
              )}
            </div>
            <div className="profile-header-content__text">
              <span>
                Hi, I'm {userProfile.name ? userProfile.name : user.name}
              </span>
              <p>
                {userProfile.bio
                  ? userProfile.bio
                  : "You will see your bio here"}
              </p>
            </div>
            <div className="profile-header-content__edit-profile">
              <button onClick={toggleModal}>
                <span>
                  <MdOutlineModeEdit />
                </span>
                Edit Profile
              </button>

              {modal && (
                <Model toggleModal={toggleModal} userProfile={userProfile} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
