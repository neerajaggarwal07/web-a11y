"use client"
import SideTabs from "../components/SideTabs/sidetabs";
import Header from "../components/Header/header";

import Footer from "../components/Footer/footer";
import PageHeader from "../components/PageHeader/pageheader";
export default function Services() {
  return (
    <>
      <Header />
      <main className="container-fluid p-0 mb-5 mt-5">
        <PageHeader />
        <SideTabs />
        <Footer />
      </main>
    </>
  );
}
