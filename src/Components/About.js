import React from "react";
import img from "../images/3.jpg";
const About = () => {
  return (
    <div>
      <section className="about section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <img src={img} className="w-100" alt="" />{" "}
            </div>

            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <div className="about-thumb">
                <div className="section-title-wrap d-flex justify-content-center mb-4">
                  <h2 className="text-white text-center mb-0">My Story</h2>
                </div>

                <h3 className="pt-2 mb-3 text-white">a little bit of myself</h3>

                <p className="text-white">
                  Hi there. This is Turjo here studying Computer Science &
                  Engineering at
                  <br />
                  International Islamic University Chittagong <br />I like to
                  develop web applications and goof around with different
                  challenging techs.
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
