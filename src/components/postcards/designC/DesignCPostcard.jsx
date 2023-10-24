import "./style.scss";
import { Blogs } from "../../data/AllData";
import { Link } from "react-router-dom";
import Byline from "../../postcardByline/Byline";

function Postcard() {
  const filteredBlogs = Blogs.filter((blog) => blog.id >= 3 && blog.id <= 5);

  return (
    <>
      <div className="postcard-c-section">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="postcard-c-content">
            <Link to={blog.link}>
              <div
                onClick={() => window.scrollTo(0, 0)}
                className="postcard-c-content__img"
              >
                <img src={blog.img} alt="" />
              </div>
              <div className="postcard-c-content__text">
                <h2>{blog.title}</h2>
                <p>{blog.text}</p>
              </div>
            </Link>
            <Byline />
          </div>
        ))}
      </div>
    </>
  );
}

export default Postcard;
