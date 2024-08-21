import "./style.scss";
import { createBlog } from "../../appwrite/database";
import { useState, useEffect } from "react";
import { createImageFile } from "../../appwrite/storage";
import { getUser } from "../../appwrite/auth";

const Write = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    imageId: "",
  });

  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUserId(user.$id);
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };

    fetchUser();
  }, []);

  const handleInput = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    setBlogData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];

    try {
      const imageFile = await createImageFile(file);

      setBlogData((prevState) => ({
        ...prevState,
        imageId: imageFile.$id,
      }));
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, content, imageId } = blogData;

    try {
      const createdBlog = await createBlog({
        title,
        content,
        imageId,
        authorId: userId,
      });
      console.log("response data", createdBlog);
    } catch (error) {
      console.error("Error creating blog", error);
    }
  };

  return (
    <div className="create-blog content">
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImage}
          required
        />
        <label htmlFor="title">Blog title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={blogData.title}
          onChange={handleInput}
          required
        />
        <label htmlFor="body">Blog body:</label>
        <textarea
          id="content"
          name="content"
          value={blogData.content}
          onChange={handleInput}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Write;
