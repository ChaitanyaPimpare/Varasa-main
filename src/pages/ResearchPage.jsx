import React from "react";
import "./ResearchPage.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import ResearchHero from "../components/ResearchHero/ResearchHero";
import ResearchMission from "../components/ResearchMission/ResearchMission";
import ResearchShowcase from "../components/ResearchShowcase/ResearchShowcase";

import HeritageBanner from "../components/HeritageBanner/HeritageBanner";

export default function ResearchPage() {
  return (
    <>
      <Header />
      <ResearchHero />
      <ResearchMission />
      <ResearchShowcase />
      <HeritageBanner />
      <Footer />
    </>
  );
}
