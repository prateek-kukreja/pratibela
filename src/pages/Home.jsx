import React from "react";
import Header from "../components/header/Header";
import DesignB from "../components/postcards/designB/DesignBPostcard";
import DesignD from "../components/postcards/designD/DesignDPostcard";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import Postcard from "../article/postcard/Postcard";

function Blog() {
  return (
    <>
      <section className="blog-section">
        <Header />
        <div className="container">
          <Postcard />
          {/* <DesignD />
          <DesignB />
          <div
            style={{
              height: "0.016rem",
              backgroundColor: "#738a94",
              width: "100%",
            }}
          ></div>
          <DesignB />
          <div
            style={{
              height: "0.016rem",
              backgroundColor: "#738a94",
              width: "100%",
            }}
          ></div> */}
          <div style={{ marginBottom: "10rem" }}></div>
        </div>
        <Newsletter />
        <Footer />
      </section>
    </>
  );
}

export default Blog;
