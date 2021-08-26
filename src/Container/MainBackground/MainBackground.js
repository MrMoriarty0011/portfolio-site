import React, { useEffect, useRef } from "react";
import "./mainbackground.css";
import { DownCircleOutlined, DownOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const MainBackground = () => {
  const imageRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => window.removeEventListener("mousemove", onMouseMove);
  // });

  const onMouseMove = (e) => {
    // let moveX = (e.offsetX * -1) / 200;
    // let moveY = (e.offsetY * -1) / 200;
    // document.getElementById(
    //   "profile-image"
    // ).style.backgroundPosition = `${moveX}px ${moveY}px`;
    let constrain = 20;
    let imageElement = imageRef?.current;

    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - box.height / 2) / constrain;
      let calcY = (x - box.x - box.width / 2) / constrain;

      return (
        "perspective(1200px) " +
        "   rotateX(" +
        calcX +
        "deg) " +
        "   rotateY(" +
        calcY +
        "deg) "
      );
    }

    function transformElement(el, xyEl) {
      el.style.transform = transforms.apply(null, xyEl);
    }

    let xy = [e.clientX, e.clientY];
    let position = xy.concat([imageElement]);

    window.requestAnimationFrame(function () {
      transformElement(imageElement, position);
    });
  };

  const onMouseLeave = (e) => {
    let imageElement = imageRef?.current;
    imageElement.style.transform = "perspective(100px) rotateX(0) rotateY(0)";
  }; 

  return (
    <>
      <div className="background-container">
        {/* <div className="main-background-container" id="background"/> */}
        <div className="main-profile-wrapper">
          <div
            className="main-profile-wrapper__image"
            id="profile-image"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <img
              src={require("../../Assets/Images/background.png")}
              id="profile-image"
              ref={imageRef}
              alt=""
            />
          </div>
          <div className="main-profile-wrapper__profile">
            <h4>Front end developer</h4>
            <h2>
              Hi, I am <label>Nishant Poudel</label>
            </h2>
            <p>
              I am a computer science student graduated from Patan Multiple
              Campus. I have been focusing my career as a front end developer to
              design and develop responsive websites using programming languages
              like React, Javascript and HTML/CSS.
            </p>
            <div className="main-profile-wrapper__profile--button-container">
              <Button type="primary">Download CV</Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="overlay" /> */}
    </>
  );
};
