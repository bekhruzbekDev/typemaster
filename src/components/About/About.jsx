import "./about.css";
function About() {
  return (
    <section className="about">
      <div className="icon about-icon"></div>
      <div className="container about-container">
        <div className="about-photo">
          <img
            src="./assets/image/keyboard-two.jpg"
            alt="keyboard-two"
            className="image-one"
          />
          <img
            src="./assets/image/keyboard-three.jpg"
            alt="keyboard-three"
            className="image-two"
          />
        </div>
        <div className="about-info">
            <div className="info">
          <h2>mechanical wireless Keyboard</h2>
            </div>
            <div className="wrap">
          <p>
            The Typemaster keyboard boasts top-notch build and practical design.
            It offers a wide variety of switches and keycaps, along with
            reliable wireless connectivity.
          </p>
            </div>
        </div>
      </div>
    </section>
  );
}
export default About;
