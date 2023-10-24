import "../styles/About.scss";
import Naman from "../images/profile/naman-dc94b23a.png";
import NewsLetter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h1 className="about-content-heading">About</h1>
            <img src={Naman} alt="naman" className="about-content-img" />
            <div className="about-content-text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi tempore architecto maiores animi sed nobis repudiandae
                doloremque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, at deleniti ab corporis, corrupti aliquid illo
                dicta ipsam laudantium, eos esse tenetur assumenda ut sapiente
                voluptate aliquam nobis? In rerum ex ratione! Neque excepturi,
                delectus laudantium dicta expedita a quasi.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita animi labore earum cupiditate voluptas at iste,
                nesciunt incidunt sint tempore.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                deserunt nihil optio consequuntur amet labore ab illum dolor,
                porro dignissimos nam nemo quod eum earum aliquam similique ut
                corrupti ex accusantium facere totam incidunt non praesentium.
                Expedita nulla sapiente sint nobis praesentium ipsa voluptate
                exercitationem quo dolores, temporibus est maiores!
              </p>
            </div>
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default About;
