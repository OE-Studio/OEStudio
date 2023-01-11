import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Service from "../components/Service";
import Team from "../components/Team";

const AboutPage = () => {
  return (
    <section className="bg-bg">
      <NavBar />
      <Team />
      <About />
      <Service />
      <Footer />
    </section>
  );
};

export default AboutPage;
