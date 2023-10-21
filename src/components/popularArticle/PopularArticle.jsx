import "./style.scss";
import Design1 from "../postcards/design1/Design1Postcard";
import DilliODilli from "../../images/blog/dilli-o-dilli.png";

function PopularArticles() {
  return (
    <>
      <section className="popular-articles-section">
        <div className="container">
          <div className="popular-articles-content">
            <Design1
              img={DilliODilli}
              title="Dilli-O-Dilli"
              text="Dilli sheher ki baat hi kuch aur hai! Delhi has always been portrayed very beautifully in cinema and books.."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularArticles;
