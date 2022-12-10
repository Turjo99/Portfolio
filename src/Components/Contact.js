import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/style.css";
import "../css/bootstrap.min.css";
import "../css/bootstrap-icons.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yz0ybkc",
        "template_0lvsb95",
        form.current,
        "qdXHgnfOd55u95QzA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section class="contact section-padding bg-dark text-white" id="section_5">
      <div class="container">
        <div class="row bg-dark">
          <div class="col-lg-6 col-md-8 col-12">
            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <img
                src="images/aerial-view-man-using-computer-laptop-wooden-table.jpg"
                class="avatar-image img-fluid"
                alt=""
              />

              <h2 class="text-white ms-4 mb-0">Say Hi</h2>
            </div>
          </div>

          <div class="clearfix"></div>

          <div class="col-lg-3 col-md-6 col-12 pe-lg-0 bg-dark">
            <div class="contact-info contact-info-border-start d-flex flex-column">
              <strong class="site-footer-title d-block mb-3">Services</strong>

              <ul class="footer-menu">
                <li class="footer-menu-item">
                  <span href="#" class="footer-menu-link">
                    Websites
                  </span>
                </li>

                <li class="footer-menu-item">
                  <span href="#" class="footer-menu-link">
                    Ecommerce
                  </span>
                </li>
              </ul>

              <strong class="site-footer-title d-block mt-4 mb-3">
                Stay connected
              </strong>

              <ul class="social-icon">
                <li class="social-icon-item">
                  <span href="" class="social-icon-link bi-twitter"></span>
                </li>

                <li class="social-icon-item">
                  <span href="#" class="social-icon-link bi-instagram"></span>
                </li>

                <li class="social-icon-item">
                  <span href="#" class="social-icon-link bi-pinterest"></span>
                </li>

                <li class="social-icon-item">
                  <span href="" class="social-icon-link bi-youtube"></span>
                </li>
              </ul>

              <strong class="site-footer-title d-block mt-4 mb-3">
                Start a project
              </strong>

              <p class="mb-0">I’m available for freelance projects</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-12 ps-lg-0">
            <div class="contact-info d-flex flex-column">
              <strong class="site-footer-title d-block mb-3">About</strong>

              <p class="mb-2">Feel free to get in touch with me.</p>

              <strong class="site-footer-title d-block mt-4 mb-3">Email</strong>

              <p>
                <span href="">turjodevwork@gmail.com</span>
              </p>

              <strong class="site-footer-title d-block mt-4 mb-3">Call</strong>

              <p class="mb-0">
                <span href="">+880-18-711-65-360</span>
              </p>
            </div>
          </div>

          <div class="col-lg-6 col-12 mt-5 mt-lg-0">
            <form
              action="#"
              method="get"
              class="custom-form contact-form text-white"
              role="form"
              ref={form}
              onSubmit={sendEmail}
            >
              <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-floating">
                    <input
                      type="text"
                      name="user_name"
                      id="name"
                      class="form-control text-white"
                      placeholder="Name"
                      required=""
                    />

                    <label for="floatingInput">Name</label>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-floating">
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      class="form-control text-white"
                      placeholder="Email address"
                      required=""
                    />

                    <label for="floatingInput">Email address</label>
                  </div>
                </div>

                {/* <div class="col-lg-3 col-md-6 col-6">
                  <div class="form-check form-check-inline">
                    <input
                      name="website"
                      type="checkbox"
                      class="form-check-input"
                      id="inlineCheckbox1"
                      value="1"
                    />

                    <label class="form-check-label" for="inlineCheckbox1">
                      <i class="bi-globe form-check-icon"></i>
                      <span class="form-check-label-text">Websites</span>
                    </label>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-6">
                  <div class="form-check form-check-inline">
                    <input
                      name="branding"
                      type="checkbox"
                      class="form-check-input"
                      id="inlineCheckbox2"
                      value="1"
                    />

                    <label class="form-check-label" for="inlineCheckbox2">
                      <i class="bi-lightbulb form-check-icon"></i>
                      <span class="form-check-label-text">Design</span>
                    </label>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-6">
                  <div class="form-check form-check-inline">
                    <input
                      name="ecommerce"
                      type="checkbox"
                      class="form-check-input"
                      id="inlineCheckbox3"
                      value="1"
                    />

                    <label class="form-check-label" for="inlineCheckbox3">
                      <i class="bi-phone form-check-icon"></i>
                      <span class="form-check-label-text">Ecommerce</span>
                    </label>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-6">
                  <div class="form-check form-check-inline me-0">
                    <input
                      name="seo"
                      type="checkbox"
                      class="form-check-input"
                      id="inlineCheckbox4"
                      value="1"
                    />

                    <label class="form-check-label" for="inlineCheckbox4">
                      <i class="bi-google form-check-icon"></i>
                      <span class="form-check-label-text">SEO</span>
                    </label>
                  </div>
                </div> */}

                <div class="col-lg-12 col-12">
                  <div class="form-floating">
                    <textarea
                      class="form-control text-secondary"
                      name="message"
                      placeholder="Tell me about the project"
                    ></textarea>

                    <label for="floatingTextarea ">
                      Tell me about the project
                    </label>
                  </div>
                </div>

                <div class="col-lg-3 col-12 ms-auto">
                  <button type="submit" class="form-control">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
