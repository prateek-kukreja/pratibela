import "./style.scss";
import { Blogs } from "../../data/AllData";
import { Link } from "react-router-dom";
import Byline from "../../postcardByline/Byline";

function Postcard() {
  const filteredBlogs = Blogs.filter((blog) => blog.id >= 5 && blog.id <= 6);

  return (
    <>
      <div className="postcard-b-section">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="postcard-b-content">
            <Link to="">
              <div className="postcard-b-content__img">
                <img src={blog.img} alt="" />
              </div>
              <div className="postcard-b-content__text">
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
