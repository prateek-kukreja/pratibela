import React from "react";
import Header from "../components/header/Hero";
import Footer from "../components/footer/Footer";
import Postcard from "../components/article/postcard/Postcard";

function Home() {
  const head = "Pratibela";
  const desc =
    "Welcome to your everyday blog, filled with content you'll love.";

  return (
    <>
      <section className="Home-section">
        <Header head={head} desc={desc} />
        <div className="container">
          <Postcard />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;
