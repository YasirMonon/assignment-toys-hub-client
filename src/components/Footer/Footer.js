import React from "react";
import classes from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  //Footer Section
  return (
    <footer className={classes.footer}>
      <div className="my-5">
        <div
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#679cc159" }}
        >
          <div
            className="justify-content-between p-4 text-center"
            style={{ color: "#ffffff" }}
          >
            <div>
              <span style={{ marginRight: "10px" }}>Get connected with us on social networks :  </span>

              <a href="/" className="text-white me-4">
                <FaFacebookF style={{ color: "#ffffff" }} />
              </a>
              <a href="/" className="text-white me-4">
                <FaTwitter style={{ color: "#ffffff" }} />
              </a>
              <a href="/" className="text-white me-4">
                <FaInstagram style={{ color: "#ffffff" }} />
              </a>
            </div>

          </div>

          <section className="">
            <div className="container text-center text-md-start mt-5">

              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold">Toys Hub</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "60px", backgroundColor: "#ffffff", height: "2px" }}
                  />
                  <p>
                    You can regularly visit our website for Exciting Updates and Offers . To avail more , you can register to our website .
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold">Offers</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "60px", backgroundColor: "#ffffff", height: "2px" }}
                  />
                  <p>
                    <a href="/" className="text-white" style={{ textDecoration: "none" }}>Infant</a>
                  </p>
                  <p>
                    <a href="/" className="text-white" style={{ textDecoration: "none" }}>Babies</a>
                  </p>
                  <p>
                    <a href="/" className="text-white" style={{ textDecoration: "none" }}>Musical Toys</a>
                  </p>
                  <p>
                    <a href="/" className="text-white" style={{ textDecoration: "none" }}>Board Games</a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "60px", backgroundColor: "#ffffff", height: "2px" }}
                  />
                  <p>
                    <a href="/" className="text-white" style={{ textDecoration: "none" }}>Your Account</a>
                  </p>
                  <p>
                    <a href="/" className="text-white" style={{ textDecoration: "none" }}>Become an Affiliate</a>
                  </p>
                  <p>
                    <a href="/" className="text-white" style={{ textDecoration: "none" }}>Special Package</a>
                  </p>
                  <p>
                    <a href="/" className="text-white" style={{ textDecoration: "none" }}>Help</a>
                  </p>
                </div>



                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-40">

                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "60px", backgroundColor: "#ffffff", height: "2px" }}
                  />
                  <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                  <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>

              </div>

            </div>
          </section>

        </div>


      </div>

      <p className={classes.copyright}>
        Copyright © 2021 All rights reserved | Toys Hub
      </p>
    </footer>
  );
};

export default Footer;
