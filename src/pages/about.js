import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutHero from "../../components/about/Hero";
import Community from "../../components/about/Community";
import Events from "../../components/about/Events";
import Careers from "../../components/about/Careers";
import News from "../../components/about/News";
import LogoDownload from "../../components/about/LogoDownload";

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