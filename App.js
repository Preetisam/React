import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cardtext from "./components/Cardtext";
import Cards from "./components/Cards";
import Forms from "./components/Forms";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div class="container my-5">
        <Banner />
        <Cardtext />
        <Cards />
        <Forms />
      </div>
      <Footer />
    </div>
  );
}
