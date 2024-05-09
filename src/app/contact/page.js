"use client"
import ContactUsForm from "../components/ContactUsForm/contactusForm";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import PageHeader from "../components/PageHeader/pageheader";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container-fluid p-0 mb-5 mt-5">
        <PageHeader />
        <ContactUsForm />
        <Footer />
      </main>
    </>
  );
}
