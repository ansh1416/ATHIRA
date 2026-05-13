import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import experiences from "../data/experiences";


const bottomExperiences = experiences.slice(3);

const ExperiencesBottom = () => {
  return (
    <section className="relative bg-[#141615] overflow-hidden">
      {/* EXPERIENCE FLOW */}
      <div className="relative">
        {bottomExperiences.map((experience, index) => (
          <ExperiencePanel
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      {/* END FADE */}
      <div className="h-40 bg-gradient-to-b from-[#141615] to-[#101110]" />
    </section>
  );
};

const ExperiencePanel = ({ experience, index }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });

  const left = experience.position === "left";
  const right = experience.position === "right";
  const center = experience.position === "center";

  // LIGHTWEIGHT MOTION
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-12%"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.12, 1]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [120, 0]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.18, 0.4],
    [0, 1, 1]
  );

  return (
    <section
      ref={sectionRef}
      className={`
        relative
        h-[92vh] md:h-[130vh]
        overflow-hidden
        ${index !== 0 ? "-mt-[20vh] md:-mt-[45vh]" : ""}
      `}
      style={{
        zIndex: index + 1,
      }}
    >
      {/* DEPTH SHADOW */}
      <div className="absolute inset-0 shadow-[0_-120px_180px_rgba(0,0,0,0.65)]" />

      {/* IMAGE */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={experience.image}
          alt={experience.title}
          className="
            w-full
            h-[102%] md:h-[120%]
            object-cover
          "
        />
      </motion.div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/55 md:bg-black/42" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,120,135,0.14),transparent_40%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(169,120,78,0.12),transparent_45%)]" />

      {/* LOWER MIST */}
      <div className="absolute bottom-0 left-0 w-full h-[38vh] bg-gradient-to-t from-[#141615] via-[#141615]/10 to-transparent" />

      {/* GRAIN */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* CONTENT */}
      <div
        className={`
          relative z-20 h-full
          flex items-center
          px-7 md:px-16 lg:px-24
          ${
            left
              ? "justify-start text-left"
              : right
              ? "justify-end text-right"
              : "justify-center text-center"
          }
        `}
      >
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
          }}
          className="max-w-[320px] md:max-w-[620px]"
        >
          {/* NUMBER */}
          <p
            className="text-[#E8DED2]/55 uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.28em",
            }}
          >
            {experience.id}
          </p>

          {/* TITLE */}
          <h2
            className="
              mt-5
              text-[#F5EEE6]
              leading-[0.88]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.8rem,10vw,6rem)",
              letterSpacing: "-0.06em",
            }}
          >
            {experience.title}
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              text-[#F1E5D8]/84
              leading-[2]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
            }}
          >
            {experience.description}
          </p>

          {/* DETAILS */}
          <p
            className="
              mt-6
              text-[#F1E5D8]/62
              leading-[2.1]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
            }}
          >
            {experience.details}
          </p>
        </motion.div>
      </div>
      
    </section>
  );
};

export default ExperiencesBottom;