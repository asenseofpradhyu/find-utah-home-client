import React, { useState, useEffect } from "react";
import validator from "validator";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

// Local Imports
import { API_URL } from "../util/constants";

function ResetPasswordPage() {
  const [restData, setResetData] = useState({
    email: "",
    token: "",
    password: "",
    confirmPassword: "",
    isSubmitting: false,
    isValid: true,
    isResetPassword: false,
  });
  let [searchParams, setSearchParams] = useSearchParams();
  const navigator = useNavigate();

  useEffect(() => {
    setResetData({
      ...restData,
      token: searchParams.get("token") as string,
      email: searchParams.get("email") as string,
    });
  }, []);

  console.log(searchParams.get("token"));
  console.log(searchParams.get("email"));

  const resetOldPassword = (event: any) => {
    event.preventDefault();
    console.log("Clicked !!");
    console.log(restData);

    if (
      validator.isEmail(restData.email) &&
      !validator.isEmpty(restData.email) &&
      !validator.isEmpty(restData.password) &&
      !validator.isEmpty(restData.confirmPassword) &&
      restData.password === restData.confirmPassword
    ) {
      setResetData({ ...restData, isSubmitting: true, isValid: true });
      axios
        .post(`${API_URL}/password/reset`, {
          token: restData.token,
          email: restData.email,
          password: restData.password,
          password_confirmation: restData.confirmPassword,
        })
        .then(function (response) {
          setResetData({
            ...restData,
            email: "",
            password: "",
            confirmPassword: "",
            isSubmitting: false,
            isResetPassword: true,
          });
          setTimeout(() => {
            navigator("/login");
          }, 1500);
          console.log(response);
        })
        .catch(function (error) {
          setResetData({
            ...restData,
            isSubmitting: false,
          });
          console.log(error);
        });
      console.log("Pass");
    } else {
      console.log("Fail");
      setResetData({ ...restData, isSubmitting: false, isValid: true });
    }
  };

  return (
    <React.Fragment>
      <div
        className="container py-4"
        style={{
          height: "calc(100vh - 498px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="row justify-content-center"
          style={{ flex: "1 0 auto" }}
        >
          <div className="col-lg-12 order-1 order-lg-2">
            <div className="row justify-content-md-center">
              <div className="col-md-9">
                <div className="featured-box featured-box-primary text-start mt-0">
                  <div className="box-content">
                    <h4 className="color-primary font-weight-semibold text-4 text-uppercase mb-0">
                      Enter Your New Password
                    </h4>
                    {/* <p className="text-2 opacity-7">
                      Enter your registered email address below and we'll send
                      you a link to reset your password.
                    </p> */}
                    <form
                      action="/"
                      id="frmLostPassword"
                      method="post"
                      className={
                        restData.isValid
                          ? "needs-validation"
                          : "needs-validation was-validated"
                      }
                    >
                      <div className="row">
                        <div className="form-group col">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control form-control-lg"
                            value={restData.email}
                            onChange={(e) =>
                              setResetData({
                                ...restData,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control form-control-lg"
                            value={restData.password}
                            onChange={(e) =>
                              setResetData({
                                ...restData,
                                password: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                          <label className="form-label">Confirm Password</label>
                          <input
                            type="password"
                            name="Confirm Password"
                            className="form-control form-control-lg"
                            value={restData.confirmPassword}
                            onChange={(e) =>
                              setResetData({
                                ...restData,
                                confirmPassword: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col">
                          <button
                            type="submit"
                            value="Submit"
                            className="btn btn-primary btn-modern float-end"
                            data-loading-text="Loading..."
                            onClick={resetOldPassword}
                            disabled={restData.isSubmitting}
                          >
                            Change Password
                          </button>
                        </div>
                        {restData.isResetPassword && (
                          <div className="alert alert-success">
                            <strong>
                              <i className="far fa-thumbs-up"></i> Password
                              Succesfully Changed!!
                            </strong>{" "}
                            You can login with new password.
                          </div>
                        )}
                      </div>
                    </form>
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

export default ResetPasswordPage;
