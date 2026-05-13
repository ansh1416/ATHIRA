import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../sections/CTA";

import villaImage from "../assets/images/gallery-villa.png";
import jacuzziImage from "../assets/images/gallery-jacuzzi.png";
import washroomImage from "../assets/images/gallery-washroom.png";
import poolImage from "../assets/images/gallery-pool.png";
import cafeImage from "../assets/images/gallery-cafe.png";
import spaImage from "../assets/images/gallery-spa.png";
import breakfastImage from "../assets/images/gallery-breakfast.png";
import exteriorImage from "../assets/images/gallery-exterior.png";

const galleryImages = [
  villaImage,
  poolImage,
  spaImage,
  jacuzziImage,
  cafeImage,
  breakfastImage,
  exteriorImage,
  washroomImage,
];

const GalleryPages = () => {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#141414]">
        {/* HERO */}
        <section className="relative h-[90vh] overflow-hidden">
          {/* BG */}
          <img
            src={villaImage}
            alt="Athira Gallery"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/45" />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#141414]" />

          {/* GRAIN */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              h-full

              flex
              items-end

              px-7
              md:px-16
              lg:px-24

              pb-20
              md:pb-28
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-[900px]"
            >
              <p
                className="
                  uppercase
                  text-[#E7DDD2]/55
                "
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.34em",
                }}
              >
                Visual Journey
              </p>

              <h1
                className="
                  mt-7
                  text-[#F5EEE6]
                  leading-[0.88]
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontSize:
                    "clamp(4rem,9vw,8rem)",
                  letterSpacing: "-0.08em",
                }}
              >
                Through the
                <br />
                world of Athira.
              </h1>
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative px-7 md:px-16 lg:px-24 py-24 md:py-32">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="max-w-[820px]"
          >
            <p
              className="
                uppercase
                text-[#D8CEC2]/40
              "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.32em",
              }}
            >
              Gallery
            </p>

            <h2
              className="
                mt-6
                text-[#F5EEE6]
                leading-[0.9]
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontSize:
                  "clamp(3rem,6vw,5.5rem)",
                letterSpacing: "-0.07em",
              }}
            >
              A cinematic collection
              <br />
              of stillness and luxury.
            </h2>

            <p
              className="
                mt-9
                max-w-[620px]
                text-[#D8CEC2]/68
                leading-[2]
              "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontSize: "15px",
              }}
            >
              Every image at Athira captures
              moments shaped by mountain mist,
              warm architecture, emotional calm,
              sacred rituals, and the slow rhythm
              of retreat life.
            </p>
          </motion.div>
        </section>

        {/* MASONRY GRID */}
        <section className="relative px-5 md:px-12 lg:px-20 pb-28 md:pb-40">
          <div className="columns-1 md:columns-2 xl:columns-3 gap-5 space-y-5">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[2.2rem]
                  break-inside-avoid
                  group
                "
              >
                {/* IMAGE */}
                <img
                  src={image}
                  alt="Athira"
                  className="
                    w-full
                    object-cover

                    transition-transform
                    duration-[2400ms]

                    group-hover:scale-[1.04]
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/12 group-hover:bg-black/6 transition-all duration-700" />

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* FULLSCREEN FEATURE */}
        <section className="relative px-7 md:px-16 lg:px-24 pb-28 md:pb-40">
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.02,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
            "
          >
            <img
              src={exteriorImage}
              alt="Athira Exterior"
              className="
                w-full
                h-[65vh]
                md:h-[95vh]
                object-cover
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/28" />

            {/* CONTENT */}
            <div
              className="
                absolute
                inset-0

                flex
                items-end

                px-7
                md:px-14

                pb-10
                md:pb-16
              "
            >
              <div className="max-w-[700px]">
                <p
                  className="
                    uppercase
                    text-white/55
                  "
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                  }}
                >
                  Athira Retreat
                </p>

                <h3
                  className="
                    mt-5
                    text-white
                    leading-[0.9]
                  "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontSize:
                      "clamp(3rem,6vw,6rem)",
                    letterSpacing: "-0.07em",
                  }}
                >
                  Where silence
                  becomes luxury.
                </h3>
              </div>
            </div>
          </motion.div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default GalleryPages;