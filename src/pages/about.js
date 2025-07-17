import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutHero from "../../components/About/Hero";
import Community from "../../components/About/Community";
import Events from "../../components/About/Events";
import Careers from "../../components/About/Careers";
import News from "../../components/About/News";
import LogoDownload from "../../components/About/LogoDownload";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Community />
      <Events />
      <Careers />
      <News />
      <LogoDownload />
      <Footer />
    </>
  );
} 