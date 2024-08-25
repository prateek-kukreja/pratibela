import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../../store/blogSlice";
import { extractTextFromContent } from "../../../utils/contentUtils";
import { Link } from "react-router-dom";
import Byline from "../../postcardByline/Byline";
import "./style.scss";

function Postcard() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
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
                <p>
                  {blog.content
                    ? extractTextFromContent(blog.content)?.substring(0, 100)
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
  );
}

export default Postcard;
