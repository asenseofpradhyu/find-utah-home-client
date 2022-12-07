import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

// Local Imports
import { API_URL } from "../util/constants";
import AuthContext from "../context/auth_context";

function Header() {
  const authCtx = useContext(AuthContext);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [toggleClass, settoggleClass] = useState(false);
  const navigator = useNavigate();
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${authCtx.authToken}`;

  const logoutHandler = () => {
    axios
      .post(`${API_URL}/logout`)
      .then(function (response) {
        authCtx.logout();
        navigator("/");

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("Pass");
  };

  return (
    <header
      id="header"
      className="header-effect-shrink"
      data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 120, 'stickyHeaderContainerHeight': 70}"
    >
      <div className="header-body border-top-0">
        <div className="header-top">
          <div className="container">
            <div className="header-row py-2">
              <div className="header-column justify-content-start">
                <div className="header-row">
                  <nav className="header-nav-top">
                    <ul className="list list-unstyled list-inline mb-0">
                      <li className="list-inline-item me-4 mb-0">
                        <i className="icons icon-phone text-color-secondary text-4 position-relative top-4 me-1"></i>
                        <a
                          href="tel:+1234567890"
                          className="text-default text-hover-secondary font-weight-medium text-decoration-none text-2"
                        >
                          +1234567890
                        </a>
                      </li>
                      <li className="list-inline-item me-4 mb-0 d-none d-lg-inline-block">
                        <i className="icons icon-location-pin text-color-secondary text-4 position-relative top-4 me-1"></i>
                        <a
                          href="#!"
                          className="text-default text-hover-secondary font-weight-medium text-decoration-none text-2"
                        >
                          1234 Utah Street, Los Angeles / LA
                        </a>
                      </li>
                      <li className="list-inline-item me-4 mb-0 d-none d-md-inline-block">
                        <i className="icons icon-envelope text-color-secondary text-4 position-relative top-4 me-1"></i>
                        <a
                          href="mailto:real@estate.com"
                          className="text-default text-hover-secondary font-weight-medium text-decoration-none text-2"
                        >
                          real@estate.com
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-column justify-content-end">
                <div className="header-row">
                  <ul className="list list-unstyled list-inline mb-0">
                    {!authCtx.isLoggedin && (
                      <li className="list-inline-item me-4 mb-0">
                        <Link
                          to="/login"
                          className="text-default text-hover-secondary font-weight-semibold text-decoration-none text-1"
                        >
                          Login
                        </Link>
                      </li>
                    )}
                    {!authCtx.isLoggedin && (
                      <li className="list-inline-item me-0 mb-0">
                        <Link
                          to="/register"
                          className="text-default text-hover-secondary font-weight-semibold text-decoration-none text-1"
                        >
                          Register
                        </Link>
                      </li>
                    )}
                    {authCtx.isLoggedin && (
                      <li className="list-inline-item me-4 mb-0">
                        <Link
                          to="/profile"
                          className="text-default text-hover-secondary font-weight-semibold text-decoration-none text-1"
                        >
                          My Account
                        </Link>
                      </li>
                    )}
                    {authCtx.isLoggedin && (
                      <li className="list-inline-item me-0 mb-0">
                        <button
                          className="text-default text-hover-secondary font-weight-semibold text-decoration-none text-1 border-0 bg-transparent"
                          onClick={logoutHandler}
                        >
                          Logout
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-container container">
          <div className="header-row">
            <div className="header-column">
              <div className="header-row">
                <div className="header-logo">
                  <a href="/">
                    <img
                      alt="Porto"
                      width="123"
                      height="48"
                      data-sticky-width="123"
                      data-sticky-height="48"
                      src="./assets/img/demos/real-estate/logo.png"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="header-column justify-content-end">
              <div className="header-row">
                <div className="header-nav header-nav-links order-2 order-lg-1">
                  <div className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-dropdown-modern header-nav-main-effect-2 header-nav-main-sub-effect-1">
                    <nav className="collapse">
                      <ul className="nav nav-pills" id="mainNav">
                        <li>
                          <NavLink
                            to="/"
                            className={({ isActive }) =>
                              isActive ? "nav-link active" : "nav-link"
                            }
                          >
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/properties"
                            className={({ isActive }) =>
                              isActive ? "nav-link active" : "nav-link"
                            }
                          >
                            Properties
                          </NavLink>
                        </li>
                        <li
                          className={
                            isTabletOrMobile && toggleClass
                              ? "dropdown dropdown-reverse open"
                              : isTabletOrMobile === true
                              ? "dropdown dropdown-reverse"
                              : "dropdown"
                          }
                          onClick={() => settoggleClass(!toggleClass)}
                        >
                          <a className="nav-link dropdown-toggle" href="#!">
                            About
                            {isTabletOrMobile && (
                              <i className="fas fa-chevron-down"></i>
                            )}
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="demo-real-estate-agents.html"
                              >
                                Agents
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="demo-real-estate-who-we-are.html"
                              >
                                Who We Are
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                              isActive ? "nav-link active" : "nav-link"
                            }
                          >
                            Contact
                          </NavLink>
                        </li>
                        <li>
                          <a className="nav-link" href="elements.html">
                            Elements
                          </a>
                        </li>
                        <li
                          className="dropdown dropdown-mega"
                          id="headerSearchProperties"
                        >
                          <a className="nav-link dropdown-toggle" href="#">
                            <i className="fas fa-search me-2"></i> Search
                          </a>
                          <ul className="dropdown-menu custom-fullwidth-dropdown-menu ms-0">
                            <li>
                              <div className="dropdown-mega-content mt-3 mt-lg-0">
                                <form
                                  className="form-style-3"
                                  id="propertiesFormHeader"
                                  action="demo-real-estate-properties.html"
                                  method="POST"
                                >
                                  <div className="container p-0">
                                    <div className="row">
                                      <div className="col-lg-2 mb-2 mb-lg-0">
                                        <select
                                          className="form-select form-control text-default box-shadow-none"
                                          name="propertiesPropertyType"
                                          data-msg-required="This field is required."
                                          id="propertiesPropertyType"
                                          required
                                        >
                                          <option value="">
                                            Property Type
                                          </option>
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
                                          <option value="150000">
                                            $150,000
                                          </option>
                                          <option value="200000">
                                            $200,000
                                          </option>
                                          <option value="250000">
                                            $250,000
                                          </option>
                                          <option value="300000">
                                            $300,000
                                          </option>
                                          <option value="350000">
                                            $350,000
                                          </option>
                                          <option value="400000">
                                            $400,000
                                          </option>
                                          <option value="450000">
                                            $450,000
                                          </option>
                                          <option value="500000">
                                            $500,000
                                          </option>
                                          <option value="550000">
                                            $550,000
                                          </option>
                                          <option value="600000">
                                            $600,000
                                          </option>
                                          <option value="650000">
                                            $650,000
                                          </option>
                                          <option value="700000">
                                            $700,000
                                          </option>
                                          <option value="750000">
                                            $750,000
                                          </option>
                                          <option value="800000">
                                            $800,000
                                          </option>
                                          <option value="850000">
                                            $850,000
                                          </option>
                                          <option value="900000">
                                            $900,000
                                          </option>
                                          <option value="950000">
                                            $950,000
                                          </option>
                                          <option value="1000000">
                                            $1,000,000
                                          </option>
                                          <option value="1250000">
                                            $1,250,000
                                          </option>
                                          <option value="1500000">
                                            $1,500,000
                                          </option>
                                          <option value="1750000">
                                            $1,750,000
                                          </option>
                                          <option value="2000000">
                                            $2,000,000
                                          </option>
                                          <option value="2250000">
                                            $2,250,000
                                          </option>
                                          <option value="2500000">
                                            $2,500,000
                                          </option>
                                          <option value="2750000">
                                            $2,750,000
                                          </option>
                                          <option value="3000000">
                                            $3,000,000
                                          </option>
                                          <option value="3250000">
                                            $3,250,000
                                          </option>
                                          <option value="3500000">
                                            $3,500,000
                                          </option>
                                          <option value="3750000">
                                            $3,750,000
                                          </option>
                                          <option value="4000000">
                                            $4,000,000
                                          </option>
                                          <option value="4250000">
                                            $4,250,000
                                          </option>
                                          <option value="4500000">
                                            $4,500,000
                                          </option>
                                          <option value="4750000">
                                            $4,750,000
                                          </option>
                                          <option value="5000000">
                                            $5,000,000
                                          </option>
                                          <option value="6000000">
                                            $6,000,000
                                          </option>
                                          <option value="7000000">
                                            $7,000,000
                                          </option>
                                          <option value="8000000">
                                            $8,000,000
                                          </option>
                                          <option value="9000000">
                                            $9,000,000
                                          </option>
                                          <option value="10000000">
                                            $10,000,000
                                          </option>
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
                                          <option value="150000">
                                            $150,000
                                          </option>
                                          <option value="200000">
                                            $200,000
                                          </option>
                                          <option value="250000">
                                            $250,000
                                          </option>
                                          <option value="300000">
                                            $300,000
                                          </option>
                                          <option value="350000">
                                            $350,000
                                          </option>
                                          <option value="400000">
                                            $400,000
                                          </option>
                                          <option value="450000">
                                            $450,000
                                          </option>
                                          <option value="500000">
                                            $500,000
                                          </option>
                                          <option value="550000">
                                            $550,000
                                          </option>
                                          <option value="600000">
                                            $600,000
                                          </option>
                                          <option value="650000">
                                            $650,000
                                          </option>
                                          <option value="700000">
                                            $700,000
                                          </option>
                                          <option value="750000">
                                            $750,000
                                          </option>
                                          <option value="800000">
                                            $800,000
                                          </option>
                                          <option value="850000">
                                            $850,000
                                          </option>
                                          <option value="900000">
                                            $900,000
                                          </option>
                                          <option value="950000">
                                            $950,000
                                          </option>
                                          <option value="1000000">
                                            $1,000,000
                                          </option>
                                          <option value="1250000">
                                            $1,250,000
                                          </option>
                                          <option value="1500000">
                                            $1,500,000
                                          </option>
                                          <option value="1750000">
                                            $1,750,000
                                          </option>
                                          <option value="2000000">
                                            $2,000,000
                                          </option>
                                          <option value="2250000">
                                            $2,250,000
                                          </option>
                                          <option value="2500000">
                                            $2,500,000
                                          </option>
                                          <option value="2750000">
                                            $2,750,000
                                          </option>
                                          <option value="3000000">
                                            $3,000,000
                                          </option>
                                          <option value="3250000">
                                            $3,250,000
                                          </option>
                                          <option value="3500000">
                                            $3,500,000
                                          </option>
                                          <option value="3750000">
                                            $3,750,000
                                          </option>
                                          <option value="4000000">
                                            $4,000,000
                                          </option>
                                          <option value="4250000">
                                            $4,250,000
                                          </option>
                                          <option value="4500000">
                                            $4,500,000
                                          </option>
                                          <option value="4750000">
                                            $4,750,000
                                          </option>
                                          <option value="5000000">
                                            $5,000,000
                                          </option>
                                          <option value="6000000">
                                            $6,000,000
                                          </option>
                                          <option value="7000000">
                                            $7,000,000
                                          </option>
                                          <option value="8000000">
                                            $8,000,000
                                          </option>
                                          <option value="9000000">
                                            $9,000,000
                                          </option>
                                          <option value="10000000">
                                            $10,000,000
                                          </option>
                                        </select>
                                      </div>
                                      <div className="col-lg-2 mb-2 mb-lg-0">
                                        <div className="d-grid gap-2">
                                          <input
                                            type="submit"
                                            value="Search Now"
                                            className="btn btn-secondary font-weight-semibold border-0 p-relative bottom-3 text-1 text-uppercase mt-1 btn-px-4 btn-py-2"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <button
                    className="btn header-btn-collapse-nav"
                    data-bs-toggle="collapse"
                    data-bs-target=".header-nav-main nav"
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
                <div className="header-nav-features header-nav-features-no-border header-nav-features-lg-show-border order-1 order-lg-2">
                  <div className="header-nav-feature header-nav-features-search d-inline-flex">
                    <ul className="header-social-icons social-icons social-icons-lg d-none d-sm-block social-icons-clean ms-0">
                      <li className="social-icons-facebook">
                        <a
                          href="http://www.facebook.com/"
                          target="_blank"
                          title="Facebook"
                        >
                          <i className="text-4 fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="social-icons-twitter">
                        <a
                          href="http://www.twitter.com/"
                          target="_blank"
                          title="Twitter"
                        >
                          <i className="text-4 fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="social-icons-instagram">
                        <a
                          href="http://www.instagram.com/"
                          target="_blank"
                          title="Instagram"
                        >
                          <i className="text-4 fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
