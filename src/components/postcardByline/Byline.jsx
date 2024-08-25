import "./style.scss";
import BylineImg from "../../images/byline/naman-byline.png";

function Byline({ date, author_name }) {
  return (
    <div className="byline">
      <div className="byline__img">
        <img src={BylineImg} alt="" />
      </div>
      <div className="byline__text">
        <p>{author_name}</p>
        <p className="byline__date">
          <time>{new Date(date).toLocaleDateString()}</time>
          <span className="bull">•</span>5 min read
        </p>
      </div>
    </div>
  );
}

export default Byline;
