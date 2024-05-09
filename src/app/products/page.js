"use client"
import Header from "../components/Header/header";

import Footer from "../components/Footer/footer";
import LineChart from "../components/LineChart/linechart";
import PieChart from "../components/PieChart/piechart";
import BarChart from "../components/BarChart/barchart";
import PageHeader from "../components/PageHeader/pageheader";
import TextImage from "../components/TextImage/textimage";
export default function Products() {
  return (
    <>
      <Header />
      <main className="container-fluid p-0 mb-5 mt-5">
      <PageHeader />
         <TextImage />
         <LineChart />
         <Footer />
      </main>
    </>
  );
}