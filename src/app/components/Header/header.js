import React from "react";

import "./header.css";
import TopBar from "../TopBar/topbar";
import MainNav from "../MainNav/mainnav";
export default function Header() {
  return (
    <header
      id="header"
      className="container-fluid fixed-top px-0 bg-white"
    >
      <TopBar />
      <MainNav />
    </header>
  );
}
