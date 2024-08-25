import "./style.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="pratibela-footer">
        <div className="container">
          <div className="pratibela-footer-content">
            <div className="copyright">
              © 2024{" "}
              <a
                href="https://github.com/prateekwho/pratibela"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pratibela.
              </a>{" "}
              All rights reserved.
            </div>
            <div className="pratibela-footer-list">
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                Blogs
              </Link>
              <a href="https://x.com/pratibeladotcom" target="_blank">
                X (formerly twitter)
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
