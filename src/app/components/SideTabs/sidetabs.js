import React from "react";

import "./sidetabs.css";
export default function SideTabs() {
  return (

    <section className="container-xxl service py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}} >
                <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Services</p>
                <h1 className="display-5 mb-5">Awesome Financial Services For Business</h1>
            </div>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="col-lg-4">
                    <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                        <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active"
                            data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                            <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Financial Planning</h5>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                            data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                            <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Cash Investment</h5>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                            data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                            <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Financial Consultancy</h5>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0"
                            data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                            <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Business Loans</h5>
                        </button>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="tab-content w-100">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute rounded w-100 h-100" src="img/service-1.jpg"
                                            style={{objectFit: "cover"}} alt="Businessman holding paper hard board showing some information to the businesswoman wearing formal attire standing near him outside a building."/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                                    <p className="mb-4">Our comprehensive financial services help high-net-worth individuals and business owners discover their wealth’s true potential through effective strategies to simplify complex scenarios and achieve their goals.</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Secured Loans</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Credit Facilities</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Cash Advanced</p>
                                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute rounded w-100 h-100" src="img/service-2.jpg"
                                            style={{objectFit: "cover"}} alt="Three professional people sitting in the office room and doing the meeting." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-4">Cash Investment</h3>
                                    <p className="mb-4">Optimize thorough use of deductions, trusts, retirement plans, charitable giving, and conversion strategies to manage taxes..</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Share Market</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Banks Funds</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Gold Purchase</p>
                                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row g-4">
                                <div className="col-md-6" sstyle={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute rounded w-100 h-100" src="img/service-3.jpg"
                                            style={{objectFit: "cover"}} alt="One lady professional executive smiling and shaking hand with female client in her office room." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-4">Financial Consultancy</h3>
                                    <p className="mb-4">Thoughtfully plan your legacy with wealth transfer considerations..</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Peronsal Finance</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Retirement Planning</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Equity Investment</p>
                                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-4">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute rounded w-100 h-100" src="img/service-4.jpg"
                                            style={{objectFit: "cover"}} alt="Two professional ladies are discussing some business agenda." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-4">Business Loans</h3>
                                    <p className="mb-4">Plan for life events, such as selling your business, changing employers or inheriting a family estate.</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Secured Loans</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Credit Facilities</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Cash Advanced</p>
                                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )}