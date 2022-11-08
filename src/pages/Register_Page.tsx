import React from "react";

// Local Imports

function RegisterPage() {
  return (
    <React.Fragment>
      <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center p-static order-2 text-center">
              <h1 className="font-weight-bold text-dark">Register</h1>
            </div>
            <div className="col-md-12 align-self-center order-1">
              <ul className="breadcrumb d-block text-center">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">Register</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 mb-5 mb-lg-0">
            <h2 className="font-weight-bold text-5 mb-0">Register</h2>
            <form action="/" id="frmSignUp" method="post">
              <div className="row">
                <div className="form-group col">
                  <label className="form-label text-color-dark text-3">
                    Username or email address{" "}
                    <span className="text-color-danger">*</span>
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
              <div className="row">
                <div className="form-group col d-flex">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="rememberme"
                    style={{ marginRight: 10 }}
                  />
                  <label
                    className="custom-control-label cur-pointer text-2"
                    htmlFor="rememberme"
                  >
                    Your personal data will be used to support your experience
                    throughout this website, and for other purposes described in
                    our{" "}
                    <a href="#" className="text-decoration-none">
                      privacy policy.
                    </a>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <button
                    type="submit"
                    className="btn btn-dark btn-modern w-100 text-uppercase rounded-0 font-weight-bold text-3 py-3"
                    data-loading-text="Loading..."
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RegisterPage;
