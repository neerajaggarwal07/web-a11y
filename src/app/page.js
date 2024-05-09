"use client";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import AboutUs from "./components/AboutUs/aboutus";
import Facts from "./components/Facts/facts";
import Features from "./components/Features/features";
import Testimonial from "./components/Testimonial/testimonial";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container-fluid p-0 mb-5">
        <Hero />
        <AboutUs />
        <Facts />
        <Features />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
}
