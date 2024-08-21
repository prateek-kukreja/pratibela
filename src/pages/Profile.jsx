import React, { useState, useEffect } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import { listUserBlog } from "../appwrite/database";
import { getFile } from "../appwrite/storage";
import { Link } from "react-router-dom";
import Byline from "../components/postcardByline/Byline";
import { getUser } from "../appwrite/auth";

function Profile() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const userData = await getUser();
        console.log(userData);
        const blogData = await listUserBlog(userData.$id);
        console.log("userBlogData", blogData);

        // Fetch image URLs for each blog
        const blogsWithImages = await Promise.all(
          blogData.map(async (blog) => {
            const image = await getFile(blog.imageId);
            return { ...blog, imageUrl: image.href };
          })
        );

        setBlogs(blogsWithImages);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="profile-section">
      <ProfileHeader />
      <div className="container">
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
                    <p>{blog.content?.substring(0, 200)}...</p>
                  </div>
                </Link>
                <Byline date={blog.date} read={blog.read} />
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Profile;
