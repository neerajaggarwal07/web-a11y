
import React from "react";
import "./hero.css";
export default function Hero() {
  return (
    <section id="hero" className="d-flex justify-cntent-center align-items-center">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="img/carousel-1.jpg"
              alt="Image One"
            />
            <div className="carousel-caption ">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-8">
                    <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                      Welcome to Smart Finance
                    </p>
                    <h1 className=" mb-4 animated slideInDown text-black">
                      Your Financial Status Is Our Goal
                    </h1>
                    <a
                      href=""
                      className="btn btn-primary py-sm-3 px-sm-5 animated slideInDown "
                    >
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="img/carousel-2.jpg"
              alt="Image Two"
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-8">
                    <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                         Welcome to Smart Finance
                    </p>
                    <h1 className="mb-4 animated slideInDown text-black">
                      Your Financial Status Is Our Goal
                    </h1>
                    <a
                      href=""
                      className="btn btn-primary py-sm-3 px-sm-5 animated slideInDown "
                    >
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
