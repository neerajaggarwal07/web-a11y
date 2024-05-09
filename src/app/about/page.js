
"use client"
import Header from "../components/Header/header";

import Footer from "../components/Footer/footer";
import AboutUs from "../components/AboutUs/aboutus";
import PageHeader from "../components/PageHeader/pageheader";
export default function About() {
  return (
    <>
      <Header />
      <main className="container-fluid p-0 mb-5 wow fadeIn mt-5">
      <PageHeader />
        <AboutUs />
        <Footer />
      </main>
    </>
  );
}