import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/style.css";
import "../css/bootstrap.min.css";
import "../css/bootstrap-icons.css";
import toast from "react-hot-toast";
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
          toast.success("Thanks for your message.I will reach you soon :D");
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact section-padding " id="section_5">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <h2 className="text-white ms-4 mb-0">Say Hi</h2>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="col-lg-3 col-md-6 col-12 pe-lg-0 ">
            <div className="contact-info contact-info-border-start d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">
                Services
              </strong>

              <ul className="footer-menu">
                <li className="footer-menu-item">
                  <span href="#" className="footer-menu-link">
                    Websites
                  </span>
                </li>

                <li className="footer-menu-item">
                  <span href="#" className="footer-menu-link">
                    Ecommerce
                  </span>
                </li>
              </ul>

              <strong className="site-footer-title d-block mt-4 mb-3">
                Stay connected
              </strong>

              <ul className="social-icon">
                <li className="social-icon-item">
                  <span href="" className="social-icon-link bi-twitter"></span>
                </li>

                <li className="social-icon-item">
                  <span
                    href="#"
                    className="social-icon-link bi-instagram"
                  ></span>
                </li>

                <li className="social-icon-item">
                  <span
                    href="#"
                    className="social-icon-link bi-pinterest"
                  ></span>
                </li>

                <li className="social-icon-item">
                  <span href="" className="social-icon-link bi-youtube"></span>
                </li>
              </ul>

              <strong className="site-footer-title d-block mt-4 mb-3">
                Start a project
              </strong>

              <p className="mb-0">I’m available for freelance projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
            <div className="contact-info d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">About</strong>

              <p className="mb-2">Feel free to get in touch with me.</p>

              <strong className="site-footer-title d-block mt-4 mb-3">
                Email
              </strong>

              <p>
                <span href="">turjodevwork@gmail.com</span>
              </p>

              <strong className="site-footer-title d-block mt-4 mb-3">
                Call
              </strong>

              <p className="mb-0">
                <span href="">+880-18-711-65-360</span>
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12 mt-5 mt-lg-0">
            <form
              action="#"
              method="get"
              className="custom-form contact-form text-white"
              role="form"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="user_name"
                      id="name"
                      className="form-control text-secondary"
                      placeholder="Name"
                      required=""
                    />

                    <label for="floatingInput">Name</label>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control text-secondary"
                      placeholder="Email address"
                      required=""
                    />

                    <label for="floatingInput">Email address</label>
                  </div>
                </div>

                {/* <div className="col-lg-3 col-md-6 col-6">
                  <div className="form-check form-check-inline">
                    <input
                      name="website"
                      type="checkbox"
                      className="form-check-input"
                      id="inlineCheckbox1"
                      value="1"
                    />

                    <label className="form-check-label" for="inlineCheckbox1">
                      <i className="bi-globe form-check-icon"></i>
                      <span className="form-check-label-text">Websites</span>
                    </label>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-6">
                  <div className="form-check form-check-inline">
                    <input
                      name="branding"
                      type="checkbox"
                      className="form-check-input"
                      id="inlineCheckbox2"
                      value="1"
                    />

                    <label className="form-check-label" for="inlineCheckbox2">
                      <i className="bi-lightbulb form-check-icon"></i>
                      <span className="form-check-label-text">Design</span>
                    </label>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-6">
                  <div className="form-check form-check-inline">
                    <input
                      name="ecommerce"
                      type="checkbox"
                      className="form-check-input"
                      id="inlineCheckbox3"
                      value="1"
                    />

                    <label className="form-check-label" for="inlineCheckbox3">
                      <i className="bi-phone form-check-icon"></i>
                      <span className="form-check-label-text">Ecommerce</span>
                    </label>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-6">
                  <div className="form-check form-check-inline me-0">
                    <input
                      name="seo"
                      type="checkbox"
                      className="form-check-input"
                      id="inlineCheckbox4"
                      value="1"
                    />

                    <label className="form-check-label" for="inlineCheckbox4">
                      <i className="bi-google form-check-icon"></i>
                      <span className="form-check-label-text">SEO</span>
                    </label>
                  </div>
                </div> */}

                <div className="col-lg-12 col-12">
                  <div className="form-floating text-dark">
                    <textarea
                      className="form-control text-secondary"
                      name="message"
                      placeholder="Tell me about the project"
                    ></textarea>

                    <label for="floatingTextarea ">
                      Tell me about the project
                    </label>
                  </div>
                </div>

                <div className="col-lg-3 col-12 ms-auto">
                  <button type="submit" className="form-control">
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
