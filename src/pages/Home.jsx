import { lazy, Suspense } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import Experiences from "../sections/Experiences";
import Gallery from "../sections/Gallery";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";

// LAZY LOADED EXPERIENCE FLOWS
const ExperiencesTop = lazy(() =>
  import("../sections/ExperiencesTop")
);

const ExperiencesBottom = lazy(() =>
  import("../sections/ExperiencesBottom")
);

const scrollToCTA = () => {
  const section =
    document.getElementById("cta");

  section?.scrollIntoView({
    behavior: "smooth",
  });
};

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      {/* EXPERIENCES INTRO */}
      <Experiences />

      {/* TOP EXPERIENCE FLOW */}
      <Suspense fallback={null}>
        <ExperiencesTop />
      </Suspense>

      {/* BOTTOM EXPERIENCE FLOW */}
      <Suspense fallback={null}>
        <ExperiencesBottom />
      </Suspense>

      <Gallery />


      <Testimonials />

      <CTA />

      <Footer />
    </>
  );
};

export default Home;