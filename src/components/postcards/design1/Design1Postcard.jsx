import "./style.scss";
import Byline from "../../postcardByline/Byline";
import { Link } from "react-router-dom";

function Postcard({ img, title, text }) {
  return (
    <>
      <div className="postcard-content">
        <div className="postcard-content__img">
          <Link to="">
            <img src={img} alt="" />{" "}
          </Link>
        </div>
        <div className="postcard-content__text">
          <Link to="">
            <h2>{title}</h2>
            <p>{text}</p>
          </Link>
          <Byline />
        </div>
      </div>
    </>
  );
}

export default Postcard;
