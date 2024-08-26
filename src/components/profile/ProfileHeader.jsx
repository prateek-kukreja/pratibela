import "./style.scss";
import { useEffect, useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import Model from "./model/Model";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import axios from "axios";

function ProfileHeader({ id }) {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState("");

  const userProfile = useSelector((state) => state.user.userProfile);

  console.log(userProfile);
  // const user = useSelector((state) => state.auth.userData);
  console.log("hello", user);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const users = await axios.get("http://localhost:3001/users");
        const user = users.data.find((user) => user.$id === id);
        setUser(user);
      } catch (error) {
        console.error("error getting users", error);
      }
    };
    getAllUsers();
  }, []);

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
                  {user.name[0]}
                </Avatar>
              )}
            </div>
            <div className="profile-header-content__text">
              <span>Hi, I'm {user.name}</span>
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

export default ProfileHeader;
