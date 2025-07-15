import Features from "../../components/Features";
import Footer from "../../components/Footer";
import HelpSupport from "../../components/HelpSupport";
import Hero from "../../components/Hero";
import HowItWork from "../../components/HowItWork";
import Navbar from "../../components/Navbar";
import Solution from "../../components/Solution";
import Testimonial from "../../components/Testimonial";
import TryItFree from "../../components/TryItFree";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Solution/>
   <Features/>
   <HowItWork/>
   <Testimonial/>
   <TryItFree/>
   <HelpSupport/>
   <Footer/>
   
   </>
  );
}
