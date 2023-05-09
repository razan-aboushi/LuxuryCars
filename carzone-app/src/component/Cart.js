import React, { useState, useContext } from "react";
import Payment from "./Payment";
import HeroCart from "./heroCart";
import { AuthContext } from "./AuthContext";
import { HashLink } from "react-router-hash-link";

function Cart() {
  const [Car, setCar] = useState(
    JSON.parse(localStorage.getItem("car")) || undefined
  );

  const { auth } = useContext(AuthContext);

  function handleRemoveItem(id) {
    localStorage.removeItem("car");
    setCar({});
  }

  return (
    <>
      <HeroCart />

      {Car ? (
        <div className="container mt-5 mb-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <h4 className="text-center mb-5 fw-bold">Your selected car</h4>
            </div>

            <div key={Car.id} className="col-md-6 col-lg-4 mb-4 text-center">
              <div className="card h-100 cart-item-container animate__animated animate__fadeIn">
                <img
                  src={Car.image1}
                  alt={Car.image1}
                  className="card-img-top mt-4"
                />
                <div className="card-bodyCart">
                  <h5 className="card-title">{Car.type}</h5>
                  <p className="card-text text-center m-3">
                    Price: {Car.price} JD
                  </p>
                </div>
                <div className="card-footer text-center">
                  <HashLink smooth to="/Pagination/#">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveItem(Car.id)}
                    >
                      Remove Car
                    </button>
                  </HashLink>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 ms-4 h6 text-start">
            <p className="fw-bold h5 mb-4">The Price of the car :</p>
            <p className="fw-bold mb-2">Sub-total: {Number(Car.price)} JD</p>
            <hr />
            <p className="fw-bold mt-2 mb-2">Charge: 100 JD</p>
            <hr />
            <p className="fw-bold mt-2">Total: {Number(Car.price) + 100} JD</p>
          </div>
        </div>
      ) : (
        <div class="notInCart">
          <h3 className="card-title mb-3">
            Don't miss the opportunity to get your car!
          </h3>
          <p children="card-text mb-5">
            Enjoy luxury and high performance with our distinctive cars, and
            enjoy traveling with confidence and comfort. What are you waiting
            for, <strong>shop now</strong> and get the car you deserve.
          </p>
          <HashLink to="/Pagination/#" className="btn btn-dark text-center">
            Go back to shop
          </HashLink>
        </div>
      )}

      {auth && Car && (
        <div>
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title mt-5  text-center text-primary px-3 mb-2 fs-5 fs-md-6 fs-lg-7 fw-bold">
              Payment Information
            </h6>
          </div>
          <Payment />
        </div>
      )}
    </>
  );
}

export default Cart;
