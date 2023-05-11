import React, { useState, useContext } from "react";
import Payment from "./Payment";
import HeroCart from "./heroCart";
import { AuthContext } from "./AuthContext";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Cart() {
  const [Car, setCar] = useState(
    JSON.parse(localStorage.getItem("car")) || undefined);

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
                    Price: {Number(Car.discountedPrice)} JD
                  </p>
                </div>
                <div className="card-footer text-center">
                  <HashLink smooth to="/Pagination/#">
                    <div className="card-footer text-center">
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          Swal.fire({
                            title: 'Are you sure?',
                            text: 'You are about to remove this car from your cart',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#d33',
                            cancelButtonColor: '#3085d6',
                            confirmButtonText: 'Yes, remove it!',
                            cancelButtonText: 'Cancel'
                          }).then((result) => {
                            if (result.isConfirmed) {
                              handleRemoveItem(Car.id);
                            }
                          });
                        }}
                      >
                        Remove Car
                      </button>
                      </div>
                  </HashLink>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 ms-4 h6 text-start">
            <p className="fw-bold h5 mb-4">The Price of the car :</p>
            <p className="fw-bold mb-2">Sub-total: {Number(Car.discountedPrice)} JD</p>
            <hr />
            <p className="fw-bold mt-2 mb-2">Charge: 100 JD</p>
            <hr />
            <p className="fw-bold mt-2">Total: {Number(Car.discountedPrice) + 100} JD</p>
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


      {!auth && Car && (
        <div className="container text-center wow fadeInUp" data-wow-delay="0.1s">
          <p className="fs-5 fw-bold my-4">Please log in to continue</p>

          <Link to="/Registration">
            <button className="btn btn-primary btn-lg mb-5">
              CheckOut Payment
            </button>
          </Link>

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
