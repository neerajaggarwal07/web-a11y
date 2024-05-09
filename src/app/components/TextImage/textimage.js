import React from "react";
import PieChart from "../PieChart/piechart";
import BarChart from "../BarChart/barchart";
export default function TextImage() {
  return (
    <section className="container-xxl py-5">
      <div className="container">
        <div className="section sec-halfs py-0">
          <div className="half-content d-lg-flex align-items-stretch justify-content-evenly">
            <div className="col-xs-12 col-md-6">
              <BarChart />
            </div>

            <div className="text d-flex flex-column col-xs-12 col-md-6 justify-content-center ms-lg-5">
              <h2 className="heading text-primary mb-3">
                This is the products comparison
              </h2>
              <p className="mb-5">
                This graph chart shows the product comparison performance over
                the year.
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
                This is for perosnal financial graph
              </h2>
              <p className="mb-5">
                A financial plan is a complete overview of the steps you’ll have
                to take to achieve the goals you lay out for yourself.
              </p>
              <p>
                <a href="#" className="btn btn-outline-primary py-2">
                  Read more
                </a>
              </p>
            </div>
            <div className="col-xs-12 col-md-6">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
