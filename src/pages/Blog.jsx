import React from "react";
import BlogHeader from "../components/header/BlogHeader";
import DesignA from "../components/postcards/designA/DesignAPostcard";
import DilliODilli from "../images/blog/dilli/dilli-o-dilli.png";
import DesignB from "../components/postcards/designB/DesignBPostcard";
import DesignC from "../components/postcards/designC/DesignCPostcard";
import DesignD from "../components/postcards/designD/DesignDPostcard";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";

function Blog() {
  return (
    <>
      <section className="blog-section">
        <BlogHeader />
        <div className="container">
          <DesignA
            img={DilliODilli}
            title="Dilli-O-Dilli"
            text="Dilli sheher ki baat hi kuch aur hai! Delhi has always been portrayed very beautifully in cinema and books.."
          />
          <div
            style={{
              height: "0.016rem",
              backgroundColor: "#738a94",
              width: "100%",
            }}
          ></div>
          <DesignC />
          <div
            style={{
              height: "0.016rem",
              backgroundColor: "#738a94",
              width: "100%",
            }}
          ></div>
          <DesignD />
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
