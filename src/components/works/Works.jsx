import React from "react";
import "./works.scss";

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem pariatur cupiditate temporibus voluptate saepe
                  quae aliquid eius? Atque dolore, ex voluptatem sapiente
                  pariatur ipsa optio ad. Quam amet quasi voluptatem.
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
