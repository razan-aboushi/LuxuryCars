import React from "react";
import "./checkOutPayment.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function HeroCart() {
  return (
    <>
      <div className="d-flex m-5">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="dark" href="/">
            <h5 className="text-dark">Home</h5>
          </Link>
          <Typography color="text.primary">
            {" "}
            <h5 className="text-dark">Cart</h5>
          </Typography>
        </Breadcrumbs>
      </div>

      <div class="seoLanding deliveryLanding redesign mb-4">
        <header class="banner">
          <hgroup class="bannerMessaging">
            <h1>Your Dream Car, Delivered!</h1>
            <p class="heroSubheader header3">
              Any listing with a is eligible for{" "}
              <span className="fw-bold">LUXURY CARS</span> You can find the best
              cars and delivery and can be shipped directly to you
            </p>
          </hgroup>
          <div class="headerImgWrap">
            <img
              class="headerImg1"
              src="https://static1.cargurus.com/gfx/delivery/hero-delivery.svg"
              role="presentation"
              alt=""
              width="841"
              height="341"
            />
          </div>
        </header>
      </div>
    </>
  );
}

export default HeroCart;
