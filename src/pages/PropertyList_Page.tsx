import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";

// Local Imports
import { API_URL } from "../util/constants";
import AuthContext from "../context/auth_context";

// Local Imports

function PropertyListPage() {
  const [propertyList, setPropertyList] = useState({});
  // const navigator = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/featured_listing`)
      .then(function (response) {
        // setloginData({
        //   ...loginData,
        //   email: "",
        //   password: "",
        //   isSubmitting: false,
        //   isLogin: true,
        // });
        console.log("UseEffect Render !!");
        setPropertyList(response.data.data);
        console.log(response.data);
        console.log("UseState Render !!");
        console.log(propertyList);
        // Object.entries(propertyList).forEach(([key, value]: any) =>
        //   console.log(key, value.cityName)
        // );
      })
      .catch(function (error) {
        // setloginData({
        //   ...loginData,
        //   isSubmitting: false,
        // });
        console.log(error);
      });
  }, []);

  const getPropertyList = (event: any) => {
    event.preventDefault();
    console.log("ProperyList Append !!");
    console.log(propertyList);

    axios
      .get(`${API_URL}/featured_listing`)
      .then(function (response) {
        // setloginData({
        //   ...loginData,
        //   email: "",
        //   password: "",
        //   isSubmitting: false,
        //   isLogin: true,
        // });
        console.log(response.data);
      })
      .catch(function (error) {
        // setloginData({
        //   ...loginData,
        //   isSubmitting: false,
        // });
        console.log(error);
      });
    console.log("Pass");
  };

  return (
    <React.Fragment>
      <section className="page-header page-header-modern bg-color-primary border-0 m-0">
        <div className="container position-relative z-index-2">
          <div className="row text-center text-md-start py-5">
            <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
              <h1 className="font-weight-bold text-color-light text-8 mb-0">
                Properties
              </h1>
              <p className="text-color-light opacity-7 mb-0">
                Sed consequat euismod diam, eu ultrices nulla ullamcorper ac
              </p>
            </div>
            <div className="col-md-4 order-1 order-md-2 align-self-center">
              <ul className="breadcrumb breadcrumb-light d-block text-md-end text-4 mb-0">
                <li>
                  <a href="/" className="text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="text-upeercase active">Properties</li>
              </ul>
            </div>
          </div>
        </div>

        <form
          className="form-style-3 pb-5"
          id="propertiesForm"
          action="demo-real-estate-properties.html"
          method="POST"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-2 mb-2 mb-lg-0">
                <select
                  className="form-select form-control text-default box-shadow-none"
                  name="propertiesPropertyType"
                  data-msg-required="This field is required."
                  id="propertiesPropertyType"
                  required
                >
                  <option value="">Property Type</option>
                  <option value="1">Apartment</option>
                  <option value="2">House</option>
                </select>
              </div>
              <div className="col-lg-2 mb-2 mb-lg-0">
                <select
                  className="form-select form-control text-default box-shadow-none"
                  name="propertiesLocation"
                  data-msg-required="This field is required."
                  id="propertiesLocation"
                  required
                >
                  <option value="">Location</option>
                  <option value="1">Miami</option>
                  <option value="2">New York</option>
                  <option value="3">Houston</option>
                  <option value="4">Los Angeles</option>
                </select>
              </div>
              <div className="col-lg-2 mb-2 mb-lg-0">
                <select
                  className="form-select form-control text-default box-shadow-none"
                  name="propertiesMinBeds"
                  data-msg-required="This field is required."
                  id="propertiesMinBeds"
                  required
                >
                  <option value="">Min Beds</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="col-lg-2 mb-2 mb-lg-0">
                <select
                  className="form-select form-control text-default box-shadow-none"
                  name="propertiesMinPrice"
                  data-msg-required="This field is required."
                  id="propertiesMinPrice"
                  required
                >
                  <option value="">Min Price</option>
                  <option value="150000">$150,000</option>
                  <option value="200000">$200,000</option>
                  <option value="250000">$250,000</option>
                  <option value="300000">$300,000</option>
                  <option value="350000">$350,000</option>
                  <option value="400000">$400,000</option>
                  <option value="450000">$450,000</option>
                  <option value="500000">$500,000</option>
                  <option value="550000">$550,000</option>
                  <option value="600000">$600,000</option>
                  <option value="650000">$650,000</option>
                  <option value="700000">$700,000</option>
                  <option value="750000">$750,000</option>
                  <option value="800000">$800,000</option>
                  <option value="850000">$850,000</option>
                  <option value="900000">$900,000</option>
                  <option value="950000">$950,000</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="1250000">$1,250,000</option>
                  <option value="1500000">$1,500,000</option>
                  <option value="1750000">$1,750,000</option>
                  <option value="2000000">$2,000,000</option>
                  <option value="2250000">$2,250,000</option>
                  <option value="2500000">$2,500,000</option>
                  <option value="2750000">$2,750,000</option>
                  <option value="3000000">$3,000,000</option>
                  <option value="3250000">$3,250,000</option>
                  <option value="3500000">$3,500,000</option>
                  <option value="3750000">$3,750,000</option>
                  <option value="4000000">$4,000,000</option>
                  <option value="4250000">$4,250,000</option>
                  <option value="4500000">$4,500,000</option>
                  <option value="4750000">$4,750,000</option>
                  <option value="5000000">$5,000,000</option>
                  <option value="6000000">$6,000,000</option>
                  <option value="7000000">$7,000,000</option>
                  <option value="8000000">$8,000,000</option>
                  <option value="9000000">$9,000,000</option>
                  <option value="10000000">$10,000,000</option>
                </select>
              </div>
              <div className="col-lg-2 mb-2 mb-lg-0">
                <select
                  className="form-select form-control text-default box-shadow-none"
                  name="propertiesMaxPrice"
                  data-msg-required="This field is required."
                  id="propertiesMaxPrice"
                  required
                >
                  <option value="">Max Price</option>
                  <option value="150000">$150,000</option>
                  <option value="200000">$200,000</option>
                  <option value="250000">$250,000</option>
                  <option value="300000">$300,000</option>
                  <option value="350000">$350,000</option>
                  <option value="400000">$400,000</option>
                  <option value="450000">$450,000</option>
                  <option value="500000">$500,000</option>
                  <option value="550000">$550,000</option>
                  <option value="600000">$600,000</option>
                  <option value="650000">$650,000</option>
                  <option value="700000">$700,000</option>
                  <option value="750000">$750,000</option>
                  <option value="800000">$800,000</option>
                  <option value="850000">$850,000</option>
                  <option value="900000">$900,000</option>
                  <option value="950000">$950,000</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="1250000">$1,250,000</option>
                  <option value="1500000">$1,500,000</option>
                  <option value="1750000">$1,750,000</option>
                  <option value="2000000">$2,000,000</option>
                  <option value="2250000">$2,250,000</option>
                  <option value="2500000">$2,500,000</option>
                  <option value="2750000">$2,750,000</option>
                  <option value="3000000">$3,000,000</option>
                  <option value="3250000">$3,250,000</option>
                  <option value="3500000">$3,500,000</option>
                  <option value="3750000">$3,750,000</option>
                  <option value="4000000">$4,000,000</option>
                  <option value="4250000">$4,250,000</option>
                  <option value="4500000">$4,500,000</option>
                  <option value="4750000">$4,750,000</option>
                  <option value="5000000">$5,000,000</option>
                  <option value="6000000">$6,000,000</option>
                  <option value="7000000">$7,000,000</option>
                  <option value="8000000">$8,000,000</option>
                  <option value="9000000">$9,000,000</option>
                  <option value="10000000">$10,000,000</option>
                </select>
              </div>
              <div className="col-lg-2 mb-2 mb-lg-0">
                <div className="d-grid gap-2">
                  <input
                    type="submit"
                    value="Search Now"
                    className="btn btn-secondary custom-btn-search-page-header font-weight-semibold border-0 text-1 text-uppercase mt-1 btn-px-4 btn-py-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

      <div className="container py-5 my-3">
        <div className="row">
          <div className="col">
            <h2 className="mb-4">
              Listing for <span className="text-color-secondary">Sale</span> or{" "}
              <span className="text-color-secondary">Rent</span>
            </h2>

            <div className="row">
              <>
                {Object.entries(propertyList).map(([key, value]: any) => {
                  return (
                    <div
                      className="col-12 col-sm-6 col-md-3 pb-4 mb-1"
                      key={value.idxID}
                    >
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
                                src={value.image.url}
                                className="img-fluid"
                                alt="img"
                              />
                            </span>
                            <span className="custom-card-info-header d-block p-relative">
                              <strong className="text-dark text-4">
                                {value.listingPrice}
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
                              <h4 className="text-dark mb-1 text-5">
                                {value.streetName}, {value.state}
                              </h4>
                              <ul className="list list-unstyled list-inline mb-0">
                                <li className="list-inline-item me-2 mb-0">
                                  <strong className="text-default text-uppercase text-2">
                                    Beds: {value.bedrooms}
                                  </strong>
                                </li>
                                <li className="list-inline-item me-2 mb-0">
                                  <strong className="text-default text-uppercase text-2">
                                    Baths: {value.totalBaths}
                                  </strong>
                                </li>
                                <li className="list-inline-item me-0 mb-0">
                                  <strong className="text-default text-uppercase text-2">
                                    Sq Ft: {value.sqFt}
                                  </strong>
                                </li>
                              </ul>
                            </span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>

            <div className="d-flex pt-3">
              <div className="mx-auto">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      <i className="fas fa-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#!">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
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
  );
}

export default PropertyListPage;
