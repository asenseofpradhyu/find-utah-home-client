import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, NavLink } from "react-router-dom";

function HomePage() {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
  };

  return (
    <React.Fragment>
      {/* Start */}
      {/* <div
          className="owl-carousel owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-horizontal-center show-dots-hover nav-inside nav-inside-plus nav-dark nav-md nav-font-size-md show-nav-hover mb-0"
          data-plugin-options="{'autoplayTimeout': 8000}"
          data-dynamic-height="['700px','700px','700px','700px','700px']"
          style={{ height: 700 }}
        > */}
      {/* asd */}
      <OwlCarousel className="owl-theme" {...options} style={{ height: 700 }}>
        <div
          className="item position-relative"
          style={{
            backgroundImage:
              "url(" +
              "./assets/img/demos/real-estate/slider/slide-1.jpg" +
              ")",
            backgroundColor: "#F4F4F4",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 700,
          }}
        >
          <div className="container position-relative z-index-1 h-100">
            <div className="d-flex flex-column justify-content-center h-100">
              <div className="card custom-card-info custom-card-info-shadow custom-card-info-slider bg-color-light border-0 box-shadow-1">
                <div className="card-body overflow-hidden p-relative z-index-1">
                  <span className="featured-tag bg-color-tertiary">
                    Featured
                  </span>
                  <div className="custom-card-info-header">
                    <strong className="text-dark text-5">$ 1.250.000</strong>
                  </div>
                  <div className="custom-card-info-content">
                    <h4 className="text-dark mb-2 text-6">South Miami</h4>
                    <ul className="list list-unstyled list-inline mb-0">
                      <li className="list-inline-item me-4 mb-0">
                        <strong className="text-default text-uppercase text-4">
                          Beds: 3
                        </strong>
                      </li>
                      <li className="list-inline-item me-4 mb-0">
                        <strong className="text-default text-uppercase text-4">
                          Baths: 2
                        </strong>
                      </li>
                      <li className="list-inline-item me-0 mb-0">
                        <strong className="text-default text-uppercase text-4">
                          Sq Ft: 500
                        </strong>
                      </li>
                    </ul>
                    <div className="d-grid gap-2">
                      <NavLink
                        to="/propertydetials"
                        className="d-inline-flex align-items-center btn btn-secondary font-weight-semibold border-0 p-relative text-3 text-uppercase mt-4 btn-px-4 btn-py-3"
                      >
                        View Property
                        <img
                          width="27"
                          height="27"
                          src="./assets/img/demos/real-estate/icons/arrow-right.svg"
                          alt=""
                          className="onlySVG svg-fill-color-light p-absolute right-0 me-4 filter-invert"
                          data-icon
                          data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light p-absolute right-0 me-4'}"
                          style={{ opacity: 1, width: 27 }}
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="item position-relative"
          style={{
            backgroundImage:
              "url(" +
              "./assets/img/demos/real-estate/slider/slide-1.jpg" +
              ")",
            backgroundColor: "#F4F4F4",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 700,
          }}
        >
          <div className="container position-relative z-index-1 h-100">
            <div className="d-flex flex-column justify-content-center h-100">
              <div className="card custom-card-info custom-card-info-shadow custom-card-info-slider bg-color-light border-0 box-shadow-1">
                <div className="card-body overflow-hidden p-relative z-index-1">
                  <span className="featured-tag bg-color-tertiary">
                    Featured
                  </span>
                  <div className="custom-card-info-header">
                    <strong className="text-dark text-5">$ 1.250.000</strong>
                  </div>
                  <div className="custom-card-info-content">
                    <h4 className="text-dark mb-2 text-6">South Miami</h4>
                    <ul className="list list-unstyled list-inline mb-0">
                      <li className="list-inline-item me-4 mb-0">
                        <strong className="text-default text-uppercase text-4">
                          Beds: 3
                        </strong>
                      </li>
                      <li className="list-inline-item me-4 mb-0">
                        <strong className="text-default text-uppercase text-4">
                          Baths: 2
                        </strong>
                      </li>
                      <li className="list-inline-item me-0 mb-0">
                        <strong className="text-default text-uppercase text-4">
                          Sq Ft: 500
                        </strong>
                      </li>
                    </ul>
                    <div className="d-grid gap-2">
                      <NavLink
                        to="/propertydetials"
                        className="d-inline-flex align-items-center btn btn-secondary font-weight-semibold border-0 p-relative text-3 text-uppercase mt-4 btn-px-4 btn-py-3"
                      >
                        View Property
                        <img
                          width="27"
                          height="27"
                          src="./assets/img/demos/real-estate/icons/arrow-right.svg"
                          alt=""
                          className="onlySVG svg-fill-color-light p-absolute right-0 me-4 filter-invert"
                          data-icon
                          data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light p-absolute right-0 me-4'}"
                          style={{ opacity: 1, width: 27 }}
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
              className="item position-relative"
              style={{
                backgroundImage:
                  "url(" +
                  "./assets/img/demos/real-estate/slider/slide-1.jpg" +
                  ")",
                backgroundColor: "#F4F4F4",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container position-relative z-index-1 h-100">
                <div className="d-flex flex-column justify-content-center h-100">
                  <div
                    className="card custom-card-info custom-card-info-shadow custom-card-info-slider bg-color-light border-0 box-shadow-1 appear-animation"
                    data-appear-animation="fadeInRightShorter"
                    data-appear-animation-delay="200"
                  >
                    <div className="card-body overflow-hidden p-relative z-index-1">
                      <span className="featured-tag bg-color-tertiary">
                        Featured
                      </span>
                      <div className="custom-card-info-header">
                        <strong className="text-dark text-5">
                          $ 1.250.000
                        </strong>
                      </div>
                      <div className="custom-card-info-content">
                        <h4 className="text-dark mb-2 text-6">South Miami</h4>
                        <ul className="list list-unstyled list-inline mb-0">
                          <li className="list-inline-item me-4 mb-0">
                            <strong className="text-default text-uppercase text-4">
                              Beds: 3
                            </strong>
                          </li>
                          <li className="list-inline-item me-4 mb-0">
                            <strong className="text-default text-uppercase text-4">
                              Baths: 2
                            </strong>
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <strong className="text-default text-uppercase text-4">
                              Sq Ft: 500
                            </strong>
                          </li>
                        </ul>
                        <div className="d-grid gap-2">
                          <a
                            href="demo-real-estate-properties-detail.html"
                            className="d-inline-flex align-items-center btn btn-secondary font-weight-semibold border-0 p-relative text-3 text-uppercase mt-4 btn-px-4 btn-py-3"
                          >
                            View Property
                            <img
                              width="27"
                              height="27"
                              src="./assets/img/demos/real-estate/icons/arrow-right.svg"
                              alt=""
                              data-icon
                              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light p-absolute right-0 me-4'}"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
      </OwlCarousel>
      {/* asd */}
      {/* </div> */}

      {/* End */}

      {/* Start */}
      <div className="container py-5 my-3">
        <div className="row">
          <div className="col-lg-9">
            <h2 className="mb-4">
              Listing for <span className="text-color-secondary">Sale</span> or{" "}
              <span className="text-color-secondary">Rent</span>
            </h2>

            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 pb-4 mb-1">
                <div className="card custom-card-info custom-card-info-shadow border-0">
                  <div className="card-body overflow-hidden p-relative z-index-1">
                    <NavLink
                      to="/propertydetials"
                      className="text-decoration-none"
                    >
                      <span className="custom-card-info-type bg-primary text-color-light px-3 py-1 text-1 font-weight-semibold text-uppercase d-inline-block p-absolute top-8 left-8">
                        For Sale
                      </span>
                      <span className="custom-card-info-img d-block">
                        <img
                          src="./assets/img/demos/real-estate/listing/listing-2-thumb.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <span className="custom-card-info-header d-block p-relative">
                        <strong className="text-dark text-4">
                          $ 1.250.000
                        </strong>
                        <img
                          width="27"
                          height="27"
                          src="./assets/img/demos/real-estate/icons/arrow-right.svg"
                          alt=""
                          data-icon
                          data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-secondary custom-card-info-arrow p-absolute right-0 top-5 mt-2 me-3'}"
                          className="svg-fill-color-secondary custom-card-info-arrow p-absolute top-5 mt-2 me-3"
                          style={{ opacity: 1, width: 27 }}
                        />
                      </span>
                      <span className="custom-card-info-content d-block">
                        <h4 className="text-dark mb-1 text-5">South Miami</h4>
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
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 pb-4 mb-1">
                <div className="card custom-card-info custom-card-info-shadow border-0">
                  <div className="card-body overflow-hidden p-relative z-index-1">
                    <NavLink
                      to="/propertydetials"
                      className="text-decoration-none"
                    >
                      <span className="custom-card-info-type bg-primary text-color-light px-3 py-1 text-1 font-weight-semibold text-uppercase d-inline-block p-absolute top-8 left-8">
                        For Sale
                      </span>
                      <span className="custom-card-info-img d-block">
                        <img
                          src="./assets/img/demos/real-estate/listing/listing-2-thumb.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <span className="custom-card-info-header d-block p-relative">
                        <strong className="text-dark text-4">
                          $ 1.250.000
                        </strong>
                        <img
                          width="27"
                          height="27"
                          src="./assets/img/demos/real-estate/icons/arrow-right.svg"
                          alt=""
                          data-icon
                          data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-secondary custom-card-info-arrow p-absolute right-0 top-5 mt-2 me-3'}"
                          className="svg-fill-color-secondary custom-card-info-arrow p-absolute top-5 mt-2 me-3"
                          style={{ opacity: 1, width: 27 }}
                        />
                      </span>
                      <span className="custom-card-info-content d-block">
                        <h4 className="text-dark mb-1 text-5">South Miami</h4>
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
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 pb-4 mb-1">
                <div className="card custom-card-info custom-card-info-shadow border-0">
                  <div className="card-body overflow-hidden p-relative z-index-1">
                    <NavLink
                      to="/propertydetials"
                      className="text-decoration-none"
                    >
                      <span className="custom-card-info-type bg-primary text-color-light px-3 py-1 text-1 font-weight-semibold text-uppercase d-inline-block p-absolute top-8 left-8">
                        For Sale
                      </span>
                      <span className="custom-card-info-img d-block">
                        <img
                          src="./assets/img/demos/real-estate/listing/listing-2-thumb.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <span className="custom-card-info-header d-block p-relative">
                        <strong className="text-dark text-4">
                          $ 1.250.000
                        </strong>
                        <img
                          width="27"
                          height="27"
                          src="./assets/img/demos/real-estate/icons/arrow-right.svg"
                          alt=""
                          data-icon
                          data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-secondary custom-card-info-arrow p-absolute right-0 top-5 mt-2 me-3'}"
                          className="svg-fill-color-secondary custom-card-info-arrow p-absolute top-5 mt-2 me-3"
                          style={{ opacity: 1, width: 27 }}
                        />
                      </span>
                      <span className="custom-card-info-content d-block">
                        <h4 className="text-dark mb-1 text-5">South Miami</h4>
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
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 pb-4 mb-1">
                <div className="card custom-card-info custom-card-info-shadow border-0">
                  <div className="card-body overflow-hidden p-relative z-index-1">
                    <NavLink
                      to="/propertydetials"
                      className="text-decoration-none"
                    >
                      <span className="custom-card-info-type bg-primary text-color-light px-3 py-1 text-1 font-weight-semibold text-uppercase d-inline-block p-absolute top-8 left-8">
                        For Sale
                      </span>
                      <span className="custom-card-info-img d-block">
                        <img
                          src="./assets/img/demos/real-estate/listing/listing-2-thumb.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <span className="custom-card-info-header d-block p-relative">
                        <strong className="text-dark text-4">
                          $ 1.250.000
                        </strong>
                        <img
                          width="27"
                          height="27"
                          src="./assets/img/demos/real-estate/icons/arrow-right.svg"
                          alt=""
                          data-icon
                          data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-secondary custom-card-info-arrow p-absolute right-0 top-5 mt-2 me-3'}"
                          className="svg-fill-color-secondary custom-card-info-arrow p-absolute top-5 mt-2 me-3"
                          style={{ opacity: 1, width: 27 }}
                        />
                      </span>
                      <span className="custom-card-info-content d-block">
                        <h4 className="text-dark mb-1 text-5">South Miami</h4>
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
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 pb-4 mb-1">
                <div className="card custom-card-info custom-card-info-shadow border-0">
                  <div className="card-body overflow-hidden p-relative z-index-1">
                    <NavLink
                      to="/propertydetials"
                      className="text-decoration-none"
                    >
                      <span className="custom-card-info-type bg-primary text-color-light px-3 py-1 text-1 font-weight-semibold text-uppercase d-inline-block p-absolute top-8 left-8">
                        For Sale
                      </span>
                      <span className="custom-card-info-img d-block">
                        <img
                          src="./assets/img/demos/real-estate/listing/listing-2-thumb.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <span className="custom-card-info-header d-block p-relative">
                        <strong className="text-dark text-4">
                          $ 1.250.000
                        </strong>
                        <img
                          width="27"
                          height="27"
                          src="./assets/img/demos/real-estate/icons/arrow-right.svg"
                          alt=""
                          data-icon
                          data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-secondary custom-card-info-arrow p-absolute right-0 top-5 mt-2 me-3'}"
                          className="svg-fill-color-secondary custom-card-info-arrow p-absolute top-5 mt-2 me-3"
                          style={{ opacity: 1, width: 27 }}
                        />
                      </span>
                      <span className="custom-card-info-content d-block">
                        <h4 className="text-dark mb-1 text-5">South Miami</h4>
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
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 pb-4 mb-1">
                <div className="card custom-card-info custom-card-info-shadow border-0">
                  <div className="card-body overflow-hidden p-relative z-index-1">
                    <NavLink
                      to="/propertydetials"
                      className="text-decoration-none"
                    >
                      <span className="custom-card-info-type bg-primary text-color-light px-3 py-1 text-1 font-weight-semibold text-uppercase d-inline-block p-absolute top-8 left-8">
                        For Sale
                      </span>
                      <span className="custom-card-info-img d-block">
                        <img
                          src="./assets/img/demos/real-estate/listing/listing-2-thumb.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <span className="custom-card-info-header d-block p-relative">
                        <strong className="text-dark text-4">
                          $ 1.250.000
                        </strong>
                        <img
                          width="27"
                          height="27"
                          src="./assets/img/demos/real-estate/icons/arrow-right.svg"
                          alt=""
                          data-icon
                          data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-secondary custom-card-info-arrow p-absolute right-0 top-5 mt-2 me-3'}"
                          className="svg-fill-color-secondary custom-card-info-arrow p-absolute top-5 mt-2 me-3"
                          style={{ opacity: 1, width: 27 }}
                        />
                      </span>
                      <span className="custom-card-info-content d-block">
                        <h4 className="text-dark mb-1 text-5">South Miami</h4>
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
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-md-center pb-2">
              <div className="col-md-4">
                <div className="d-grid gap-2">
                  <Link
                    to="/properties"
                    className="btn btn-secondary font-weight-semibold border-0 p-relative text-3 text-uppercase mt-1 btn-px-5 btn-py-3"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <hr className="my-5" />

            <h2 className="mb-3 pb-1">Exclusive Locations</h2>

            <div className="row">
              <div className="col-md-4 pb-4 mb-1">
                <div className="card custom-card-info custom-card-info-shadow custom-card-info-locations border-0">
                  <div className="card-body overflow-hidden overlay overlay-color-dark overlay-show overlay-op-7 p-relative z-index-1">
                    <a href="#" className="text-decoration-none">
                      <span className="custom-card-info-img d-block">
                        <img
                          src="./assets/img/demos/real-estate/backgrounds/bg-locations-1.jpg"
                          className="img-fluid w-100"
                        />
                        <span className="custom-card-info-desc">
                          <strong className="text-color-light font-weight-semibold text-5 d-block mb-1 text-center">
                            Palm Beach
                          </strong>
                          <span className="custom-card-info-type bg-primary text-color-light px-3 py-1 text-1 font-weight-semibold text-uppercase d-inline-block">
                            91 Properties
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pb-4 mb-1">
                <div className="card custom-card-info custom-card-info-shadow custom-card-info-locations border-0">
                  <div className="card-body overflow-hidden overlay overlay-color-dark overlay-show overlay-op-7 p-relative z-index-1">
                    <a href="#" className="text-decoration-none">
                      <span className="custom-card-info-img d-block">
                        <img
                          src="./assets/img/demos/real-estate/backgrounds/bg-locations-2.jpg"
                          className="img-fluid w-100"
                        />
                        <span className="custom-card-info-desc">
                          <strong className="text-color-light font-weight-semibold text-5 d-block mb-1 text-center">
                            Fischer Island
                          </strong>
                          <span className="custom-card-info-type bg-primary text-color-light px-3 py-1 text-1 font-weight-semibold text-uppercase d-inline-block">
                            211 Properties
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pb-4 mb-1">
                <div className="card custom-card-info custom-card-info-shadow custom-card-info-locations border-0">
                  <div className="card-body overflow-hidden overlay overlay-color-dark overlay-show overlay-op-7 p-relative z-index-1">
                    <a href="#" className="text-decoration-none">
                      <span className="custom-card-info-img d-block">
                        <img
                          src="./assets/img/demos/real-estate/backgrounds/bg-locations-3.jpg"
                          className="img-fluid w-100"
                        />
                        <span className="custom-card-info-desc">
                          <strong className="text-color-light font-weight-semibold text-5 d-block mb-1 text-center">
                            South Miami
                          </strong>
                          <span className="custom-card-info-type bg-primary text-color-light px-3 py-1 text-1 font-weight-semibold text-uppercase d-inline-block">
                            231 Properties
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <h3 className="mt-2">Special Offers</h3>

            <div className="row">
              <div className="col-12 col-sm-6 col-lg-12">
                <div className="card custom-card-info custom-card-info-shadow custom-card-info-special-offers border-0 mb-4">
                  <div className="card-body overflow-hidden overlay overlay-color-dark overlay-show overlay-op-8 p-relative z-index-1">
                    <span className="custom-card-info-img d-block">
                      <img
                        src="./assets/img/demos/real-estate/backgrounds/bg-special-offers-1.jpg"
                        className="img-fluid w-100"
                      />
                      <span className="custom-card-info-desc">
                        <h3 className="text-color-light font-weight-semibold text-5 d-block mb-1 text-center">
                          Amazing Houses
                          <br />
                          Collection
                        </h3>
                        <strong className="text-color-light font-weight-medium text-uppercase text-3 d-block mb-1 text-center">
                          FROM $100.000
                        </strong>
                        <a
                          href="#"
                          className="btn btn-secondary font-weight-semibold border-0 p-relative text-2 text-uppercase mt-1 btn-px-4 btn-py-2"
                        >
                          View More
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-12">
                <div className="card custom-card-info custom-card-info-shadow custom-card-info-special-offers border-0 mb-4">
                  <div className="card-body overflow-hidden overlay overlay-color-dark overlay-show overlay-op-8 p-relative z-index-1">
                    <span className="custom-card-info-img d-block">
                      <img
                        src="./assets/img/demos/real-estate/backgrounds/bg-special-offers-2.jpg"
                        className="img-fluid w-100"
                      />
                      <div className="p-absolute top-10 left-10 p-4 z-index-2">
                        <h3 className="text-color-light font-weight-semibold text-5 d-block mb-1">
                          Exclusive
                          <br />
                          Condominium
                        </h3>
                        <strong className="text-color-light font-weight-medium text-uppercase text-3 d-block mb-1">
                          Miami Beach
                        </strong>
                      </div>
                      <div className="p-absolute bottom-10 left-10 p-4 z-index-2">
                        <a
                          href="#"
                          className="btn btn-secondary font-weight-semibold border-0 p-relative text-2 text-uppercase mt-1 btn-px-4 btn-py-2"
                        >
                          View More
                        </a>
                      </div>
                    </span>
                  </div>
                </div>
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
                <div className="card custom-card-info bg-color-quaternary border-0 mb-4">
                  <div className="card-body bg-transparent p-relative p-4 m-2 z-index-1">
                    <h3 className="text-color-dark font-weight-semibold text-5 d-block mt-1 mb-2">
                      Newsletter
                    </h3>

                    <p>
                      Subscribe and be the first to know about our best offers
                    </p>

                    <div
                      className="alert alert-success d-none"
                      id="newsletterSuccess"
                    >
                      <strong>Success!</strong> You've been added to our email
                      list.
                    </div>

                    <div
                      className="alert alert-danger d-none"
                      id="newsletterError"
                    ></div>

                    <form
                      id="newsletterForm"
                      className="form-style-3"
                      action="php/newsletter-subscribe.php"
                      method="POST"
                    >
                      <input
                        className="form-control bg-color-light box-shadow-none border-0 mb-2"
                        placeholder="Your Name *"
                        name="newsletterName"
                        id="newsletterName"
                        type="text"
                      />
                      <input
                        className="form-control bg-color-light box-shadow-none border-0 mb-2"
                        placeholder="Your Email Address *"
                        name="newsletterEmail"
                        id="newsletterEmail"
                        type="email"
                      />
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-secondary font-weight-semibold border-0 p-relative text-2 text-uppercase mt-1 btn-px-4 btn-py-2 mb-2"
                          type="submit"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End */}
    </React.Fragment>
  );
}

export default HomePage;
