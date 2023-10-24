import "../styles/Contact.scss";
import NewsLetter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";

function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h1>Contact</h1>
            <div className="contact-content-text">
              <p>Thanks for your interest in getting in touch!</p>
              <p>
                <strong>
                  The best way to reach me is by email at{" "}
                  <a href="">namanrakheja@gmail.com</a>
                </strong>
              </p>
              <blockquote>
                <p>
                  <strong>
                    NOTE: I do NOT accept guest posts or do link insertions.
                  </strong>{" "}
                  Paid or otherwise. Ask me for one of those things and I will
                  mark your email as spam 😇
                </p>
              </blockquote>
              <p>
                If you’ve got a more casual question, the best place to get in
                touch is on Instagram{" "}
                <a
                  href="https://www.instagram.com/nams_rakheja/"
                  target="_blank"
                >
                  @nams_rakheja
                </a>
                .
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

export default Contact;
