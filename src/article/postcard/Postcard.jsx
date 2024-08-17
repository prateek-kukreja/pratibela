import "./style.scss";
import { Link } from "react-router-dom";
import Byline from "../../components/postcardByline/Byline";
import { listBlog } from "../../appwrite/database";
import { getFile } from "../../appwrite/storage";
import { useEffect, useState } from "react";

function Postcard() {
  const [blogs, setBlogs] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogData = await listBlog();

        // Fetch image URLs for each blog ( This ensures all image URLs are fetched before setting the state. )
        const blogsWithImages = await Promise.all(
          blogData.map(async (blog) => {
            const image = await getFile(blog.imageId);
            return { ...blog, imageUrl: image.href };
          })
        );

        setBlogs(blogsWithImages);
      } catch (error) {
        console.error("error fetching blogs", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="postcard-b-section">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.$id} className="postcard-b-content">
              <Link onClick={() => window.scrollTo(0, 0)} to={"/"}>
                <div className="postcard-b-content__img">
                  <img src={blog.imageUrl} alt={blog.title} />
                </div>
                <div className="postcard-b-content__text">
                  <h2>{blog.title}</h2>
                  <p>{blog.content?.substring(0, 200)}...</p>
                </div>
              </Link>
              <Byline date={blog.date} read={blog.read} />
            </div>
          ))
        ) : (
          <p>No blogs available. </p>
        )}
      </div>
    </>
  );
}

export default Postcard;
