import React from "react";

// Local Imports

function UserProfilePage() {
  return (
    <React.Fragment>
      <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center p-static order-2 text-center">
              <h1 className="font-weight-bold text-dark">User Profile</h1>
            </div>
            <div className="col-md-12 align-self-center order-1">
              <ul className="breadcrumb d-block text-center">
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="active">Pages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container pt-3 pb-2">
        <div className="row pt-2">
          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="d-flex justify-content-center mb-4">
              <div className="profile-image-outer-container">
                <div className="profile-image-inner-container bg-color-primary">
                  <img src="./assets/img/avatars/avatar.jpg" />
                  <span className="profile-image-button bg-color-dark">
                    <i className="fas fa-camera text-light"></i>
                  </span>
                </div>
                <input
                  type="file"
                  id="file"
                  className="form-control profile-image-input"
                />
              </div>
            </div>

            <aside className="sidebar mt-2" id="sidebar">
              <ul className="nav nav-list flex-column mb-5">
                <li className="nav-item">
                  <a className="nav-link text-3 text-dark active" href="#">
                    My Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-3" href="#">
                    User Preferences
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-3" href="#">
                    Billing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-3" href="#">
                    Invoices
                  </a>
                </li>
              </ul>
            </aside>
          </div>
          <div className="col-lg-9">
            <form role="form" className="needs-validation">
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2 required">
                  First name
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="text"
                    name="firstName"
                    value="John"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2 required">
                  Last name
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="text"
                    name="lastName"
                    value="Doe"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2 required">
                  Email
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="email"
                    name="email"
                    value="email@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">
                  Company
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="text"
                    name="company"
                    value=""
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">
                  Website
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="url"
                    name="website"
                    value=""
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">
                  Address
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="text"
                    name="address"
                    value=""
                    placeholder="Street"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2"></label>
                <div className="col-lg-6">
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="text"
                    name="city"
                    value=""
                    placeholder="City"
                  />
                </div>
                <div className="col-lg-3">
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="text"
                    name="state"
                    value=""
                    placeholder="State"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">
                  Time Zone
                </label>
                <div className="col-lg-9">
                  <div className="custom-select-1">
                    <select
                      id="user_time_zone"
                      className="form-control text-3 h-auto py-2"
                      name="timeZone"
                      size={0}
                    >
                      <option value="Hawaii">(GMT-10:00) Hawaii</option>
                      <option value="Alaska">(GMT-09:00) Alaska</option>
                      <option value="Pacific Time (US &amp; Canada)">
                        (GMT-08:00) Pacific Time (US &amp; Canada)
                      </option>
                      <option value="Arizona">(GMT-07:00) Arizona</option>
                      <option value="Mountain Time (US &amp; Canada)">
                        (GMT-07:00) Mountain Time (US &amp; Canada)
                      </option>
                      <option value="Central Time (US &amp; Canada)" selected>
                        (GMT-06:00) Central Time (US &amp; Canada)
                      </option>
                      <option value="Eastern Time (US &amp; Canada)">
                        (GMT-05:00) Eastern Time (US &amp; Canada)
                      </option>
                      <option value="Indiana (East)">
                        (GMT-05:00) Indiana (East)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2 required">
                  Username
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="text"
                    name="username"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2 required">
                  Password
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="password"
                    name="password"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2 required">
                  Confirm password
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="password"
                    name="confirmPassword"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="form-group col-lg-9"></div>
                <div className="form-group col-lg-3">
                  <input
                    type="submit"
                    value="Save"
                    className="btn btn-primary btn-modern float-end"
                    data-loading-text="Loading..."
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserProfilePage;
