import "./style.scss";

function Newsletter() {
  return (
    <div className="newsletter">
      <p className="newsletter__headline">
        Learn about building products as a developer
      </p>
      <p className="newsletter__subhead">
        Get a once-per-month email with my latest article and additional details
        about my launches, products, and experiments ✨
      </p>
      <div className="newsletter__input">
        <input type="text" placeholder="Your email address" />
        <button className="">Get Updates</button>
      </div>
      <p className="newsletter__disclaimer">
        No spam, sales, or ads. Unsubscribe as your heart desires.
      </p>
    </div>
  );
}

export default Newsletter;
