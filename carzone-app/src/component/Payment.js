import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Swal from "sweetalert2";

function Payment() {
  const [tab, setTab] = useState("creditCard");
  const [focus, setFocus] = useState("");

  const [formData, setFormData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });

  const [formDataAddress, setFormDataAddress] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    billingAddress: "",
    zip: "",
    state: "",
  });

  const [Car, setCar] = useState(
    JSON.parse(localStorage.getItem("car")) || undefined
  );

  function handleFormSubmit(event) {
    event.preventDefault();
    localStorage.setItem("formDataPayment", JSON.stringify(formData));
  }

  function handleFormSubmitAdress(event) {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formDataAddress));
  }

  function handleInputChangePayment(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleInputChangeAddress(event) {
    const { name, value } = event.target;
    setFormDataAddress({
      ...formDataAddress,
      [name]: value,
    });
  }

  function handleTabChange(newTab) {
    setTab(newTab);
  }

  return (
    <div className="container container-1 mt-5 mb-5 p-5">
      <div className="row">
        <div className="col-md-6">
          <div className="box-2">
            <div className="box-inner-2">
              <div>
                <p className="fw-bold h5 mb-2 mt-2">Payment Details</p>
                <p className="dis mb-3">
                  Complete your purchase by providing your payment details
                </p>
              </div>
              <form
                className="mt-3 ms-3 me-3"
                id="AddressForm"
                onSubmit={handleFormSubmitAdress}
              >
                <div className="mb-3">
                  <p className="dis fw-bold mb-2">Full Name</p>
                  <input
                    className="form-control"
                    required
                    type="text"
                    placeholder="Your full name"
                    name="fullName"
                    onChange={handleInputChangeAddress}
                  />
                </div>

                <div className="mb-3">
                  <p className="dis fw-bold mb-2">Email address</p>
                  <input
                    className="form-control"
                    required
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    onChange={handleInputChangeAddress}
                  />
                </div>

                <div className="mb-3">
                  <p className="dis fw-bold mb-2 ">Phone Number</p>
                  <input
                    className="form-control"
                    required
                    type="text"
                    placeholder="0780577727"
                    name="phoneNumber"
                    onChange={handleInputChangeAddress}
                  />
                </div>

                <div className="address">
                  <p className="dis fw-bold mb-1">Billing address</p>
                  <select
                    className="form-select mb-2"
                    required
                    aria-label="Default select example"
                    name="billingAddress"
                    onChange={handleInputChangeAddress}
                  >
                    <option>States</option>
                    <option value="Zarqa">Zarqa</option>
                    <option value="Amman">Amman</option>
                    <option value="Jerash">Jerash</option>
                    <option value="Ajlon">Ajlon</option>
                    <option value="Karak">Karak</option>
                    <option value="Tafila">Tafila</option>
                    <option value="Aqaba">Aqaba</option>
                    <option value="Irbid">Irbid</option>
                    <option value="Ma'an">Ma'an</option>
                    <option value="Madaba">Madaba</option>
                    <option value="Mafraq">Mafraq</option>
                    <option value="Balqa">Balqa</option>
                  </select>
                  <div className="d-flex flex-wrap">
                    <p className="dis fw-bold mb-2">ZIP</p>
                    <input
                      className="form-control mb-2  zip"
                      required
                      type="text"
                      placeholder="ZIP"
                      name="zip"
                      onChange={handleInputChangeAddress}
                    />
                    <p className="dis fw-bold mb-2">Country</p>
                    <input
                      className="form-control mb-5  state"
                      required
                      type="text"
                      placeholder="Country"
                      name="state"
                      onChange={handleInputChangeAddress}
                    />
                  </div>
                </div>
                <button
                  className="btn btn-dark text-white col-12"
                  id="AdressButton"
                >
                  {" "}
                  <span> Save </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-8 mx-auto">
          <h6 className="text-center fw-bold mb-3 mt-2">
            You can pay a down payment of the car price using one of the
            following payment methods
          </h6>
          <div className="btn-group d-flex justify-content-center">
            <button
              className="btn btn-primary"
              onClick={() => handleTabChange("creditCard")}
            >
              Credit Card or Visa Card
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleTabChange("paypal")}
            >
              PayPal
            </button>
          </div>
          <div className="mt-3">
            {tab === "creditCard" && (
              <div className="cardPayment">
                <div className="card-body">
                  <Cards
                    cvc={formData.cvc}
                    expiry={formData.expiry}
                    name={formData.name}
                    number={formData.number}
                    focused={focus}
                  />
                  <form method="post" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Card Number</label>
                      <input
                        className="form-control"
                        type="tel"
                        name="number"
                        placeholder="Card Number"
                        value={formData.number}
                        defaultValue="1234 5678 9012 3457"
                        minLength="16"
                        maxLength="16"
                        onChange={handleInputChangePayment}
                        onFocus={(e) => setFocus(e.target.name)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Cardholder Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Cardholder Name"
                        value={formData.name}
                        defaultValue="Razan Aboushi"
                        onChange={handleInputChangePayment}
                        onFocus={(e) => setFocus(e.target.name)}
                      />
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label className="form-label">
                          Expiration Date (MM/YY)
                        </label>
                        <input
                          className="form-control"
                          type="tel"
                          name="expiry"
                          placeholder="Expiration Date (MM/YY)"
                          value={formData.expiry}
                          defaultValue="01/22"
                          minLength="6"
                          maxLength="6"
                          onChange={handleInputChangePayment}
                          onFocus={(e) => setFocus(e.target.name)}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label className="form-label">CVC</label>
                        <input
                          className="form-control"
                          type="tel"
                          name="cvc"
                          placeholder="CVC"
                          value={formData.cvc}
                          minLength="3"
                          maxLength="3"
                          defaultValue="&#9679;&#9679;&#9679;"
                          onChange={handleInputChangePayment}
                          onFocus={(e) => setFocus(e.target.name)}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-dark bg-dark mt-3 col-12"
                      id="checkOutButton"
                      onClick={(e) => {
                        if (
                          formData.number &&
                          formData.name &&
                          formData.expiry &&
                          formData.cvc
                        ) {
                          Swal.fire({
                            title: "Confirm your order",
                            text: "Are you sure you want to proceed with this payment?",
                            icon: "warning",
                            showCancelButton: true,
                            html: `Your order is a car type ${Car.type} and its price is ${Car.price} a charge of 100 JD will be added to it And you will pay a deposit of 500 JD`,
                            confirmButtonText: "Yes, proceed to payment",
                            cancelButtonText: "Cancel",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire({
                                position: "center",
                                icon: "success",
                                title:
                                  "Your payment has been completed successfully",
                                showConfirmButton: false,
                                timer: 3000,
                              });
                              // Add code to submit the payment form here
                            }
                          });
                        } else {
                          Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "Please fill in all the required fields",
                            showConfirmButton: false,
                            timer: 3000,
                          });
                        }
                      }}
                    >
                      Pay Now
                    </button>
                  </form>
                </div>
              </div>
            )}

            {tab === "paypal" && (
              <div className="card">
                <div className="card-body">
                  <p>
                    Please click the button below to authorize the payment
                    through PayPal:
                  </p>
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_top"
                  >
                    <input type="hidden" name="cmd" value="_xclick" />
                    <input
                      type="hidden"
                      name="business"
                      value="YOUR_PAYPAL_EMAIL"
                    />
                    <input type="hidden" name="currency_code" value="JD" />
                    <input
                      type="hidden"
                      name="item_name"
                      value="PRODUCT_NAME"
                    />
                    <input type="hidden" name="amount" value="PRODUCT_PRICE" />
                    <input
                      type="hidden"
                      name="return"
                      value="YOUR_RETURN_URL"
                    />
                    <input
                      type="hidden"
                      name="cancel_return"
                      value="YOUR_CANCEL_URL"
                    />
                    <a href="https://www.paypal.com/jo/signin">
                      <button className="btn btn-dark my-3">pay Now</button>{" "}
                    </a>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
