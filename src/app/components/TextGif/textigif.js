import React from "react";

export default function TextGif() {
  return (
    <section className="container-xxl py-5">
      <div className="container">
        <div className="section sec-halfs py-0">
          <div className="half-content d-lg-flex align-items-stretch justify-content-evenly">
            <div className="col-xs-12 col-md-6">
            <img
              className="d-block w-100"
              src="img/animated.gif"
              alt="One lady wearing the formal white dress sitting at the desk and looking at the white laptop screen and also noting down some information on paper"
            />
            </div>

            <div className="text d-flex flex-column col-xs-12 col-md-6 justify-content-center ms-lg-5">
              <h2 className="heading text-primary mb-3">
              We really get to know you
              </h2>
              <p className="mb-5">
              Each relationship revolves around a comprehensive plan built on a thorough understanding of your goals. Our advisors are supported by an internal team of experts dedicated entirely to identifying the best possible investment solutions for clients.
              </p>
              <p>
                <a href="#" className="btn btn-outline-primary py-2">
                  Read more
                </a>
              </p>
            </div>
          </div>

          <div
            className="half-content d-lg-flex align-items-stretch justify-content-evenly"
            style={{ marginTop: "50px" }}
          >
           <div className="text d-flex flex-column col-xs-12 col-md-6 justify-content-center me-5">
              <h2 className="heading text-primary mb-3">
              Go Beyond Traditional Investment Management and Financial Planning
              </h2>
              <p className="mb-5">
              With a a strategic partnership of qualified advisors, attorneys, tax and investment professionals, we bring sophisticated strategies to optimize your financial life.
              </p>
              <p>
                <a href="#" className="btn btn-outline-primary py-2">
                  Read more
                </a>
              </p>
            </div>
            <div className="col-xs-12 col-md-6">
            <img
              className="d-block w-100"
              src="img/animated_1.gif"
              alt="One lady wearing the formal white dress sitting at the desk and looking at the white laptop screen and also noting down some information on paper"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
