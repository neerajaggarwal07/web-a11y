
"use client"
import Header from "../components/Header/header";

import Footer from "../components/Footer/footer";

import PageHeader from "../components/PageHeader/pageheader";
import DataTables from "../components/DataTables/datatables";
export default function Investments() {
  return (
    <>
      <Header />
      <main className="container-fluid p-0 mb-5 wow fadeIn mt-5">
      <PageHeader />
      <DataTables />
        <Footer />
      </main>
    </>
  );
}
