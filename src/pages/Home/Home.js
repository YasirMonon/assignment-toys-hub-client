import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import NavbarMenu from "../../components/Header/Navbar";
import Reviews from "../../components/Reviews/Reviews";
import Toys from "../../components/Toys/Toys";

const Home = () => {

  //Home Page
  return (
    <>
      <NavbarMenu />
      <Banner />
      <Toys />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
