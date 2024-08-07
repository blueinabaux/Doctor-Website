"use client"

import AboutPage from "./pages/AboutPage";
import ChooseMePage from "./pages/ChooseMePage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import LandingPage from "./pages/LandingPage";
import Servicespage from "./pages/ServicesPage";
// import LocomotiveScroll from 'locomotive-scroll';
// import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   (
  //     async() => {
  //       const LocomotiveScroll = (await import ('locomotive-scroll')).default;
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )();
  // }, []);
  return (
    <>
    
      <div className="min-h-[100vh] w-[100vw] overflow-x-hidden containerMain bg-[#0D4496]">
        <LandingPage/>
        <AboutPage/>
        <Servicespage/>
        <ChooseMePage/>
        <FaqPage/>
        <ContactPage/>
      </div>
    </>
  );
}
