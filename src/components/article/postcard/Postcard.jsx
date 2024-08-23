import "./style.scss";
import { Link } from "react-router-dom";
import Byline from "../../postcardByline/Byline";
import { listBlog } from "../../../appwrite/database";
import { getFile } from "../../../appwrite/storage";
import { useEffect, useState } from "react";

function Postcard() {
  const [blogs, setBlogs] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogData = await listBlog();
        console.log(blogData);

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

  // Function to extract text from content JSON
  const extractTextFromContent = (content) => {
    if (!content) return "";

    const parsedContent = JSON.parse(content);
    let text = "";

    parsedContent.blocks.forEach((block) => {
      if (block.type === "paragraph" || block.type === "header") {
        text = text + block.data.text + " ";
      }
    });

    return text.substring(0, 100);
  };

  return (
    <>
      <div className="postcard-b-section">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.$id} className="postcard-b-content">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={`/blog/${blog.$id}`}
              >
                <div className="postcard-b-content__img">
                  <img src={blog.imageUrl} alt={blog.title} />
                </div>
                <div className="postcard-b-content__text">
                  <h2>{blog.title}</h2>
                  <p>{extractTextFromContent(blog.content)}...</p>
                </div>
              </Link>
              <Byline date={blog.date} read={blog.read} />
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </>
  );
}

export default Postcard;
