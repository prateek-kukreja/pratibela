import "./style.scss";
import DesignA from "../postcards/designA/DesignAPostcard";
import DilliODilli from "../../images/blog/dilli/dilli-o-dilli.png";
import { Link } from "react-router-dom";
import DesignB from "../postcards/designB/DesignBPostcard";

function PopularArticles() {
  return (
    <>
      <section className="popular-articles-section">
        <div className="container">
          <div className="popular-articles-content">
            <h1>popular articles</h1>
            <p>
              Read more posts &nbsp;
              <Link onClick={() => window.scrollTo(0, 0)} to="">
                on the blog →
              </Link>
            </p>
            <DesignA
              img={DilliODilli}
              title="Dilli-O-Dilli"
              text="Dilli sheher ki baat hi kuch aur hai! Delhi has always been portrayed very beautifully in cinema and books.."
            />
            <div className="divider"></div>
            <DesignB />
            <div className="divider"></div>
            <div
              className="popular-articles-content"
              style={{ marginTop: "12rem", marginBottom: "10rem" }}
            >
              <p>
                Read more posts{" "}
                <Link onClick={() => window.scrollTo(0, 0)} to="">
                  on the blog →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularArticles;
