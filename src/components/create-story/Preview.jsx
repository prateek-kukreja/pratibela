import "./style.scss";
import { useRef, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../appwrite/database";
import { createImageFile } from "../../appwrite/storage";

function Preview({ togglePreview, title, content }) {
  const imgRef = useRef();
  const [previewBlog, setPreviewBlog] = useState({
    imageFile: "",
    title: title,
    content: content,
  });

  const openFile = () => {
    imgRef.current.click();
  };

  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);

      setPreviewBlog((prevPreviewBlog) => ({
        ...prevPreviewBlog,
        imageFile: file,
      }));
    }
  };

  const handlePreview = (e) => {
    const title = e.target.value;

    setPreviewBlog((prevPreviewBlog) => ({
      ...prevPreviewBlog,
      title,
    }));
  };

  const checkContent = () => {
    const { content } = previewBlog;
    // JSON.stringify(content);
    console.log(content);
  };

  const navigate = useNavigate();
  const publish = async () => {
    if (previewBlog.imageUrl === "" || previewBlog.title === "") {
      return toast.error("All items are required!");
    }

    const { imageFile, title, content } = previewBlog;

    try {
      const createImage = await createImageFile(imageFile);
      console.log("successfully created", createImage);

      const imageId = createImage.$id;
      console.log("imageId", imageId);
      const createdBlog = await createBlog({ imageId, title, content });
      console.log("response data", createdBlog);
    } catch (error) {
      console.error("Error creating blog", error);
    }

    navigate("/");
  };

  return (
    <>
      <div className="preview-overlay"></div>
      <div className="preview-container">
        <div className="preview-content">
          {/* head */}
          <div className="preview-head">
            <h2>Story Preview</h2>
            <button onClick={togglePreview}>
              <LiaTimesSolid />
            </button>
          </div>
          <div className="preview-image">
            <div
              style={{ backgroundImage: `url(${imageUrl})` }}
              onClick={openFile}
              className="img"
            >
              {!imageUrl && "Add Image"}
            </div>
            <input
              type="file"
              onChange={handleFileChange}
              ref={imgRef}
              hidden
            />
          </div>
          <div className="preview-title">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={previewBlog.title}
              onChange={handlePreview}
            />
          </div>
          <div className="preview-note">
            <p>
              Note: Changes here will affect how your story appears in public
              places like Medium’s homepage and in subscribers’ inboxes — not
              the contents of the story itself.
            </p>
          </div>
          <div className="preview-button">
            <button onClick={publish} className="publish">
              Publish
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
