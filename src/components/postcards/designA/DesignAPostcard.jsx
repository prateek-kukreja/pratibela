import "./style.scss";
import Byline from "../../postcardByline/Byline";
import { Link } from "react-router-dom";

function Postcard({ img, title, text }) {
  return (
    <>
      <div className="postcard-content">
        <div className="postcard-content__img">
          <Link onClick={() => window.scrollTo(0, 0)} to="dilli-o-dilli">
            <img src={img} alt="" />
          </Link>
        </div>
        <div className="postcard-content__text">
          <Link onClick={() => window.scrollTo(0, 0)} to="dilli-o-dilli">
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
