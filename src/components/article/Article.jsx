import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../store/blogSlice";
import { extractTextFromContent } from "../../utils/contentUtils";
import { useParams } from "react-router-dom";
import BylineImg from "../../images/byline/naman-byline.png";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";
import "./style.scss";

function Article() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  const blogPost = blogs.find((blog) => blog.$id === id);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (!blogPost) {
    return <p>No BlogPost Available</p>;
  }

  return (
    <>
      <section className="article-section">
        <div className="article-heading">
          <h1>{blogPost.title}</h1>
          <div className="article-heading-divider"></div>
          <div className="article-heading-byline">
            <div className="article-heading-byline__img">
              <img src={BylineImg} alt="" />
            </div>
            <div className="article-heading-byline__text">
              <p>{blogPost.authorName}</p>
              <p className="article-heading-byline__date">
                <time>
                  PUBLISHED ON{" "}
                  {new Date(blogPost.$createdAt).toLocaleDateString()}
                </time>
                <span className="bull">•</span> 5 min read
              </p>
            </div>
          </div>
        </div>
        <div className="article-big-image">
          <img src={blogPost.imageUrl} alt="" />
        </div>
        <div className="container">
          <div className="article-text">
            {extractTextFromContent(blogPost.content)}
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Article;
