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

  const [selectedCars, setSelectedCars] = useState(cars_array);
  // console.log(selectedCars);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    setPosts(cars_array);
    setLoading(false);
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPosts);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <Gallery posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MainPagitante;
