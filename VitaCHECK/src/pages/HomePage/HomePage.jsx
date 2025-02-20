import React from "react";
import Hero from "../../assets/images/hero1.webp";
import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <article className="hero-image-container">
      <div className="hero-image__text-container">
        <h1 className="hero-image__text">
          Healthy habits start with the right vitamins.
        </h1>
        <Link className="hero-image__btn-link" to="/vitamins">
          <button className="hero-image__btn">Find Yours Daily Requirement</button>
        </Link>
      </div>
      <img className="hero-image" src={Hero} alt="hero image" />
    </article>
  );
}

export default HomePage;
