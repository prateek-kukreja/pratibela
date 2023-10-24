import "./style.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="pratibela-footer">
        <div className="container">
          <div className="pratibela-footer-content">
            <div className="copyright">
              ©{" "}
              <a href="https://github.com/prateekwho/pratibela" target="_blank">
                Naman Rakheja's Website
              </a>{" "}
              2023
            </div>
            <div className="pratibela-footer-list">
              <Link onClick={() => window.scrollTo(0, 0)} to="/blog">
                Blogs
              </Link>
              <a href="https://www.instagram.com/nams_rakheja/" target="_blank">
                Instagram
              </a>
            </div>
          </div>
          <div className="pratibela-footer__website-creator">
            <div>
              Made by{" "}
              <a href="https://prateek.wtf/" target="_blank">
                {" "}
                Prateek Kukreja
              </a>{" "}
              and Design by{" "}
              <a href="https://monicalent.com/" target="_blank">
                Monica Lent
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
