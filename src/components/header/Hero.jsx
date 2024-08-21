import "./style.scss";
import Naman from "../../images/profile/naman_blog.png";

function Hero() {
  const [editModal, setEditModal] = useState(false);
  const handleEditProfile = () => {};

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="pratibela-hero-content">
            <div className="pratibela-hero-content__img">
              <img src={Naman} alt="" />
            </div>
            <div className="pratibela-hero-content__text">
              <span>Hi, I'm Naman</span>
              <p>I write about captivating topics that inspire</p>
            </div>
            <div className="pratibela-hero-content__edit-profile">
              <button onClick={handleEditProfile}>Edit profile</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
