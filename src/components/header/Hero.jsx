import "./style.scss";

function Hero({ head, desc }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-content__text">
            <h1>{head}</h1>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
