import "./style.scss";

function BlogHeader({ head, desc }) {
  return (
    <section className="blog-hero-section">
      <div className="container">
        <div className="blog-hero-content">
          <div className="blog-hero-content__text">
            <h1>{head}</h1>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogHeader;
