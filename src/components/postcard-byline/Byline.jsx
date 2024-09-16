import "./style.scss";
import BylineImg from "../../images/byline/naman-byline.png";
import { Link } from "react-router-dom";
import { PiHandsClapping } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { extractTextFromContent } from "../../utils/contentUtils";
import { useEffect, useState } from "react";

function Byline({ date, author_name, author_id, blog_content }) {
  const [readTime, setReadTime] = useState(null);

  const content = extractTextFromContent(blog_content);
  useEffect(() => {
    const countWords = (content) => {
      const number_of_words = content.split(" ");
      const read_time = Math.floor(number_of_words.length / 200) + 1;
      return setReadTime(read_time);
    };
    countWords(content);
  }, []);

  return (
    <div className="byline-content">
      <div className="byline">
        <div className="byline__text">
          <p className="author">
            <Link to={`profile/${author_id}`}>{author_name}</Link>
          </p>
          <div className="divider"></div>
          <p className="byline__date">
            <time>
              {new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
              })}
            </time>
          </p>
          <div className="divider"></div>
          <p>{readTime} min read</p>
        </div>
      </div>
    </div>
  );
}

export default Byline;
