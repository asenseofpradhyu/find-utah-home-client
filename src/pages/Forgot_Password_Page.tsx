import React, { useContext, useState } from "react";
import validator from "validator";
import axios from "axios";

// Local Imports
import { API_URL } from "../util/constants";

function ForgotPasswordPage() {
  const [emailID, setemailID] = useState({
    email: "",
    isSubmitting: false,
    isValid: true,
    isForgotPassword: false,
  });

  const sendEmailId = (event: any) => {
    event.preventDefault();
    console.log("Clicked !!");
    console.log(emailID);

    if (validator.isEmail(emailID.email) && !validator.isEmpty(emailID.email)) {
      setemailID({ ...emailID, isSubmitting: true, isValid: true });
      axios
        .post(`${API_URL}/password/reset-request`, {
          email: emailID.email,
        })
        .then(function (response) {
          setemailID({
            ...emailID,
            email: "",
            isSubmitting: false,
            isForgotPassword: true,
          });
          console.log(response);
        })
        .catch(function (error) {
          setemailID({
            ...emailID,
            isSubmitting: false,
          });
          console.log(error);
        });
      console.log("Pass");
    } else {
      console.log("Fail");
      setemailID({ ...emailID, isSubmitting: false, isValid: true });
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
                      Lost Password?
                    </h4>
                    <p className="text-2 opacity-7">
                      Enter your registered email address below and we'll send
                      you a link to reset your password.
                    </p>
                    <form
                      action="/"
                      id="frmLostPassword"
                      method="post"
                      className={
                        emailID.isValid
                          ? "needs-validation"
                          : "needs-validation was-validated"
                      }
                    >
                      <div className="row">
                        <div className="form-group col">
                          <label className="form-label">Registered Email</label>
                          <input
                            type="email"
                            name="username"
                            className="form-control form-control-lg"
                            value={emailID.email}
                            onChange={(e) =>
                              setemailID({
                                ...emailID,
                                email: e.target.value,
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
                            onClick={sendEmailId}
                            disabled={emailID.isSubmitting}
                          >
                            Send Vertification Link
                          </button>
                        </div>
                        {emailID.isForgotPassword && (
                          <div className="alert alert-success">
                            <strong>
                              <i className="far fa-thumbs-up"></i> Verification
                              Link Sent Succesfully !!
                            </strong>{" "}
                            Please check your email and Reset Your Password.
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

export default ForgotPasswordPage;
