import React from "react";
import "./aboutus.css";

export default function AboutUs() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4 align-items-end mb-4">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <img
              className="img-fluid rounded"
              src="img/about.jpg"
              alt="Two businessmen in suits examining a smartphone screen together."
            />
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              About Us
            </p>
            <h1 className="display-5 mb-4">
              We Help Our Clients To Grow Their Business
            </h1>
            <p className="mb-4">
            We want to create superior value for our clients, shareholders and employees. And we want to stand out as a winner in our industry: for our expertise, advice and execution, our contribution to society, our work environment, and our business success.
            </p>
            <div className="border rounded p-4">
              <nav>
                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                  <button
                    className="nav-link fw-semi-bold active"
                    id="nav-story-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-story"
                    type="button"
                    role="tab"
                    aria-controls="nav-story"
                    aria-selected="true"
                  >
                    Story
                  </button>
                  <button
                    className="nav-link fw-semi-bold"
                    id="nav-mission-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-mission"
                    type="button"
                    role="tab"
                    aria-controls="nav-mission"
                    aria-selected="false"
                  >
                    Mission
                  </button>
                  <button
                    className="nav-link fw-semi-bold"
                    id="nav-vision-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-vision"
                    type="button"
                    role="tab"
                    aria-controls="nav-vision"
                    aria-selected="false"
                  >
                    Vision
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-story"
                  role="tabpanel"
                  aria-labelledby="nav-story-tab"
                >
                  <p>
                  With a a strategic partnership of qualified advisors, attorneys, tax and
                  investment professionals, we bring sophisticated strategies.
                  </p>
                  <p className="mb-0">
                  Documenting your assets to ensure a seamless transition to your chosen beneficiaries, thereby cementing your legacy.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-mission"
                  role="tabpanel"
                  aria-labelledby="nav-mission-tab"
                >
                  <p>
                  Assess your needs and policies to shield yourself from unexpected events and risks - prepare for what lies ahead.
                  </p>
                  <p className="mb-0">
                  Handling debt responsibly to minimise borrowing costs, create assets for the future, and strengthen your credit profile.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-vision"
                  role="tabpanel"
                  aria-labelledby="nav-vision-tab"
                >
                  <p>
                  Investing with purpose is an extremely powerful tool to disengage from excessive information clutter and deal with volatility better
                  </p>
                  <p className="mb-0">
                  Focus on choosing the right financial instruments and regime to reduce tax burdens and enhance returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row g-4">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="h-100">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-times text-white"></i>
                  </div>
                  <div className="ps-3">
                    <h4>No Hidden Cost</h4>
                    <span>100% Transparency and value for your money</span>
                  </div>
                  <div className="border-end d-none d-lg-block"></div>
                </div>
                <div className="border-bottom mt-4 d-block d-lg-none"></div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="h-100">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-users text-white"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Dedicated Team</h4>
                    <span>All Experienced individual with high qualifications</span>
                  </div>
                  <div className="border-end d-none d-lg-block"></div>
                </div>
                <div className="border-bottom mt-4 d-block d-lg-none"></div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-phone text-white"></i>
                  </div>
                  <div className="ps-3">
                    <h4>24/7 Available</h4>
                    <span>We live and work near you</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
