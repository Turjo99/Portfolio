import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import "../css/bootstrap-icons.css";
import img from "../images/4.jpg";
import img1 from "../images/1.png";
import cv from "../images/turjo.pdf";

const Hero = () => {
  return (
    <div>
      <section
        class="hero d-flex justify-content-center align-items-center"
        id="section_1"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-12">
              <div class="hero-text">
                <div class="hero-title-wrap d-flex align-items-center mb-4">
                  <img
                    src={img}
                    class="avatar-image avatar-image-large img-fluid"
                    alt=""
                  />
                  {/* import img from "../images/3.jpg"; */}
                  <h1 class="hero-title ms-3 mb-0">Hello there!</h1>
                </div>

                <h2 class="mb-4 heroleft">
                  I’m Surab Barua , a full stack developer.
                </h2>
                <p class="mt-4 hero-left2">
                  <a class=" px-4 py-3 download" href={cv} download>
                    Download Resume
                  </a>
                </p>
              </div>
            </div>

            <div class="col-lg-5 col-12 position-relative">
              <div class="hero-image-wrap"></div>
              <img src={img1} class="hero-image img-fluid" alt="" />
            </div>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#535da1"
            fill-opacity="1"
            d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
      </section>
    </div>
  );
};

export default Hero;
