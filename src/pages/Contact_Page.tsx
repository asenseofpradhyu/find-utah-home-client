import React, { useState } from "react";
import validator from "validator";
import axios from "axios";

// Local Imports
import { API_URL } from "../util/constants";

function ContactPage() {
  const [sendContactData, setsendContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    isValid: true,
    isSubmitting: false,
    isContactMsg: false,
  });

  const sendContactQuery = (event: any) => {
    event.preventDefault();
    console.log("Send Message Clicked !!");
    console.log(sendContactData);

    if (
      !validator.isEmpty(sendContactData.firstName) &&
      !validator.isEmpty(sendContactData.lastName) &&
      validator.isEmail(sendContactData.email) &&
      validator.isLength(sendContactData.phone, { min: 10, max: 10 }) &&
      !validator.isEmpty(sendContactData.message)
    ) {
      setsendContactData({
        ...sendContactData,
        isSubmitting: true,
        isValid: true,
      });
      axios
        .post(`${API_URL}/save_contact_info`, {
          email: sendContactData.email,
          first_name: sendContactData.firstName,
          last_name: sendContactData.lastName,
          message: sendContactData.message,
          phone: sendContactData.phone,
        })
        .then(function (response) {
          setsendContactData({
            ...sendContactData,
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            isSubmitting: false,
            isContactMsg: true,
          });
          console.log(response);
        })
        .catch(function (error) {
          setsendContactData({
            ...sendContactData,
            isSubmitting: false,
            isValid: false,
          });
          console.log(error);
        });
      console.log("Pass");
    } else {
      console.log("Fail");
      setsendContactData({
        ...sendContactData,
        isSubmitting: false,
        isValid: false,
      });
    }
  };

  return (
    <React.Fragment>
      <section className="page-header page-header-modern bg-color-primary border-0 m-0">
        <div className="container position-relative z-index-2">
          <div className="row text-center text-md-start py-5">
            <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
              <h1 className="font-weight-bold text-color-light text-8 mb-0">
                Contact
              </h1>
              <p className="text-color-light opacity-7 mb-0"></p>
            </div>
            <div className="col-md-4 order-1 order-md-2 align-self-center">
              <ul className="breadcrumb breadcrumb-light d-block text-md-end text-4 mb-0">
                <li>
                  <a href="/" className="text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="text-upeercase active">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5 my-3">
        <div className="row">
          <div className="col-lg-9">
            <div className="card custom-card-info bg-color-quaternary border-0 mb-4">
              <div className="card-body bg-transparent p-relative p-4 m-2 z-index-1">
                <h3 className="text-color-dark font-weight-semibold text-5 d-block mt-1 mb-2">
                  Contact Us
                </h3>

                <p>We help you choose your property and any other question.</p>
                <form
                  action="/"
                  id="contactUsForm"
                  className="contact-form form-style-3"
                >
                  {sendContactData.isContactMsg && (
                    <div className="contact-form-success alert alert-success mt-4">
                      <strong>Success!</strong> Your message has been sent to
                      us. We will connect with you very soon.
                    </div>
                  )}

                  {/* {sendContactData.isValid && (
                    <div className="contact-form-error alert alert-danger d-none mt-4">
                      <strong>Error!</strong> Please Fill correct Inputs
                      <span className="mail-error-message text-1 d-block"></span>
                    </div>
                  )} */}

                  {!sendContactData.isValid && (
                    <div className="contact-form-error alert alert-danger mt-4">
                      <strong>Error!</strong> Please Fill correct Inputs
                      <span className="mail-error-message text-1 d-block"></span>
                    </div>
                  )}

                  <div className="row">
                    <div className="form-group col-lg-6 mb-2">
                      <input
                        type="text"
                        className="form-control bg-color-light box-shadow-none border-0"
                        name="firstname"
                        id="firstname"
                        required
                        placeholder="FirstName"
                        value={sendContactData.firstName}
                        onChange={(e) =>
                          setsendContactData({
                            ...sendContactData,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group col-lg-6 mb-2">
                      <input
                        type="text"
                        className="form-control bg-color-light box-shadow-none border-0"
                        name="lastname"
                        id="lastname"
                        required
                        placeholder="LastName"
                        value={sendContactData.lastName}
                        onChange={(e) =>
                          setsendContactData({
                            ...sendContactData,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group col-lg-6 mb-2">
                      <input
                        type="email"
                        className="form-control bg-color-light box-shadow-none border-0"
                        name="email"
                        id="email"
                        required
                        placeholder="Email"
                        value={sendContactData.email}
                        onChange={(e) =>
                          setsendContactData({
                            ...sendContactData,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group col-lg-6 mb-2">
                      <input
                        type="text"
                        maxLength={10}
                        className="form-control orm-control-lg bg-color-light box-shadow-none border-0"
                        name="phone"
                        id="phone"
                        required
                        placeholder="Phone"
                        value={sendContactData.phone}
                        onChange={(e) =>
                          setsendContactData({
                            ...sendContactData,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-2">
                      <textarea
                        maxLength={5000}
                        rows={13}
                        className="form-control bg-color-light box-shadow-none border-0"
                        name="message"
                        id="message"
                        required
                        placeholder="Your Message *"
                        value={sendContactData.message}
                        onChange={(e) =>
                          setsendContactData({
                            ...sendContactData,
                            message: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-0">
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-secondary font-weight-semibold border-0 p-relative text-2 text-uppercase mt-1 btn-px-4 btn-py-2 mb-2"
                          type="submit"
                          onClick={sendContactQuery}
                          disabled={sendContactData.isSubmitting}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <hr className="solid my-5" />

            <div id="map">
              <h3 className="mt-5 mb-3">Location</h3>
              <div className="border-radius overflow-hidden mt-0 mb-4">
                <div id="googlemaps" className="google-map m-0"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-12">
                <h3 className="mt-2 mb-1 font-weight-semibold text-5">
                  Address
                </h3>
                <ul className="list-unstyled mt-0 mb-4">
                  <li>12345 Porto Blvd.</li>
                  <li>Suite 1500</li>
                  <li>Los Angeles, California 90000</li>
                </ul>

                <h3 className="mt-2 mb-1 font-weight-semibold text-5">Email</h3>
                <ul className="list-unstyled mt-0 mb-4">
                  <li>
                    <a href="mailto:porto@portotheme.com">
                      porto@portotheme.com
                    </a>
                  </li>
                </ul>

                <h3 className="mt-2 mb-1 font-weight-semibold text-5">Phone</h3>
                <ul className="list-unstyled mt-0 mb-4">
                  <li>
                    <a href="tel:1234567">(800) 123-4567</a>
                  </li>
                </ul>

                <h3 className="mt-2 mb-1 font-weight-semibold text-5">
                  Careers & Press
                </h3>
                <ul className="list-unstyled mt-0 mb-4">
                  <li>
                    <a href="tel:1234567">(800) 123-4567</a>
                  </li>
                </ul>

                <h3 className="mt-2 mb-1 font-weight-semibold text-5">
                  Follow Us
                </h3>
                <ul className="social-icons social-icons-clean social-icons-icon-dark social-icons-medium mt-3 mb-4">
                  <li className="social-icons-facebook">
                    <a
                      href="http://www.facebook.com/"
                      target="_blank"
                      title="Facebook"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="social-icons-twitter">
                    <a
                      href="http://www.twitter.com/"
                      target="_blank"
                      title="Twitter"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="social-icons-linkedin">
                    <a
                      href="http://www.linkedin.com/"
                      target="_blank"
                      title="Linkedin"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-6 col-lg-12">
                <div className="card custom-card-info custom-card-info-shadow bg-color-primary text-color-light border-0 mb-4">
                  <div className="card-body bg-transparent p-relative p-4 my-2 text-center z-index-1">
                    <h3 className="text-color-light font-weight-semibold text-5 d-block mb-4">
                      Our Agents
                    </h3>

                    <div
                      className="owl-carousel owl-theme dots-light mb-0 pb-0"
                      data-plugin-options="{'items': 1, 'autoplay': true, 'autoplayTimeout': 5000, 'margin': 10}"
                    >
                      <div>
                        <a
                          href="demo-real-estate-agents-detail.html"
                          className="text-decoration-none"
                        >
                          <img
                            alt=""
                            className="img-fluid rounded-circle m-auto"
                            src="img/team/team-5.jpg"
                            style={{ maxWidth: 110 }}
                          />
                          <strong className="text-color-light font-weight-semibold text-4 line-height-5 d-block mt-3 mb-1 text-center">
                            John Doe
                          </strong>
                        </a>
                        <a
                          className="opacity-7 text-color-light d-block text-center line-height-5 text-3"
                          href="tel:12345678"
                        >
                          (800) 123-4567
                        </a>
                        <a
                          className="opacity-7 text-color-light d-block text-center line-height-5 text-3 pb-2"
                          href="mailto:you@domain.com"
                        >
                          you@domain.com
                        </a>
                      </div>
                      <div>
                        <a
                          href="demo-real-estate-agents-detail.html"
                          className="text-decoration-none"
                        >
                          <img
                            alt=""
                            className="img-fluid rounded-circle m-auto"
                            src="img/team/team-4.jpg"
                            style={{ maxWidth: 110 }}
                          />
                          <strong className="text-color-light font-weight-semibold text-4 line-height-5 d-block mt-3 mb-1 text-center">
                            Janice Doe
                          </strong>
                        </a>
                        <a
                          className="opacity-7 text-color-light d-block text-center line-height-5 text-3"
                          href="tel:12345678"
                        >
                          (800) 123-4567
                        </a>
                        <a
                          className="opacity-7 text-color-light d-block text-center line-height-5 text-3 pb-2"
                          href="mailto:you@domain.com"
                        >
                          you@domain.com
                        </a>
                      </div>
                      <div>
                        <a
                          href="demo-real-estate-agents-detail.html"
                          className="text-decoration-none"
                        >
                          <img
                            alt=""
                            className="img-fluid rounded-circle m-auto"
                            src="img/team/team-2.jpg"
                            style={{ maxWidth: 110 }}
                          />
                          <strong className="text-color-light font-weight-semibold text-4 line-height-5 d-block mt-3 mb-1 text-center">
                            Lisa Doe
                          </strong>
                        </a>
                        <a
                          className="opacity-7 text-color-light d-block text-center line-height-5 text-3"
                          href="tel:12345678"
                        >
                          (800) 123-4567
                        </a>
                        <a
                          className="opacity-7 text-color-light d-block text-center line-height-5 text-3 pb-2"
                          href="mailto:you@domain.com"
                        >
                          you@domain.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-12">
                <h3 className="mt-2 mb-3 font-weight-semibold text-5">
                  Featured Properties
                </h3>
                <div
                  className="owl-carousel owl-theme mb-0 pb-4"
                  data-plugin-options="{'items': 1, 'autoplay': true, 'autoplayTimeout': 5000, 'margin': 10}"
                >
                  <div>
                    <div className="card custom-card-info border-0">
                      <div className="card-body overflow-hidden p-relative z-index-1">
                        <a href="#!" className="text-decoration-none">
                          <span className="custom-card-info-type bg-primary text-color-light px-3 py-1 text-1 font-weight-semibold text-uppercase d-inline-block p-absolute top-8 left-8">
                            For Sale
                          </span>
                          <span className="custom-card-info-img d-block">
                            <img
                              src="./assets/img/demos/real-estate/listing/listing-1-thumb.jpg"
                              className="img-fluid"
                            />
                          </span>
                          <span className="custom-card-info-header d-block p-relative">
                            <strong className="text-dark text-4">
                              $ 1.250.000
                            </strong>
                          </span>
                          <span className="custom-card-info-content d-block">
                            <h4 className="text-dark mb-1 text-5">
                              South Miami
                            </h4>
                            <ul className="list list-unstyled list-inline mb-0">
                              <li className="list-inline-item me-2 mb-0">
                                <strong className="text-default text-uppercase text-3">
                                  Beds: 3
                                </strong>
                              </li>
                              <li className="list-inline-item me-2 mb-0">
                                <strong className="text-default text-uppercase text-3">
                                  Baths: 2
                                </strong>
                              </li>
                              <li className="list-inline-item me-0 mb-0">
                                <strong className="text-default text-uppercase text-3">
                                  Sq Ft: 500
                                </strong>
                              </li>
                            </ul>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card custom-card-info border-0">
                      <div className="card-body overflow-hidden p-relative z-index-1">
                        <a href="#!" className="text-decoration-none">
                          <span className="custom-card-info-type bg-primary text-color-light px-3 py-1 text-1 font-weight-semibold text-uppercase d-inline-block p-absolute top-8 left-8">
                            For Sale
                          </span>
                          <span className="custom-card-info-img d-block">
                            <img
                              src="./assets/img/demos/real-estate/listing/listing-1-thumb.jpg"
                              className="img-fluid"
                            />
                          </span>
                          <span className="custom-card-info-header d-block p-relative">
                            <strong className="text-dark text-4">
                              $ 1.250.000
                            </strong>
                          </span>
                          <span className="custom-card-info-content d-block">
                            <h4 className="text-dark mb-1 text-5">
                              South Miami
                            </h4>
                            <ul className="list list-unstyled list-inline mb-0">
                              <li className="list-inline-item me-2 mb-0">
                                <strong className="text-default text-uppercase text-3">
                                  Beds: 3
                                </strong>
                              </li>
                              <li className="list-inline-item me-2 mb-0">
                                <strong className="text-default text-uppercase text-3">
                                  Baths: 2
                                </strong>
                              </li>
                              <li className="list-inline-item me-0 mb-0">
                                <strong className="text-default text-uppercase text-3">
                                  Sq Ft: 500
                                </strong>
                              </li>
                            </ul>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card custom-card-info border-0">
                      <div className="card-body overflow-hidden p-relative z-index-1">
                        <a href="#!" className="text-decoration-none">
                          <span className="custom-card-info-type bg-primary text-color-light px-3 py-1 text-1 font-weight-semibold text-uppercase d-inline-block p-absolute top-8 left-8">
                            For Sale
                          </span>
                          <span className="custom-card-info-img d-block">
                            <img
                              src="./assets/img/demos/real-estate/listing/listing-1-thumb.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                          </span>
                          <span className="custom-card-info-header d-block p-relative">
                            <strong className="text-dark text-4">
                              $ 1.250.000
                            </strong>
                          </span>
                          <span className="custom-card-info-content d-block">
                            <h4 className="text-dark mb-1 text-5">
                              South Miami
                            </h4>
                            <ul className="list list-unstyled list-inline mb-0">
                              <li className="list-inline-item me-2 mb-0">
                                <strong className="text-default text-uppercase text-3">
                                  Beds: 3
                                </strong>
                              </li>
                              <li className="list-inline-item me-2 mb-0">
                                <strong className="text-default text-uppercase text-3">
                                  Baths: 2
                                </strong>
                              </li>
                              <li className="list-inline-item me-0 mb-0">
                                <strong className="text-default text-uppercase text-3">
                                  Sq Ft: 500
                                </strong>
                              </li>
                            </ul>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactPage;
