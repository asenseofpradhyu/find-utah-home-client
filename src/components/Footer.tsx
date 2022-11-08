import React from "react";

function Footer() {
  return (
    <footer id="footer" className="m-0">
      <div className="container py-3">
        <div className="row py-5">
          <div className="col-md-4 col-lg-3">
            <h4 className="mb-3">Porto Real Estate</h4>
            <p className="mb-0">
              123 Porto Blvd, Suite 100
              <br />
              New York, NY
              <br />
              Phone : 123-456-7890
              <br />
              Email :{" "}
              <a
                className="text-color-secondary"
                href="mailto:mail@example.com"
              >
                mail@example.com
              </a>
            </p>
          </div>
          <div className="col-md-2">
            <h4 className="mb-3">Properties</h4>
            <nav className="nav-footer">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="demo-real-estate-properties.html"
                    className="custom-color-2 text-decoration-none"
                  >
                    For Sale
                  </a>
                </li>
                <li>
                  <a
                    href="demo-real-estate-properties.html"
                    className="custom-color-2 text-decoration-none"
                  >
                    For Rent
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-2">
            <h4 className="mb-3">Links</h4>
            <nav className="nav-footer">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="demo-real-estate-agents.html"
                    className="custom-color-2 text-decoration-none"
                  >
                    Agents
                  </a>
                </li>
                <li>
                  <a
                    href="demo-real-estate-who-we-are.html"
                    className="custom-color-2 text-decoration-none"
                  >
                    Who We Are
                  </a>
                </li>
                <li>
                  <a
                    href="demo-real-estate-contact.html"
                    className="custom-color-2 text-decoration-none"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-4 col-lg-5">
            <h4 className="mb-3">Latest Tweet</h4>
            <div
              id="tweet"
              className="twitter"
              data-plugin-tweets
              data-plugin-options="{'username': '', 'count': 1}"
            >
              <p>Please wait...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright pb-0">
        <div className="container">
          <div className="row ">
            <div className="col text-center py-4">
              <p>© Copyright 2022. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
