import "./style.scss";
import { useRef } from "react";

function Hero({ head, desc }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-content__text">
            <h1>{head}</h1>
            <p>{desc}</p>
          </div>
          <div className="hero-content__newsletter">
            <div
              className="input"
              tabindex="0"
              ref={inputRef}
              onClick={handleClick}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="email-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <path d="m3 7l9 6l9-6"></path>
                </g>
              </svg>
              <input type="text" placeholder="Enter your email address" />
            </div>

            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
