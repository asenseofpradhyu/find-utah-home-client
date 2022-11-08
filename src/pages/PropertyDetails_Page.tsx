import React from "react";
import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

// Local Imports

function PropertyDetailsPage() {
  const images = [
    {
      original: "./assets/img/demos/real-estate/listing/listing-detail-1.jpg",
      thumbnail:
        "./assets/img/demos/real-estate/listing/listing-detail-4-thumb.jpg",
    },
    {
      original: "./assets/img/demos/real-estate/listing/listing-detail-1.jpg",
      thumbnail:
        "./assets/img/demos/real-estate/listing/listing-detail-4-thumb.jpg",
    },
    {
      original: "./assets/img/demos/real-estate/listing/listing-detail-1.jpg",
      thumbnail:
        "./assets/img/demos/real-estate/listing/listing-detail-4-thumb.jpg",
    },
  ];
  return (
    <>
      <React.Fragment>
        <section className="page-header page-header-modern bg-color-primary border-0 m-0">
          <div className="container position-relative z-index-2">
            <div className="row text-center text-md-start py-5">
              <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                <h1 className="font-weight-bold text-color-light text-8 mb-0">
                  1234 SW 63rd Ave
                </h1>
                <p className="text-color-light opacity-7 mb-0">South Miami</p>
              </div>
              <div className="col-md-4 order-1 order-md-2 align-self-center">
                <ul className="breadcrumb breadcrumb-light d-block text-md-end text-4 mb-0">
                  <li>
                    <a href="/" className="text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="text-upeercase active">Property Detials</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-5 my-3">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-7">
                  <div className="thumb-gallery">
                    <ImageGallery items={images} />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="border-radius overflow-hidden">
                    <table className="table table-striped">
                      <colgroup>
                        <col width="35%" />
                        <col width="65%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <td className="bg-color-secondary text-light align-middle font-weight-semibold">
                            Price
                          </td>
                          <td className="text-4 font-weight-bold align-middle bg-color-secondary text-light">
                            $3,595,000
                          </td>
                        </tr>
                        <tr>
                          <td className="font-weight-semibold">Listing ID</td>
                          <td>#123456</td>
                        </tr>
                        <tr>
                          <td className="font-weight-semibold">Address</td>
                          <td>
                            1234 SW 63rd Ave - South Miami - Florida
                            <br />
                            <a
                              href="#map"
                              className="text-2"
                              data-hash
                              data-hash-offset="0"
                              data-hash-offset-lg="100"
                            >
                              (Map Location)
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-weight-semibold">Neighborhood</td>
                          <td>Porto Village</td>
                        </tr>
                        <tr>
                          <td className="font-weight-semibold">Beds</td>
                          <td>7</td>
                        </tr>
                        <tr>
                          <td className="font-weight-semibold">Baths</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <td className="font-weight-semibold">Garages</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td className="font-weight-semibold">Living Area</td>
                          <td>8,000</td>
                        </tr>
                        <tr>
                          <td className="font-weight-semibold">Lot Size</td>
                          <td>20,000</td>
                        </tr>
                        <tr>
                          <td className="font-weight-semibold">Year Built</td>
                          <td>1999</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h3 className="mt-5 mb-3">Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur pellentesque neque eget diam posuere porta.
                    Quisque ut nulla at nunc <a href="#">vehicula</a> lacinia.
                    Proin adipiscing porta tellus, ut feugiat nibh adipiscing
                    sit amet. In eu justo a felis faucibus ornare vel id metus.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae;
                  </p>

                  <p>
                    Ctrices posuere cubilia Curae; In eu libero ligula. Fusce
                    eget metus lorem, ac feugiat nibh adipiscing sit amet. In eu
                    juiverra leo. Vestibulum ante ipsum primis in faucibus orci.
                  </p>

                  <hr className="solid my-5" />

                  <h3 className="mt-5 mb-3">Features</h3>

                  <ul className="list list-icons list-secondary row m-0">
                    <li className="col-sm-6 col-lg-4">
                      <i className="fas fa-check"></i> Air conditioning{" "}
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        title="+ Central Heating"
                      >
                        <i className="fas fa-info-circle"></i>
                      </a>
                    </li>
                    <li className="col-sm-6 col-lg-4">
                      <i className="fas fa-check"></i> Home Theater
                    </li>
                    <li className="col-sm-6 col-lg-4">
                      <i className="fas fa-check"></i> Central Heating
                    </li>
                    <li className="col-sm-6 col-lg-4">
                      <i className="fas fa-check"></i> Laundry
                    </li>
                    <li className="col-sm-6 col-lg-4">
                      <i className="fas fa-check"></i> Balcony
                    </li>
                    <li className="col-sm-6 col-lg-4 custom-list-item-disabled">
                      <i className="fas fa-check"></i> Storage
                    </li>
                    <li className="col-sm-6 col-lg-4 custom-list-item-disabled">
                      <i className="fas fa-check"></i> Garage
                    </li>
                    <li className="col-sm-6 col-lg-4 custom-list-item-disabled">
                      <i className="fas fa-check"></i> Yard
                    </li>
                    <li className="col-sm-6 col-lg-4">
                      <i className="fas fa-check"></i> Electric Water Heater
                    </li>
                    <li className="col-sm-6 col-lg-4">
                      <i className="fas fa-check"></i> Deck
                    </li>
                    <li className="col-sm-6 col-lg-4">
                      <i className="fas fa-check"></i> Gym
                    </li>
                    <li className="col-sm-6 col-lg-4">
                      <i className="fas fa-check"></i> Ocean View
                    </li>
                  </ul>

                  <hr className="solid my-5" />

                  <div id="map">
                    <h3 className="mt-5 mb-3">Map Location</h3>
                    <div className="border-radius overflow-hidden mt-0 mb-4">
                      <div id="googlemaps" className="google-map m-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row">
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
                              src="./assets/img/team/team-5.jpg"
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
                              src="./assets/img/team/team-4.jpg"
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
                              src="./assets/img/team/team-2.jpg"
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
                    Related Properties
                  </h3>
                  <div
                    className="owl-carousel owl-theme mb-0 pb-4"
                    data-plugin-options="{'items': 1, 'autoplay': true, 'autoplayTimeout': 5000, 'margin': 10}"
                  >
                    <div>
                      <div className="card custom-card-info border-0">
                        <div className="card-body overflow-hidden p-relative z-index-1">
                          <a href="#" className="text-decoration-none">
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
                          <a href="#" className="text-decoration-none">
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
                          <a href="#" className="text-decoration-none">
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
                  </div>
                </div>

                <div className="col-12">
                  <div className="card custom-card-info bg-color-quaternary border-0 mb-4">
                    <div className="card-body bg-transparent p-relative p-4 m-2 z-index-1">
                      <h3 className="text-color-dark font-weight-semibold text-5 d-block mt-1 mb-2">
                        Contact Us
                      </h3>

                      <p>
                        We help you choose your property and any other question.
                      </p>

                      <form
                        className="contact-form form-style-3"
                        action="php/contact-form.php"
                        method="POST"
                      >
                        <div className="contact-form-success alert alert-success d-none mt-4">
                          <strong>Success!</strong> Your message has been sent
                          to us.
                        </div>

                        <div className="contact-form-error alert alert-danger d-none mt-4">
                          <strong>Error!</strong> There was an error sending
                          your message.
                          <span className="mail-error-message text-1 d-block"></span>
                        </div>

                        <div className="row">
                          <div className="form-group mb-2">
                            <input
                              type="text"
                              value=""
                              data-msg-required="Please enter your name."
                              maxLength={100}
                              className="form-control bg-color-light box-shadow-none border-0"
                              name="name"
                              id="name"
                              required
                              placeholder="Name *"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group mb-2">
                            <input
                              type="email"
                              value=""
                              data-msg-required="Please enter your email address."
                              data-msg-email="Please enter a valid email address."
                              maxLength={100}
                              className="form-control bg-color-light box-shadow-none border-0"
                              name="email"
                              id="email"
                              required
                              placeholder="E-mail *"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group mb-2">
                            <input
                              type="text"
                              value=""
                              data-msg-required="Please enter your phone number."
                              maxLength={100}
                              className="form-control bg-color-light box-shadow-none border-0"
                              name="phone"
                              id="phone"
                              required
                              placeholder="Phone *"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group mb-2">
                            <textarea
                              maxLength={5000}
                              data-msg-required="Please enter your message."
                              rows={5}
                              className="form-control bg-color-light box-shadow-none border-0"
                              name="message"
                              id="message"
                              required
                              placeholder="Message *"
                            ></textarea>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group mb-0">
                            <div className="d-grid gap-2">
                              <button
                                className="btn btn-secondary font-weight-semibold border-0 p-relative text-2 text-uppercase mt-1 btn-px-4 btn-py-2 mb-2"
                                type="submit"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section section-height-3 bg-secondary border-0 m-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-9 text-center text-lg-start mb-4 mb-lg-0">
                <h2 className="mb-4 text-color-light mb-0">
                  For{" "}
                  <span className="font-weight-extra-bold">
                    Residential And Commercial{" "}
                  </span>{" "}
                  Properties
                </h2>
                <p className="font-weight-semibold text-color-light text-4 opacity-7 mb-0">
                  Our Staff is trained to find any location you need!
                </p>
              </div>
              <div className="col-lg-3">
                <div className="d-grid gap-2">
                  <a
                    href="demo-real-estate-contact.html"
                    className="btn btn-primary font-weight-semibold border-0 text-3 text-uppercase mt-4 btn-py-3"
                  >
                    Contact Us
                    <img
                      width="27"
                      height="27"
                      src="./assets/img/demos/real-estate/icons/arrow-right.svg"
                      alt=""
                      data-icon
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light d-inline-block p-relative bottom-2 ms-2'}"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    </>
  );
}

export default PropertyDetailsPage;
