import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
import { API_URL } from "../util/constants";

// Local Imports

function RegisterPage() {
  const [reigsterData, setregisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    isValid: true,
    isSubmitting: false,
    isRegistered: false,
  });

  const saveRegister = (event: any) => {
    event.preventDefault();
    console.log("Register Clicked !!");
    console.log(reigsterData);

    if (
      !validator.isEmpty(reigsterData.firstName) &&
      !validator.isEmpty(reigsterData.lastName) &&
      validator.isEmail(reigsterData.email) &&
      validator.isLength(reigsterData.phone, { min: 10, max: 10 }) &&
      !validator.isEmpty(reigsterData.password) &&
      !validator.isEmpty(reigsterData.confirmPassword) &&
      reigsterData.password === reigsterData.confirmPassword
    ) {
      setregisterData({ ...reigsterData, isSubmitting: true, isValid: true });
      axios
        .post(`${API_URL}/register`, {
          email: reigsterData.email,
          first_name: reigsterData.firstName,
          last_name: reigsterData.lastName,
          password: reigsterData.password,
          password_confirmation: reigsterData.confirmPassword,
          phone: reigsterData.phone,
        })
        .then(function (response) {
          setregisterData({
            ...reigsterData,
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            isSubmitting: false,
            isRegistered: true,
          });
          console.log(response);
        })
        .catch(function (error) {
          setregisterData({
            ...reigsterData,
            isSubmitting: false,
          });
          console.log(error);
        });
      console.log("Pass");
    } else {
      console.log("Fail");
      setregisterData({ ...reigsterData, isSubmitting: false, isValid: true });
    }
  };

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
            <form
              action="/"
              id="frmSignUp"
              className={
                reigsterData.isValid
                  ? "needs-validation"
                  : "needs-validation was-validated"
              }
            >
              <div className="row">
                <div className="form-group col-lg-6">
                  <label className="form-label text-color-dark text-3">
                    First Name <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-4"
                    name="firstname"
                    value={reigsterData.firstName}
                    onChange={(e) =>
                      setregisterData({
                        ...reigsterData,
                        firstName: e.target.value,
                      })
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    Please Enter your First Name.
                  </div>
                </div>
                <div className="form-group col-lg-6">
                  <label className="form-label text-color-dark text-3">
                    Last Name <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-4"
                    name="lastname"
                    value={reigsterData.lastName}
                    onChange={(e) =>
                      setregisterData({
                        ...reigsterData,
                        lastName: e.target.value,
                      })
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    Please Enter your Last Name.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-6">
                  <label className="form-label text-color-dark text-3">
                    Email <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg text-4"
                    name="email"
                    value={reigsterData.email}
                    onChange={(e) =>
                      setregisterData({
                        ...reigsterData,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    Please Enter your Email.
                  </div>
                </div>
                <div className="form-group col-lg-6">
                  <label className="form-label text-color-dark text-3">
                    Phone Number <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-4"
                    name="phonenumber"
                    value={reigsterData.phone}
                    onChange={(e) =>
                      setregisterData({
                        ...reigsterData,
                        phone: e.target.value,
                      })
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    Please Enter your Mobile Number.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-6">
                  <label className="form-label text-color-dark text-3">
                    Password <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg text-4"
                    name="password"
                    value={reigsterData.password}
                    onChange={(e) =>
                      setregisterData({
                        ...reigsterData,
                        password: e.target.value,
                      })
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    Please Enter your Password.
                  </div>
                </div>
                <div className="form-group col-lg-6">
                  <label className="form-label text-color-dark text-3">
                    Confirm Password{" "}
                    <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg text-4"
                    name="confirmpassword"
                    value={reigsterData.confirmPassword}
                    onChange={(e) =>
                      setregisterData({
                        ...reigsterData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    Please Enter Confirm Password.
                  </div>
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
                    By Registering you are accepting our{" "}
                    <a href="#!" className="text-decoration-none">
                      Terms & Conditons
                    </a>{" "}
                    and{" "}
                    <a href="#!" className="text-decoration-none">
                      privacy policy.
                    </a>
                  </label>
                </div>
              </div>
              <div className="row">
                {reigsterData.isRegistered && (
                  <div className="alert alert-success">
                    <strong>
                      <i className="far fa-thumbs-up"></i> Registered
                      Successfully !!
                    </strong>{" "}
                    Please check your email and activate your account.
                  </div>
                )}
                <div className="form-group col">
                  <button
                    type="submit"
                    className="btn btn-dark btn-modern w-100 text-uppercase rounded-0 font-weight-bold text-3 py-3"
                    data-loading-text="Loading..."
                    onClick={saveRegister}
                    disabled={reigsterData.isSubmitting}
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
