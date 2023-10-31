import "./style.scss";
import BylineImg from "../../images/byline/naman-byline.png";

function Byline({ date, read }) {
  return (
    <div className="byline">
      <div className="byline__img">
        <img src={BylineImg} alt="naman" />
      </div>
      <div className="byline__text">
        <p>naman rakheja</p>
        <p className="byline__date">
          <time>{date}</time>
          <span className="bull">•</span>
          {read}
        </p>
      </div>
    </div>
  );
}

export default Byline;
