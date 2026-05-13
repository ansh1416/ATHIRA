import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Softer luxury 
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToCTA = () => {
  const section =
    document.getElementById("cta");

  section?.scrollIntoView({
    behavior: "smooth",
  });
};

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-[#0F1110]"
    >
      {/* BACKGROUND */}
      <motion.div
      
        style={{ y: bgY }}
        className="absolute -inset-10 will-change-transform"
      >
        <div
          className="w-full h-full bg-cover bg-center saturate-[0.88]"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "center 35%",
          }}
        />
      </motion.div>

      {/* DARK ATMOSPHERIC OVERLAY */}
      <div className="absolute inset-0 bg-[#0B0D0C]/28" />

      {/* TOP FOG LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%)]" />

      {/* HIDDEN WARM GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(169,120,78,0.16),transparent_35%)]" />

      {/* CINEMATIC GRAIN */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />



      {/* HERO CONTENT */}
      <motion.div
        style={{
          y: contentY,
          opacity,
        }}
        className="
          relative z-10 h-full
          flex flex-col justify-center pt-24
          items-start text-left
          pb-28
          pl-7 md:pl-[10vw]
          pr-6
          max-w-[520px]
          translate-y-16 md:translate-y-10
        "
      >
        {/* POETIC LINE */}
        <motion.p
initial={{ opacity: 0,filter: "blur(2px)", }}

animate={{ opacity: 1,filter: "blur(0px)", }}

transition={{
  duration: 4.2,
  delay: 0.2,
}}
          className="ml-1 md:ml-3 text-[#e8e4e0]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.75rem,1 vw,0.9rem)",
            letterSpacing: "0.18em",
          }}
        >
          In the silence of the Himalayas
        </motion.p>

        {/* TITLE */}
        <motion.h1
initial={{
  opacity: 0,
  filter: "blur(8px)",
  letterSpacing: "0.25em",
}}

animate={{
  opacity: 0.92,
  filter: "blur(0px)",
  letterSpacing: "0.015em",
}}

transition={{
  duration: 4.4,
  delay: 0.4,
  ease: [0.16, 1, 0.3, 1],
}}
          className="
            mt-2 uppercase leading-[0.88]
            text-[#D9D2CA]
          "
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(5.5rem, 18vw, 10rem)",
            letterSpacing: "0.015em",
            opacity: 0.92,
            textShadow: "0 4px 40px rgba(0,0,0,0.35)",
          }}
        >
          ATHIRA
        </motion.h1>

        {/* EDITORIAL ACTION */}
        <motion.div
        
        onClick={scrollToCTA}

        
initial={{
  opacity: 0,
  filter: "blur(3px)",
}}

animate={{
  opacity: 1,
  filter: "blur(0px)",
}}

transition={{
  duration: 4.2,
  delay: 0.6,
  ease: [0.16, 1, 0.3, 1],
}}
          className="mt-8 ml-1 group cursor-pointer"
        >
          <p
            className="
              text-[#D7C7B8]
              text-[10px]
              uppercase
              transition-all duration-500
              group-hover:text-[#F2E9DE]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.28em",
            }}
          >
            Enter the Silence
          </p>

          {/* UNDERLINE */}
          <div className="relative mt-3 w-full h-px overflow-hidden">
            <div className="absolute inset-0 bg-[#D6C6B8]/20" />

            <div className="absolute inset-0 bg-[#D6C6B8] origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
          </div>
        </motion.div>
      </motion.div>

      

      {/* BOTTOM CINEMATIC FADE */}


      

    </section>
  );
};

export default Hero;