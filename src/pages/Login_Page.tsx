import React from "react";

// Local Imports

function LoginPage() {
  return (
    <React.Fragment>
      <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center p-static order-2 text-center">
              <h1 className="font-weight-bold text-dark">Login</h1>
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

      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 mb-5 mb-lg-0">
            <h2 className="font-weight-bold text-5 mb-0">Login</h2>
            <form
              action="/"
              id="frmSignIn"
              method="post"
              className="needs-validation"
            >
              <div className="row">
                <div className="form-group col">
                  <label className="form-label text-color-dark text-3">
                    Email address <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="text"
                    value=""
                    className="form-control form-control-lg text-4"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <label className="form-label text-color-dark text-3">
                    Password <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="password"
                    value=""
                    className="form-control form-control-lg text-4"
                    required
                  />
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="form-group col-md-auto">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="rememberme"
                    />
                    <label
                      className="form-label custom-control-label cur-pointer text-2"
                      htmlFor="rememberme"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="form-group col-md-auto">
                  <a
                    className="text-decoration-none text-color-dark text-color-hover-primary font-weight-semibold text-2"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <button
                    type="submit"
                    className="btn btn-dark btn-modern w-100 text-uppercase rounded-0 font-weight-bold text-3 py-3"
                    data-loading-text="Loading..."
                  >
                    Login
                  </button>
                  <div className="divider">
                    <span className="bg-light px-4 position-absolute left-50pct top-50pct transform3dxy-n50">
                      or
                    </span>
                  </div>
                  <a
                    href="#"
                    className="btn btn-primary-scale-2 btn-modern w-100 text-transform-none rounded-0 font-weight-bold align-items-center d-inline-flex justify-content-center text-3 py-3"
                    data-loading-text="Loading..."
                  >
                    <i className="fab fa-facebook text-5 me-2"></i> Login With
                    Facebook
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
