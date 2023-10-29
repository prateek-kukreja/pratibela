import "./style.scss";
import { Blogs } from "../../data/AllData";
import { Link } from "react-router-dom";
import Byline from "../../postcardByline/Byline";

function Postcard() {
  const filteredBlogs = Blogs.filter((blog) => blog.id == 4);

  return (
    <>
      <div className="postcard-d-section">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="postcard-d-content">
            <Link onClick={() => window.scrollTo(0, 0)} to={blog.link}>
              <div className="postcard-d-content__img">
                <img src={blog.img} alt="" />
              </div>
              <div className="postcard-d-content__text">
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
