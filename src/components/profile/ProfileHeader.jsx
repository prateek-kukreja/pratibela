import "./style.scss";
import { useEffect, useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import Model from "./model/Model";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import axios from "axios";

function ProfileHeader({ userId }) {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState("");

  // const userProfile = useSelector((state) => state.user.userProfile);

  // console.log(userProfile);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const users = await axios.get("http://localhost:3001/users");
        const user = users.data.find((user) => user.$id === userId);
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

  console.log("user", user);

  return (
    <>
      <section className="profile-header-section">
        <div className="container">
          <div className="profile-header-content">
            <div className="profile-header-content__img">
              {user ? (
                <Avatar sx={{ width: 250, height: 250 }} />
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
                  {/* {user.name[0]} */}
                </Avatar>
              )}
            </div>
            <div className="profile-header-content__text">
              <span>Hi, I'm {user.name}</span>
              {/* <p>
                {userProfile.bio
                  ? userProfile.bio
                  : "You will see your bio here"}
              </p> */}
            </div>
            <div className="profile-header-content__edit-profile">
              <button onClick={toggleModal}>
                <span>
                  <MdOutlineModeEdit />
                </span>
                Edit Profile
              </button>

              {modal && (
                <Model
                  toggleModal={toggleModal}
                  // userProfile={userProfile}
                  user_name={user.name}
                  userId={userId}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileHeader;
