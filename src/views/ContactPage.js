import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


const ContactPage = () => {
    return (
        <section className="bg-bg">
            <NavBar />
            <Contact />
            <Footer />
        </section>
    );
};

export default ContactPage;
