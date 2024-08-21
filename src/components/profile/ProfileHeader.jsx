import "./style.scss";
import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import Model from "./model/Model";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import Naman from "../../images/profile/naman_blog.png";
import { deepPurple } from "@mui/material/colors";

function Hero() {
  const [modal, setModal] = useState(false);

  const userData = useSelector((state) => state.auth.userData);
  const userProfile = useSelector((state) => state.user.userProfile);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="pratibela-hero-content">
            <div className="pratibela-hero-content__img">
              {userProfile.img ? (
                <Avatar
                  src={userProfile.img}
                  sx={{ width: 300, height: 200 }}
                />
              ) : (
                <Avatar
                  sx={{
                    bgcolor: "grey",
                    width: 200,
                    height: 200,
                    fontSize: "8rem",
                    textTransform: "capitalize",
                    bgcolor: deepPurple[500],
                  }}
                >
                  {userProfile.name[0]}
                </Avatar>
              )}
            </div>
            <div className="pratibela-hero-content__text">
              <span>
                Hi, I'm{" "}
                {userProfile.name === "" ? userData.name : userProfile.name}
              </span>
              <p>
                {userProfile.bio === ""
                  ? "You will see your bio here"
                  : userProfile.bio}
              </p>
            </div>
            <div className="pratibela-hero-content__edit-profile">
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

export default Hero;
