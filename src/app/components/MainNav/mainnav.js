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
        <ul className="navbar-nav ms-auto p-4 p-lg-0">
          <li>
            <Link
              className={`nav-link scrollto ${
                pathNames[0] === undefined && "active"
              }`}
              href="/"
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
              <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drop Down 2</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/services"
              className={`nav-link scrollto ${
                pathNames[0] === "services" && "active"
              }`}
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`nav-link scrollto ${
                pathNames[0] === "products" && "active"
              }`}
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
