import React, { useEffect } from "react";
import "./testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <section className="container-xxl py-5">
      <div className="container">
        <div className="slider-container testimonial-carousel">
          <Slider {...settings}>
            <div className="testimonial-item">
              <div className="testimonial-text border rounded p-4 pt-5 mb-5 ">
                <div className="btn-square bg-white border rounded-circle">
                  <i className="fa fa-quote-right fa-2x text-primary"></i>
                </div>
                Dolores sed duo clita tempor justo dolor et stet lorem kasd
                labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
                labore et tempor diam tempor erat.
              </div>
              <img
                className="rounded-circle mb-3"
                src="img/testimonial-1.jpg"
                alt=""
              />
              <h4>Client Name</h4>
              <span>Profession</span>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                <div className="btn-square bg-white border rounded-circle">
                  <i className="fa fa-quote-right fa-2x text-primary"></i>
                </div>
                Dolores sed duo clita tempor justo dolor et stet lorem kasd
                labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
                labore et tempor diam tempor erat.
              </div>
              <img
                className="rounded-circle mb-3"
                src="img/testimonial-2.jpg"
                alt=" "
              />
              <h4>Client Name</h4>
              <span>Profession</span>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                <div className="btn-square bg-white border rounded-circle">
                  <i className="fa fa-quote-right fa-2x text-primary"></i>
                </div>
                Dolores sed duo clita tempor justo dolor et stet lorem kasd
                labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
                labore et tempor diam tempor erat.
              </div>
              <img
                className="rounded-circle mb-3"
                src="img/testimonial-3.jpg"
                alt=""
              />
              <h4>Client Name</h4>
              <span>Profession</span>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                <div className="btn-square bg-white border rounded-circle">
                  <i className="fa fa-quote-right fa-2x text-primary"></i>
                </div>
                Dolores sed duo clita tempor justo dolor et stet lorem kasd
                labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
                labore et tempor diam tempor erat.
              </div>
              <img
                className="rounded-circle mb-3"
                src="img/testimonial-4.jpg"
                alt=""
              />
              <h4>Client Name</h4>
              <span>Profession</span>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

