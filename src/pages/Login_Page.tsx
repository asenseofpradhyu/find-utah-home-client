import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";

// Local Imports
import { API_URL } from "../util/constants";
import AuthContext from "../context/auth_context";

function LoginPage() {
  const authCtx = useContext(AuthContext);
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
    isValid: true,
    isSubmitting: false,
    isLogin: false,
  });
  const navigator = useNavigate();

  const loginUser = (event: any) => {
    event.preventDefault();
    console.log("Register Clicked !!");
    console.log(loginData);

    if (
      validator.isEmail(loginData.email) &&
      !validator.isEmpty(loginData.email) &&
      !validator.isEmpty(loginData.password)
    ) {
      setloginData({ ...loginData, isSubmitting: true, isValid: true });
      axios
        .post(`${API_URL}/login`, {
          email: loginData.email,
          password: loginData.password,
        })
        .then(function (response) {
          setloginData({
            ...loginData,
            email: "",
            password: "",
            isSubmitting: false,
            isLogin: true,
          });
          authCtx.login(response.data.token, response.data.user);
          navigator("/");
          //           {
          //     "id": 5,
          //     "first_name": "Pradhumansinh",
          //     "last_name": "Padhiyar",
          //     "phone": "9426668537",
          //     "email": "pradhu619@gmail.com",
          //     "is_deleted": 0,
          //     "created_at": "2022-11-11T13:06:56.000000Z",
          //     "updated_at": "2022-11-11T13:06:56.000000Z"
          // }
          console.log(response);
        })
        .catch(function (error) {
          setloginData({
            ...loginData,
            isSubmitting: false,
          });
          console.log(error);
        });
      console.log("Pass");
    } else {
      console.log("Fail");
      setloginData({ ...loginData, isSubmitting: false, isValid: true });
    }
  };

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
              className={
                loginData.isValid
                  ? "needs-validation"
                  : "needs-validation was-validated"
              }
            >
              <div className="row">
                <div className="form-group col">
                  <label className="form-label text-color-dark text-3">
                    Email address <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-4"
                    required
                    value={loginData.email}
                    onChange={(e) =>
                      setloginData({
                        ...loginData,
                        email: e.target.value,
                      })
                    }
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
                    className="form-control form-control-lg text-4"
                    required
                    value={loginData.password}
                    onChange={(e) =>
                      setloginData({
                        ...loginData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="row justify-content-between">
                {/* <div className="form-group col-md-auto">
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
                </div> */}
                <div className="form-group col-md-auto">
                  <Link
                    to="/forgotpassword"
                    className="text-decoration-none text-color-dark text-color-hover-primary font-weight-semibold text-2"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <button
                    type="submit"
                    className="btn btn-dark btn-modern w-100 text-uppercase rounded-0 font-weight-bold text-3 py-3"
                    data-loading-text="Loading..."
                    onClick={loginUser}
                    disabled={loginData.isSubmitting}
                  >
                    Login
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

export default LoginPage;
