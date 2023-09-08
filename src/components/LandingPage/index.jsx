
function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop destination for amazing products and services.</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Nulla facilisi. Sed non sapien sed urna finibus posuere.</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Proin at nisi at dui mattis malesuada in id arcu.</p>
        </div>
      </section>
      <section className="call-to-action">
        <h2>Ready to get started?</h2>
        <p>Join us today and experience the best we have to offer.</p>
        <button className="cta-button">Sign Up Now</button>
      </section>
      <footer>
        <p>&copy; 2023 Your Company Name</p>
      </footer>
    </div>
  );
}

export default LandingPage;
