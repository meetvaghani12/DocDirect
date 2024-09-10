import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
        Your health is our utmost priority. We are dedicated to providing exceptional medical care and support to ensure your well-being. Our team of professionals is here to address your concerns, offering compassionate and comprehensive healthcare services tailored to your needs. Let us help you on your journey to a healthier, happier life.


        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
