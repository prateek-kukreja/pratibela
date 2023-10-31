import "./style.scss";
import { Blogs } from "../../data/AllData";
import { Link } from "react-router-dom";
import Byline from "../../postcardByline/Byline";

function Postcard() {
  const filteredBlogs = Blogs.filter((blog) => blog.id == 1 || blog.id == 4);

  return (
    <>
      <div className="postcard-b-section">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="postcard-b-content">
            <Link onClick={() => window.scrollTo(0, 0)} to={blog.link}>
              <div className="postcard-b-content__img">
                <img src={blog.img} alt="" />
              </div>
              <div className="postcard-b-content__text">
                <h2>{blog.title}</h2>
                <p>{blog.text}</p>
              </div>
            </Link>
            <Byline date={blog.date} read={blog.read} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Postcard;
