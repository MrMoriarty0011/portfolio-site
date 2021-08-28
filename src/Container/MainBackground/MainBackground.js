import React, { useEffect, useRef } from "react";
import "./mainbackground.css";
import { Button, Divider } from "antd";
import Particles from "react-particles-js";
import { Facebook, Twitter, LinkedIn, Instagram } from "@material-ui/icons";

export const MainBackground = ({ userInfo }) => {
  const { name, jobTitle, description, socialMedia = {} } = userInfo;
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
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
              color: {
                value: "#FFF07C",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <div className="main-profile-wrapper">
          <div className="main-profile-wrapper__image-container">
            <img
              src={require("../../Assets/Images/Nishant.jpg")}
              className="main-profile-wrapper__image"
              alt="portifolio"
            />
          </div>
          <div className="main-profile-wrapper__body">
            <p className="main-profile-wrapper__body--name">{`Hi, I'm ${name}`}</p>
            <h2 className="main-profile-wrapper__body--title">{jobTitle}</h2>
            <p className="main-profile-wrapper__body--description">
              {description}
            </p>
          </div>
          <Divider className="main-profile-wrapper__divider" />
          <div className="main-profile-wrapper__footer">
            <div className="main-profile-wrapper__footer--social-media">
              <a href="https://www.facebook.com/00aaryan" rel="noopener noreferrer" target={"_blank"}>
                <Facebook />
              </a>
              <a href="https://twitter.com/nishant20541" rel="noopener noreferrer" target={"_blank"}>
                <Twitter />
              </a>
              <a href="https://www.instagram.com/poudyalaaryan/" rel="noopener noreferrer" target={"_blank"}>
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/in/aaryan00/" rel="noopener noreferrer" target={"_blank"}>
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="overlay" /> */}
    </>
  );
};
