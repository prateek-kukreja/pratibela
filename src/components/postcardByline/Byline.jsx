import "./style.scss";
import BylineImg from "../../images/byline/naman-byline.png";
import { Link } from "react-router-dom";
import { PiHandsClapping } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";

function Byline({ date, author_name, author_id }) {
  return (
    <div className="byline-content">
      <div className="byline">
        <div className="byline__img">
          <img src={BylineImg} alt="" />
        </div>
        <div className="byline__text">
          <p className="author">
            <Link to={`profile/${author_id}`}>{author_name}</Link>
          </p>
          <p className="byline__date">
            <time>{new Date(date).toLocaleDateString()}</time>
            <span className="bull">•</span>5 min read
          </p>
        </div>
      </div>
      <div className="action-buttons">
        <PiHandsClapping />
        <BiMessageRounded />
        <MdDeleteOutline />
      </div>
    </div>
  );
}

export default Byline;
