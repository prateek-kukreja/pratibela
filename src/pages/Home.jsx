import React from "react";
import Header from "../components/header/Hero";
import Footer from "../components/footer/Footer";
import Postcard from "../components/postcard/Postcard";

function Home() {
  const head = "Pratibela";
  const desc =
    "Read the latest news, framework releases, tips, and sometimes tutorials from the Pratibela team.";

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
