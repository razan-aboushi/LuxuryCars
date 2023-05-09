/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import video from "../Images/car.mp4";
import car1 from "../Images/shopp.jpg";
import car2 from "../Images/toyo.jpg";
import hyundai from "../Images/LogoHyundai.png";
import toyota from "../Images/toyota.webp";
import bmw from "../Images/bmw.png";
import ford from "../Images/bmw1.png";
import ford2 from "../Images/2.jpg";
import nissan from "../Images/3.jpg";
import honda from "../Images/bmw2.png";

import icon_1 from "../Images/price.png";
import icon_2 from "../Images/min.png";
import icon_3 from "../Images/shopcar.png";
import { HashLink } from "react-router-hash-link";

import { Link } from "react-router-dom";
import "./home.css";

import { BrandContext } from "./brandContext";

const Main = () => {
  const [brand, setBrand] = useContext(BrandContext);
  console.log(brand);

  return (
    <>
      {/* Carousel wrapper */}
      <div
        id="introCarousel"
        className="carousel slide carousel-fade shadow-2-strong mt-0"
        data-mdb-ride="carousel"
      >
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li
            data-mdb-target="#introCarousel"
            data-mdb-slide-to={0}
            className="active"
          />
          <li data-mdb-target="#introCarousel" data-mdb-slide-to={1} />
          <li data-mdb-target="#introCarousel" data-mdb-slide-to={2} />
        </ol>
        {/* Inner */}
        <div className="carousel-inner">
          {/* Single item */}
          <div className="carousel-item active">
            <video
              style={{ minWidth: "100%", minHeight: "100%" }}
              playsInline
              autoPlay
              muted
              loop
            >
              <source className="h-100" src={video} type="video/mp4" />
            </video>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white text-center">
                  <h2 className="mb-3 fw-bold display-5 " id="hero-1">
                    WELCOME TO{" "}
                    <span
                      className="text-primary fw-bold display-2 "
                      id="carzone"
                    >
                      Luxury Cars
                    </span>
                  </h2>
                  <h5 className="mb-4  fw-bold">
                    Best &amp; Easy-To-Use Cars Sales Website
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item" id="car1">
            <img
              className="img-fluid h-100"
              src={car1}
              width="100%"
              alt="car-img"
              style={{ objectFit: "Cover" }}
            />
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.43)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white text-start">
                  <h1 className="fw-bold display-5 " id="hero-2">
                    START SHOPPING TODAY
                  </h1>
                  <h2 className="fw-normal" style={{ color: "#6AB7FE" }}>
                    SHOP YOUR FAVORITE BRAND
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item">
            <img
              className="img-fluid h-100"
              src={car2}
              width="100%"
              alt="car-img"
              id="car2"
              style={{ objectFit: "Cover" }}
            />
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.43)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white text-center">
                  <h2 className="display-5 fw-bold" id="hero-3">
                    The World’s Leading Brands Trust <br />{" "}
                    <span className="text-primary" id="carzone">
                      Luxury Cars
                    </span>{" "}
                    Every Day
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Inner */}
        {/* Controls */}
        <a
          className="carousel-control-prev"
          href="#introCarousel"
          role="button"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#introCarousel"
          role="button"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* Carousel wrapper */}

      <div className="container-fulid rounded-5  my-5 mx-5 text-center p-lg-4 p-md-0 p-sm-0 ">
        <div className="col-md-5  mx-auto my-5">
          <h1 className="display-4 fw-bold" id="top">
            Why Luxury Cars?
          </h1>

          <div className="row mt-5 gx-3 ">
            <div className="col-lg-4 ">
              <img
                className="bd-placeholder-img rounded-circle"
                src={icon_1}
                alt="icon"
              />
              <h2 className="fw-bold text-dark">Transparent pricing</h2>
              <p className="text-dark">
                No surprises here. See how much you'll pay on cars you like.
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="bd-placeholder-img rounded-circle"
                src={icon_2}
                alt="icon"
              />
              <h2 className="fw-bold text-dark">Minutes, not hours</h2>
              <p className="text-dark">
                Time saving tools to help you find the right car in a snap.
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="bd-placeholder-img rounded-circle"
                src={icon_3}
                alt="icon"
              />
              <h2 className="fw-bold text-dark">Shop your way</h2>
              <p className="text-dark">
                Your own pace, your own space. Shop online where and when it's
                convenient for you.
              </p>
            </div>
          </div>
        </div>
        {/* /////////////// */}
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="container  p-0" id="Gallery">
        <span id="cars"></span>
        <div className="d-md-flex  flex-md-equal w-100 mt-md-3 flex-wrap">
          <div
            className="col-12 col-lg-6 text-center overflow-hidden"
            style={{ backgroundColor: "black" }}
          >
            <div className="my-3 py-3" id="div-sq">
              <img
                className="img-fulid"
                width={180}
                src={hyundai}
                alt="mercedesLogo"
              />
            </div>
          </div>
          <div
            className="col-12 col-lg-6 text-center overflow-hidden"
            id="grad"
          >
            <div className="my-3 p-3 mx-5">
              <h2 className="display-5 text-start fw-bold text-center my-5">
                HYUNDAI
              </h2>
              <p className="lead text-center mb-3 ">
                Hyundai Motor Company has served as the trailblazer of Korea’s
                automobile Hyundai Motor Company has risen as a globally
                recognized automobile manufacturer that exports its branded
                vehicles to over 200 countries..{" "}
              </p>
              <HashLink smooth to="/Products/#">
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  fdprocessedid="qzga4"
                  onClick={() => setBrand("hyundai")}
                >
                  <i className="bi-cart-fill me-1" />
                  Shop Now
                </button>
              </HashLink>
            </div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 flex-wrap">
          <div
            className="col-12 col-lg-6 text-center overflow-hidden"
            id="grad"
          >
            <div className="my-3 p-3 mx-5">
              <h2 className="display-5  fw-bold text-center my-5">TOYOTA</h2>
              <p className="lead text-center mb-3">
                Toyota Motor Corporation is a Japanese multinational automotive
                manufacturer headquartered in Toyota City, Aichi, Japan. It was
                founded by Kiichiro Toyoda and incorporated on August 28, 1937.
              </p>
              <HashLink smooth to="/Products/#">
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  fdprocessedid="qzga4"
                  onClick={() => setBrand("toyota")}
                >
                  <i className="bi-cart-fill me-1" />
                  Shop Now
                </button>
              </HashLink>
            </div>
          </div>

          <div
            className="col-12 col-lg-6  text-center overflow-hidden"
            style={{ backgroundColor: "black" }}
          >
            <div className="my-3 py-3" id="div-sq">
              <img
                className="img-fulid"
                width={220}
                src={toyota}
                alt="ToyotaLogo"
              />
            </div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 mb-5 flex-wrap">
          <div
            className="col-12 col-lg-6 text-center overflow-hidden"
            style={{ backgroundColor: "black" }}
          >
            <div className="my-3 py-3" id="div-sq">
              <img className="img-fulid" src={bmw} width={180} alt="BMWLogo" />
            </div>
          </div>
          <div
            className="col-12 col-lg-6 text-center overflow-hidden"
            id="grad"
          >
            <div className="my-3 p-3 mx-5">
              <h2 className="display-5 text-start fw-bold 6 text-center my-5">
                BMW
              </h2>
              <p className="lead text-start text-center mb-3">
                Bayerische Motoren Werke AG, abbreviated as BMW is a German
                multinational manufacturer of luxury vehicles and motorcycles
                headquartered in Munich, Bavaria, Germany.
              </p>
              <HashLink to="/Products/#">
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  fdprocessedid="qzga4"
                  onClick={() => setBrand("bmw")}
                >
                  <i className="bi-cart-fill me-1" />
                  Shop Now
                </button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-white mb-5" id="cont-cards">
        <div className="row mb-3 text-center my-5">
          <h1 className="text-center my-5 fw-bold text-body display-4" id="top">
            TOP RATED
          </h1>

          <div className="col-lg-3 col-12 themed-grid-col">
            <div
              className="card  bg-transparent shadow-sm mb-5 mx-3"
              style={{ height: "15rem" }}
            >
              <div className="card-body">
                <p className="card-text text-start fs-3 fw-bold text-center">
                  BMW M235i
                </p>
              </div>
              <img
                src={ford}
                className="bd-placeholder-img card-img-top"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>

          <div className="col-lg-3 col-12 themed-grid-col">
            <div
              className="card bg-transparent shadow-sm mb-5 mx-3"
              style={{ height: "15rem" }}
            >
              <div className="card-body">
                <p className="card-text text-start fs-3 fw-bold text-center">
                  BMW X4
                </p>
              </div>
              <img
                src={honda}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="100%"
              ></img>
            </div>
          </div>

          <div className="col-lg-3 col-12 themed-grid-col">
            <div
              className="card bg-transparent shadow-sm mb-5 mx-3"
              style={{ height: "15rem" }}
            >
              <div className="card-body">
                <p className="card-text text-start fs-3 fw-bold text-center">
                  Toyota crown
                </p>
              </div>
              <img
                src={nissan}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="100%"
              ></img>
            </div>
          </div>

          <div className="col-lg-3 col-12 themed-grid-col ">
            <div
              className="card bg-transparent shadow-sm mb-5 mx-3"
              style={{ height: "15rem" }}
            >
              <div className="card-body ">
                <p className="card-text text-start fs-3 fw-bold text-center">
                  Toyota Prius
                </p>
              </div>
              <img
                src={ford2}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="100%"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 rounded-3 shadow-lg" id="discount">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 d-flex justify-content-center align-items-center rounded-3  shadow">
          <div className="col p-3 p-lg-5 pt-lg-3 mt-5 ">
            <h1 className="display-4 fw-bold lh-1 text-center" id="dis-text">
              Best Deal <span style={{ color: "#951718" }}>Discount</span> Offer
              on Cars : May 2023
            </h1>
            <p className="lead text-light fw-bold text-center">
              Check Latest Discount Offers with Best Deals on New Cars
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
              <Link to="discount">
                <button
                  className="btn btn-light fw-bold flex-shrink-0"
                  type="button"
                  fdprocessedid="qzga4"
                >
                  <i className="bi-cart-fill me-1" />
                  View Deals
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
