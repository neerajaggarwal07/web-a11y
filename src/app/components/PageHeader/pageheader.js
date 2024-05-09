import React from "react";
import { usePathname } from 'next/navigation';
import "./pageheader.css";

export default function PageHeader() {
    const paths = usePathname()
    const pathNames = paths?.split('/').filter( path => path );
  return (
    <section className="container-fluid page-header mb-5 wow fadeIn " data-wow-delay="0.1s">
        <div className="container">
            <h1 className="display-3 mb-4 animated slideInDown text-capitalize">{pathNames[0]}</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active text-capitalize" aria-current="page">{pathNames[0]}</li>
                </ol>
            </nav>
        </div>
    </section>
  );
}
