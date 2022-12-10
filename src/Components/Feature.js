import React from "react";

const Feature = () => {
  return (
    <div>
      <section class="featured section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="profile-thumb">
                <div class="profile-title">
                  <h4 class="mb-0">Information</h4>
                </div>

                <div class="profile-body">
                  <p>
                    <span class="profile-small-title">Name</span>
                    <span>Surab B Turjo</span>
                  </p>

                  <p>
                    <span class="profile-small-title">Birthday</span>
                    <span>12 November, 2002</span>
                  </p>

                  <p>
                    <span class="profile-small-title">Phone</span>
                    <span>
                      <span href="tel: 305-240-9671">+880-18-711-65-360</span>
                    </span>
                  </p>

                  <p>
                    <span class="profile-small-title">Email</span>
                    <span>
                      <span href="mailto:hello@josh.design">
                        turjodevwork@gmail.com
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-12 mt-5 mt-lg-0">
              <div class="about-thumb">
                <div class="row">
                  <div class="col-lg-6 col-6 featured-border-bottom py-2">
                    <strong class="featured-numbers">1+</strong>

                    <p class="featured-text">Years of Experiences</p>
                  </div>

                  <div class="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                    <strong class="featured-numbers">140+</strong>

                    <p class="featured-text">CodeForces Problem Solved</p>
                  </div>

                  <div class="col-lg-6 col-6 pt-4">
                    <strong class="featured-numbers">7</strong>

                    <p class="featured-text">Project Finished</p>
                  </div>

                  <div class="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                    <strong class="featured-numbers">CGPA</strong>

                    <p class="featured-text">3.59</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
