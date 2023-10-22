import "./style.scss";

function Footer() {
  return (
    <>
      <footer class="pratibela-footer">
        <div className="container">
          <div class="pratibela-footer-content">
            <div class="copyright">
              © <a href="#">Naman Rakheja's Website</a> 2023
            </div>
            <div class="pratibela-footer-list">
              <a href="#">Blogs</a>
              <a href="https://www.instagram.com/nams_rakheja/" target="_blank">
                Instagram
              </a>
            </div>
          </div>
          <div className="pratibela-footer__website-creator">
            <div>
              Made by <a href="https://prateek.wtf/"> Prateek Kukreja</a> and
              Design by <a href="https://monicalent.com/">Monica Lent</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
