import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import AboutSection from "../components/AboutSection/AboutSection";
import EventsSection from "../components/EventsSection/EventsSection";
import ProgramsSection from "../components/ProgramsSection/ProgramsSection";
import ResearchSection from "../components/ResearchSection/ResearchSection";
import HeritageBanner from "../components/HeritageBanner/HeritageBanner";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <EventsSection />
      <ProgramsSection />
      <ResearchSection />
      <HeritageBanner />
      <Footer />
    </>
  );
}
