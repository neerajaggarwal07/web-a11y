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
                I consider smartFinance more than a financial advisory firm, but a constant part of my life, always ready to offer a helping hand, provide sound advice and offer support in matters when needed. With smartFinance, I've found not only financial guidance but also lifelong friends!
              </div>
              <img
                className="rounded-circle mb-3"
                src="img/testimonial-1.jpg"
                alt="Headshot of Claire Smith, a businesswoman in suit with a cheerful smile on a blurred backdrop."
              />
              <h4>Claire Smith</h4>
              <span>Financial Analysist</span>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                <div className="btn-square bg-white border rounded-circle">
                  <i className="fa fa-quote-right fa-2x text-primary"></i>
                </div>
                it was always reinforced that these investments are linked to my goals and meant to be utilised a few years down the line.
              </div>
              <img
                className="rounded-circle mb-3"
                src="img/testimonial-2.jpg"
                alt="Headshot of James Griffin with a beard and a white shirt laughing joyfully on a gray backdrop."
              />
              <h4>James Griffin</h4>
              <span>Medicine Practioner</span>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                <div className="btn-square bg-white border rounded-circle">
                  <i className="fa fa-quote-right fa-2x text-primary"></i>
                </div>
                smartFinance has been instrumental in providing timely advice and making necessary adjustments to keep me aligned with my goals. With them, I've always felt like a valued client.
              </div>
              <img
                className="rounded-circle mb-3"
                src="img/testimonial-3.jpg"
                alt="Headshot of Jasica Wilson directly at the camera smiling on a blurred backdrop."
              />
              <h4>Jasica Wilson</h4>
              <span>Fashion Designer</span>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                <div className="btn-square bg-white border rounded-circle">
                  <i className="fa fa-quote-right fa-2x text-primary"></i>
                </div>
                “I am incredibly satisfied with Daniel Thornton and Concord Wealth Partners. I completely trust him as my Wealth Advisor, and honestly believe he takes care of my financial security and future as if I am a part of his family."
              </div>
              <img
                className="rounded-circle mb-3"
                src="img/testimonial-4.jpg"
                alt="Headshot of William Anderson directly at the camera wearing a formal business gray suite on a gray backdrop."
              />
              <h4>William Anderson</h4>
              <span>Architect</span>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

