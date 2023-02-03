import React from "react";
import img from "../images/3.jpg";
const About = () => {
  return (
    <div>
      <section className="about section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-12"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={img} className="w-100" alt="" />{" "}
            </div>

            <div
              className="col-lg-6 col-12 mt-5 mt-lg-0"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="about-thumb">
                <div className="section-title-wrap d-flex justify-content-center mb-4">
                  <h2 className="text-white text-center mb-0">My Story</h2>
                </div>

                <h3 className="pt-2 mb-3 text-white">a little bit of myself</h3>

                <p className="text-white">
                  Hello there, I am Turjo. I am a student who loves to code and
                  develop things and want to understand what is going beneath
                  the code. Each and every line of code is controlling the world
                  in its own way right now and I want to be part of this amazing
                  journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
