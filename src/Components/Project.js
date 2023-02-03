import React from "react";
import img from "../images/joss.PNG";
import img2 from "../images/doctor.PNG";
import img3 from "../images/chick.PNG";

const Project = () => {
  return (
    <div>
      <section class="projects section-padding" id="section_4">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-12 ms-auto">
              <div class="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                <h2 class="text-white ms-4 mb-0">Projects</h2>
              </div>
            </div>

            <div class="clearfix"></div>

            <div
              class="col-lg-4 col-md-6 col-12"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div class="projects-thumb">
                <div class="projects-info">
                  <small class="projects-tag">Website</small>

                  <h3 class="projects-title">Joss Cars</h3>
                </div>

                <a href="https://joss-car.web.app/" class="popup-image">
                  <img src={img} class="projects-image img-fluid" alt="" />
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div class="projects-thumb">
                <div class="projects-info">
                  <small class="projects-tag">Website</small>

                  <h3 class="projects-title">Doctors Portal</h3>
                </div>

                <a
                  href="https://doctors-portal-aaca7.web.app/"
                  class="popup-image"
                >
                  <img src={img2} class="projects-image img-fluid" alt="" />
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 col-12"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div class="projects-thumb">
                <div class="projects-info">
                  <small class="projects-tag">Website</small>

                  <h3 class="projects-title">Cheaky Chicken</h3>
                </div>

                <a href="https://cheakychicken.web.app/" class="popup-image">
                  <img src={img3} class="projects-image img-fluid" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
