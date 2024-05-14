import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./mainnav.css";
export default function MainNav() {
  const paths = usePathname();
  const pathNames = paths?.split("/").filter((path) => path);

  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
    >
      <div className="d-flex w-100 justify-content-between">
        <Link className="navbar-brand ms-4 ms-lg-0" href="/">
          <h1 className="display-5 text-primary m-0">smartFinance</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
     
      <div id="navbarCollapse" className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto p-4 p-lg-0" aria-label="header main menu">
          <li>
            <Link
              className={`nav-link scrollto ${
                pathNames[0] === undefined && "active"
              }`}
              href="/"
              aria-current={pathNames[0] === undefined && "true"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`nav-link scrollto ${
                pathNames[0] === "about" && "active"
              }`}
            >
              About Us
            </Link>
          </li>
          <li className="dropdown">
            <a href="#" className="nav-link scrollto">
              <span>Insights</span> <i className="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li>
                <a href="#">Financial Analysis</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Our Clients</span>{" "}
                  <i className="bi bi-chevron-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Business Owner</a>
                  </li>
                  <li>
                    <a href="#">Influencer</a>
                  </li>
                  <li>
                    <a href="#">Athlete</a>
                  </li>
                  <li>
                    <a href="#">High Net Worth Family</a>
                  </li>
                  <li>
                    <a href="#">Retiree</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Business Solutions</a>
              </li>
              <li>
                <a href="#">Client Manangement</a>
              </li>
              <li>
                <a href="#">Tax Planning</a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/services"
              className={`nav-link scrollto ${
                pathNames[0] === "services" && "active"
              }`}
              aria-current={pathNames[0] === "services" ? "true":""}
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              href="/investments"
              className={`nav-link scrollto ${
                pathNames[0] === "investments" && "active"
              }`}
              aria-current={pathNames[0] === "investments" ? "true":""}
            >
              Investments
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`nav-link scrollto ${
                pathNames[0] === "products" && "active"
              }`}
              aria-current={pathNames[0] === "products" ? "true":""}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`nav-link scrollto ${
                pathNames[0] === "contact" && "active"
              }`}
              aria-current={pathNames[0] === "contact" ? "true":""}
            >
              Contact Us
            </Link>
          </li>

          {/* <li>
          <a className="nav-link scrollto" href="blog.html">Blog</a>
        </li> */}
        </ul>
      </div>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
}
