import "./style.scss";
import BylineImg from "../../images/byline/naman-byline.png";

function Byline() {
  return (
    <div className="byline">
      <div className="byline__img">
        <img src={BylineImg} alt="naman" />
      </div>
      <div className="byline__text">
        <p>naman rakheja</p>
        <p className="byline__date">
          <time dateTime="2021-12-31">31 December 2021</time>
          <span className="bull">•</span> 10 min read
        </p>
      </div>
    </div>
  );
}

export default Byline;
