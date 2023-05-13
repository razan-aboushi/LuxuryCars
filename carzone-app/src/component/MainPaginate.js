import React, { useState, useEffect } from "react";
import cars from "../Recordes.json";
import Pagination from "./Pagination";
import Gallery from "./Gallery";

const MainPagitante = () => {
  let cars_array = [];
  const toyota = cars.toyota;
  const hyundai = cars.hyundai;
  const BMW = cars.bmw;

  toyota.map((car) => {
    cars_array.push(car);
  });
  hyundai.map((car) => {
    cars_array.push(car);
  });
  BMW.map((car) => {
    cars_array.push(car);
  });


  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCar, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(3);

  useEffect(() => {
    setPosts(cars_array);
    setLoading(false);
  }, []);

  // Get current posts
  const indexOfLastCar = currentCar * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = posts.slice(indexOfFirstCar, indexOfLastCar);

  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Gallery posts={currentCars} loading={loading} />
      <Pagination
        carsPerPage={carsPerPage}
        totalCars={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MainPagitante;
