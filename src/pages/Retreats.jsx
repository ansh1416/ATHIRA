import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../sections/CTA";

import heroImage from "../assets/images/hero.PNG";
import villaImage from "../assets/images/gallery-villa.PNG";
import spaImage from "../assets/images/gallery-spa.PNG";
import poolImage from "../assets/images/gallery-pool.PNG";

const Retreats = () => {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#141414]">
        {/* HERO */}
        <section className="relative h-screen overflow-hidden">
          {/* BG IMAGE */}
          <img
            src={heroImage}
            alt="Athira Retreat"
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
              items-center

              px-7
              md:px-16
              lg:px-24
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
                Athira Retreat
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
                A retreat shaped
                <br />
                by silence.
              </h1>

              <p
                className="
                  mt-10
                  max-w-[620px]
                  text-[#E7DDD2]/72
                  leading-[2]
                "
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                  fontSize: "15px",
                }}
              >
                Hidden between Himalayan
                forests and mountain mist,
                Athira is designed as a slow,
                immersive escape where
                architecture, stillness, and
                emotional calm exist together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="relative px-7 md:px-16 lg:px-24 py-28 md:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
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
            >
              <p
                className="
                  uppercase
                  text-[#D8CEC2]/45
                "
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.32em",
                }}
              >
                Philosophy
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
                Luxury that
                <br />
                slows time.
              </h2>

              <div className="mt-8 w-20 h-px bg-[#D8CEC2]/15" />

              <p
                className="
                  mt-8
                  max-w-[520px]
                  text-[#D8CEC2]/70
                  leading-[2.1]
                "
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                  fontSize: "15px",
                }}
              >
                Athira was imagined as more
                than a destination. It is a
                retreat built around mountain
                rhythm, sacred quietness, warm
                textures, firelight evenings,
                and the emotional stillness
                modern life often forgets.
              </p>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 1.04,
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
                src={villaImage}
                alt="Athira Villa"
                className="
                  w-full
                  h-[52vh]
                  md:h-[80vh]
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-black/12" />
            </motion.div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="relative px-7 md:px-16 lg:px-24 pb-28 md:pb-40">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* SPA */}
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
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
              "
            >
              <img
                src={spaImage}
                alt="Athira Spa"
                className="
                  w-full
                  h-[60vh]
                  md:h-[90vh]
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-black/18" />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  p-8 md:p-10
                "
              >
                <p
                  className="
                    uppercase
                    text-white/55
                  "
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.28em",
                  }}
                >
                  Ritual Spaces
                </p>

                <h3
                  className="
                    mt-4
                    text-white
                    leading-[0.95]
                  "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontSize:
                      "clamp(2.8rem,5vw,5rem)",
                    letterSpacing: "-0.06em",
                  }}
                >
                  Crafted for
                  <br />
                  emotional calm.
                </h3>
              </div>
            </motion.div>

            {/* POOL */}
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
                delay: 0.08,
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
                src={poolImage}
                alt="Athira Pool"
                className="
                  w-full
                  h-[60vh]
                  md:h-[90vh]
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-black/20" />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  p-8 md:p-10
                "
              >
                <p
                  className="
                    uppercase
                    text-white/55
                  "
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.28em",
                  }}
                >
                  Mountain Stillness
                </p>

                <h3
                  className="
                    mt-4
                    text-white
                    leading-[0.95]
                  "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontSize:
                      "clamp(2.8rem,5vw,5rem)",
                    letterSpacing: "-0.06em",
                  }}
                >
                  Between mist,
                  <br />
                  silence, and sky.
                </h3>
              </div>
            </motion.div>
          </div>
        </section>

        {/* RITUALS */}
        <section className="relative px-7 md:px-16 lg:px-24 pb-28 md:pb-40">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
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
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              border border-white/6
              bg-white/[0.03]
              backdrop-blur-2xl
              p-8 md:p-14
            "
          >
            <div className="grid md:grid-cols-4 gap-10">
              {[
                "Morning Tea Rituals",
                "Firelight Evenings",
                "Mountain Walks",
                "Infinity Pool Silence",
              ].map((item, index) => (
                <div key={index}>
                  <p
                    className="
                      uppercase
                      text-[#D8CEC2]/35
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.3em",
                    }}
                  >
                    Ritual 0{index + 1}
                  </p>

                  <h3
                    className="
                      mt-5
                      text-[#F5EEE6]
                      leading-[1]
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontSize: "2.2rem",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default Retreats;