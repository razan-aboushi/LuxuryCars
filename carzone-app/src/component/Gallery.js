import React, { useState } from "react";
import "./style.css";
import { HashLink } from "react-router-hash-link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";



function Gallery({ posts, loading }) {
  // console.log(posts);
  const [carId, setCarId] = useState();
  const [carImg, setCarImg] = useState();
  const [words, setWords] = useState();
  const [selectedCars, setSelectedCars] = useState(posts);
  const cars = posts;
  // console.log(cars);




  const onSearch = (event) => {
    const filteredCars = cars.filter((car) => {
      if (
        car.type.toLowerCase().includes(event.target.value) ||
        car.type.includes(event.target.value)
      ) {
        return car;
      }
    });
    console.log(filteredCars);
    setSelectedCars(filteredCars);
  };





  return (
    <>


      <div class="container-fluid bg-primary py-5 page-headerContact" style={{
        backgroundImage: `url('https://dealerimages.dealereprocess.com/image/upload/2378751')`, backgroundRepeat: "no-repeat", backgroundSize: "cover"
      }}>
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
              <h1 class="display-3 text-dark animated slideInDown">Gallery</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="dark" href="/">
                      <h5 className="text-dark">Home</h5>
                    </Link>
                    <Typography color="text.primary">
                      {" "}
                      <h5 className="text-dark">Gallery</h5>
                    </Typography>
                  </Breadcrumbs>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>


      <h1 className="my-5 display-5 fw-bold text-center text-dark"></h1>

      <div class="row">
        <div class="row height d-flex justify-content-center align-items-center">
          <div class="col-md-8">
            <div class="form">
              <input
                className="form-control me-2 p-3"
                type="search"
                value={words}
                onChange={onSearch}
                placeholder="Search for Car.."
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </div>

      {
        cars?.map((car) => {
          return (
            <section className="py-2" key={car.id}>
              <div className="container p-5 px-lg-5 my-5 bg-light rounded-4">
                <div className="row gx-4 gx-lg-5 align-items-center">
                  <div className="col-md-6">
                    <div className="row-3">
                      <img
                        className="card-img-top "
                        src={carId === car.id ? carImg : car.image1}
                        alt="..."
                      />
                    </div>
                    <div className="container d-flex">
                      <div className="col-sm-4 mt-5 ">
                        <button
                          className="btn btn-white"
                          onClick={() => {
                            setCarId(car.id);
                            setCarImg(car.image2);
                          }}
                        >
                          <img
                            className="card-img-top mb-5 "
                            src={car.image2}
                            alt="..."
                          />
                        </button>
                      </div>
                      <div className="col-sm-4 mt-5">
                        <button
                          className="btn btn-white"
                          onClick={() => {
                            setCarId(car.id);
                            setCarImg(car.image3);
                          }}
                        >
                          <img
                            className="card-img-top mb-5 "
                            src={car.image3}
                            alt="..."
                          />
                        </button>
                      </div>
                      <div className="col-sm-4 mt-5">
                        <button
                          className="btn btn-white"
                          onClick={() => {
                            setCarId(car.id);
                            setCarImg(car.image4);
                          }}
                        >
                          <img
                            className="card-img-top mb-5 "
                            src={car.image4}
                            alt="..."
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="small mb-1">SKU: BST-498</div>
                    <h1 className="display-5 fw-bolder">{car.type} </h1>
                    <div className="fs-5 mb-5">
                      <span className="text-decoration-line-through me-2">{car.price}</span>
                      <span className="text-danger">{car.discountedPrice}</span>
                    </div>
                    <p>
                      With a low center of gravity, it's designed to perform. Feel
                      its nimble handling in every turn and stability during
                      acceleration and braking—for a drive that’s all-around
                      confident.
                    </p>
                    <div className="d-flex">
                      <HashLink smooth to="/Cart/#">
                        <button
                          className="btn btn-outline-dark flex-shrink-0"
                          type="button"
                          fdprocessedid="qzga4"
                          onClick={() => {
                            localStorage.setItem("car", JSON.stringify(car));
                          }}
                        >
                          <i className="bi-cart-fill me-1" />
                          Buy
                        </button>
                      </HashLink>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })
      }
    </>
  );
}
export default Gallery;
