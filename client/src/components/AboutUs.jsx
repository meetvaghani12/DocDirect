import React from "react";
import image from "../images/file.jpg";

const AboutUs = () => {
  // Define inline styles
  const sectionStyle = {
    backgroundColor: '#ADD8E6', // Replace with your light blue color
    display: 'flex',
    padding: '50px 250px',


  };

  const imageStyle = {
    height: '400px',
    width: '350px',
  };

  return (
    <section style={sectionStyle} className="about">
      <div className="hero-img">
        <img src={image} alt="hero" style={imageStyle} />
      </div>
      <div className="hero-content">
        <p>
          Welcome to DocDirect, your comprehensive healthcare platform designed to simplify your medical journey. Here, you can easily browse a wide range of doctors, manage your profile, and book appointments with just a few clicks.
        </p>
        <p>
          Our platform offers real-time notifications and secure access to ensure a seamless experience. Aspiring doctors are welcome to apply and become part of our growing community. Our dedicated admin team works tirelessly to ensure smooth operations, providing you with the best possible service.
        </p>
        <p>
          Your data security is our top priority. Join DocDirect today and enjoy effortless healthcare interactions, bringing convenience and peace of mind to your medical needs.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
