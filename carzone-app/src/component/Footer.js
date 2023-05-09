import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import "./home.css";

const Footer = () => {
  return (
    <>
      <>
        {/* Footer */}
        <footer className="text-center text-lg-start text-muted shadow-lg bg-body">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block text-dark">
              <span>Get connected with us on social networks</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f  text-dark" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter  text-dark" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google  text-dark" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram  text-dark" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin  text-dark" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github  text-dark" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container-fluid  bg-transparent text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}

                  <img src={logo} alt="logo" width={200} />
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}

                  <p>
                    <Link to="/" className="text-reset  fw-bold">
                      HOME
                    </Link>
                  </p>
                  <p>
                    <Link to="Gallery" className="text-reset fw-bold">
                      GALLERY
                    </Link>
                  </p>
                  <p>
                    <Link to="About" className="text-reset fw-bold">
                      ABOUT
                    </Link>
                  </p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">CARS</h6>
                  <p>
                    <Link
                      to="/Products"
                      className="text-reset text-decoration-none"
                    >
                      MERCEDES
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/Products"
                      className="text-reset text-decoration-none"
                    >
                      TOYOTA
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/Products"
                      className="text-reset text-decoration-none"
                    >
                      BMW
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/Products"
                      className="text-reset text-decoration-none"
                    >
                      HONDA
                    </Link>
                  </p>
                </div>
                {/* Grid column */}

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3  text-dark" /> Zarqa, Jordan
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3  text-dark" />
                    Luxurycars@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3  text-dark" /> + 962 077 567
                    88
                  </p>
                  <p>
                    <i className="fas fa-print me-3 text-dark" /> + 07 985 567
                    89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-4 "
            style={{ backgroundColor: "transparent" }}
          >
            ⓒ Copyright 2023 Luxury Cars. All rights reserved.
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </>
    </>
  );
};

export default Footer;
