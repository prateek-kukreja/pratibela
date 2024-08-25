import React, { useEffect } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import { Link, useParams } from "react-router-dom";
import Byline from "../components/postcardByline/Byline";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../store/blogSlice";
import { extractTextFromContent } from "../utils/contentUtils";

function Profile() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  // Filter blogs by authorId
  const authorBlogs = blogs.filter((blog) => blog.authorId === userId);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <section className="profile-section">
      <ProfileHeader id={userId} />
      <div className="container">
        <div className="postcard-b-section">
          {authorBlogs.length > 0 ? (
            authorBlogs.map((blog) => (
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
                    <p>
                      {blog.content
                        ? extractTextFromContent(blog.content)?.substring(
                            0,
                            100
                          )
                        : "No content available"}
                      ...
                    </p>
                  </div>
                </Link>
                <Byline
                  date={blog.$createdAt}
                  author_name={blog.authorName}
                  author_id={blog.authorId}
                />
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
