import React from "react";
import "./about.css";
import aboutImg from "../../images/about-img.jpg";

const about = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ea eveniet minima sit, sapiente voluptate aliquid deleniti optio
              atque at corrupti ratione earum nihil consectetur molestias,
              quidem dolores enim adipisci minus? Sint, quis tempora illum eum
              suscipit ipsa, distinctio sed aspernatur voluptates natus nam
              fugit.
            </p>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ea eveniet minima sit, sapiente voluptate aliquid deleniti optio
              atque at corrupti ratione earum nihil consectetur molestias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
