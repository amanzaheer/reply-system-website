import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PricingHeader from "../../components/PricingHeader";
import PricingTable from "../../components/PricingTable";

export default function Pricing() {
  return (
    <>
      <Navbar />
      <PricingHeader />
      <PricingTable />
      <Footer />
    </>
  );
} 