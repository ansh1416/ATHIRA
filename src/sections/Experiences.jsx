import { motion } from "framer-motion";
import Experience from "../assets/images/philosophy.png";

const Experiences = () => {
  return (
    <section className="relative overflow-hidden bg-[#141615]">
      {/* BASE ATMOSPHERE */}
      <div className="absolute inset-0 bg-[#57524C]" />

      {/* COOL MIST */}
      <motion.div
        animate={{
          opacity: [0.12, 0.18, 0.12],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(110,138,150,0.20),transparent_42%)]
        "
      />

      {/* WARM LIGHT */}
      <motion.div
        animate={{
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_bottom_right,rgba(169,120,78,0.14),transparent_38%)]
        "
      />

      {/* GRAIN */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* BOTTOM FOG */}
      <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-[#141615] via-[#141615]/20 to-transparent" />

      {/* SIDE IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.08,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
        }}
        viewport={{ once: true }}
        className="
          absolute
          right-0 md:right-16
          bottom-[-2rem] md:bottom-0
          w-[78vw] md:w-[32vw]
          h-[42vh] md:h-[62vh]
          overflow-hidden
          rounded-tl-[2rem]
        "
      >
        <img
          src={Experience}
          alt="Athira Experience"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* FLOATING QUOTE */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.4,
          delay: 0.6,
        }}
        viewport={{ once: true }}
        className="
          absolute
          bottom-8 md:bottom-16
          left-6 md:left-auto
          right-6 md:right-24
          z-20
          backdrop-blur-md
          bg-white/[0.03]
          border border-white/10
          px-5 py-4
          rounded-2xl
          max-w-[180px] md:max-w-[240px]
        "
      >
        <p
          className="text-[#F1E5D8]/80 italic leading-[1.8]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
          }}
        >
          “Every journey changes shape in silence.”
        </p>
      </motion.div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          min-h-[92vh] md:min-h-[78vh]
          flex items-start md:items-center
          px-7 md:px-16 lg:px-24
          pt-28 md:pt-0
          pb-[24vh] md:pb-0
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            filter: "blur(12px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="max-w-[320px] md:max-w-[760px]"
        >
          {/* LABEL */}
          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="uppercase text-[#E7DDD2]/55"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.34em",
            }}
          >
            Experiences
          </motion.p>

          {/* TITLE */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="
              mt-6
              text-[#F5EEE6]
              leading-[0.88]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem,13vw,6.2rem)",
              letterSpacing: "-0.08em",
            }}
          >
            Some journeys
            <br />
            cannot be rushed.
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="
              mt-8 md:mt-10
              text-[#EFE4D8]/72
              leading-[2]
              max-w-[320px] md:max-w-[620px]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
            }}
          >
            Every experience at Athira is shaped by
            mountain stillness, sacred rituals,
            emotional connection, and the slow rhythm
            of retreat life.
          </motion.p>

          {/* SUBTLE LINE */}
          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              duration: 1.8,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="
              mt-10 md:mt-14
              h-px w-24
              bg-[#E7DDD2]/20
              origin-left
            "
          />
        </motion.div>
      </div>
      {/* TRANSITION FOG */}
<div className="absolute bottom-0 left-0 w-full h-[24vh] pointer-events-none z-30">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#191816]/70 to-[#191816]" />

  <motion.div
    animate={{
      opacity: [0.25, 0.4, 0.25],
      y: [0, -10, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute inset-0
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]
      blur-3xl
    "
  />
</div>
    </section>
  );
};

export default Experiences;