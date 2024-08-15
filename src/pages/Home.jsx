import React from "react";
import BlogHeader from "../components/header/BlogHeader";
import DesignB from "../components/postcards/designB/DesignBPostcard";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";

function Blog() {
  return (
    <>
      <section className="blog-section">
        <BlogHeader />
        <div className="container">
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
          ></div>
          <div style={{ marginBottom: "10rem" }}></div>
        </div>
        <Newsletter />
        <Footer />
      </section>
    </>
  );
}

export default Blog;
