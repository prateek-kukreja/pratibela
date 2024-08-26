import { LiaTimesSolid } from "react-icons/lia";
import "./style.scss";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import axios from "axios";

function Model({ toggleModal, user_name, userId }) {
  const imgRef = useRef(null);
  const [profileImg, setProfileImg] = useState("");

  const [form, setForm] = useState({
    img: "",
    name: user_name,
    bio: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const openFile = () => {
    imgRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setProfileImg(imageUrl);
      setForm((prevForm) => ({
        ...prevForm,
        img: imageUrl,
      }));
    }
  };

  const removeImage = () => {
    setProfileImg("");
    setForm((prevForm) => ({
      ...prevForm,
      img: "",
    }));
  };

  const saveForm = async () => {
    if (form.name === "" || form.bio === "") {
      toast.error("All inputs are required!");
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:3001/users/${userId}/name`,
        { name: form.name }
      );

      console.log(`User updated successfully: ${response.data.name}`);
    } catch (error) {
      console.log(
        `Error updating user: ${
          error.response ? error.response.data : error.message
        }`,
        error
      );
    }

    console.log(form);

    // toggleModal();
    // toast.success("Profile has been updated");
  };

  return (
    <>
      <div className="modal-wrapper" onClick={toggleModal}></div>

      <div className="modal-container">
        <div className="modal-content">
          {/* head */}
          <div className="modal-head">
            <h2>Profile information</h2>
            <button onClick={toggleModal}>
              <LiaTimesSolid />
            </button>
          </div>

          {/* body */}
          <div className="modal-body">
            <p className="photo-section">Photo</p>
            <div className="photo-container">
              <div className="photo">
                <img src={profileImg} alt="profile-img" />
                <input
                  onChange={handleFileChange}
                  accept="image/jpg, image/png, image/jpeg"
                  type="file"
                  ref={imgRef}
                  hidden
                />
              </div>
              <div className="photo-actions">
                <div className="photo-actions__buttons">
                  <button onClick={openFile} className="update">
                    Update
                  </button>
                  <button onClick={removeImage} className="remove">
                    Remove
                  </button>
                </div>
                <p className="photo-note">
                  Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels
                  per side.
                </p>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="modal-form">
            <div>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                name="name"
                placeholder="Name..."
                onChange={handleFormChange}
                value={form.name}
                maxLength={20}
              />
              <p className="input-note">
                Appears on your Profile page, as your byline, and in your
                responses. {form.name.length}/20
              </p>
            </div>
            <div>
              <label htmlFor="bio">Bio*</label>
              <input
                type="text"
                name="bio"
                placeholder="Bio..."
                onChange={handleFormChange}
                value={form.bio}
                maxLength={70}
              />
              <p className="input-note">
                Appears on your Profile and next to your stories.{" "}
                {form.bio.length}/70
              </p>
            </div>
          </div>

          {/* foot */}
          <div className="modal-foot">
            <button onClick={toggleModal} className="cancel">
              Cancel
            </button>
            <button onClick={saveForm} className="save">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Model;
