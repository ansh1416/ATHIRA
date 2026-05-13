import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import heroImage from "../assets/images/hero.PNG";

const Contact = () => {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#111111]">
        {/* HERO */}
        <section className="relative h-[80vh] overflow-hidden">
          {/* BG */}
          <img
            src={heroImage}
            alt="Athira Contact"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#111111]" />

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
                Contact Athira
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
                Let the mountains
                <br />
                find you.
              </h1>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="relative px-7 md:px-16 lg:px-24 py-24 md:py-36">
          {/* ATMOSPHERIC GLOW */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[#C6925C]/8 blur-[150px] rounded-full" />

          <div className="relative grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24">
            {/* LEFT */}
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
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
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
                Reach Out
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
                Begin the
                <br />
                conversation.
              </h2>

              <div className="mt-8 w-20 h-px bg-[#D8CEC2]/15" />

              <p
                className="
                  mt-8
                  max-w-[450px]
                  text-[#D8CEC2]/68
                  leading-[2]
                "
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                  fontSize: "15px",
                }}
              >
                Whether you are planning a quiet
                retreat, a romantic escape, or a
                slow mountain experience, we are
                here to personally guide your
                journey into Athira.
              </p>

              {/* CONTACT INFO */}
              <div className="mt-14 space-y-10">
                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      w-12 h-12
                      rounded-full
                      border border-white/10
                      bg-white/[0.03]

                      flex items-center justify-center
                    "
                  >
                    <Mail
                      size={16}
                      className="text-[#C79A67]"
                    />
                  </div>

                  <div>
                    <p
                      className="
                        uppercase
                        text-[#D8CEC2]/35
                      "
                      style={{
                        fontFamily:
                          "'Inter', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.28em",
                      }}
                    >
                      Email
                    </p>

                    <h3
                      className="
                        mt-3
                        text-[#F5EEE6]
                      "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                        fontSize: "2rem",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      hello@athira.com
                    </h3>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      w-12 h-12
                      rounded-full
                      border border-white/10
                      bg-white/[0.03]

                      flex items-center justify-center
                    "
                  >
                    <Phone
                      size={16}
                      className="text-[#C79A67]"
                    />
                  </div>

                  <div>
                    <p
                      className="
                        uppercase
                        text-[#D8CEC2]/35
                      "
                      style={{
                        fontFamily:
                          "'Inter', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.28em",
                      }}
                    >
                      WhatsApp
                    </p>

                    <h3
                      className="
                        mt-3
                        text-[#F5EEE6]
                      "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                        fontSize: "2rem",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      +91 98765 43210
                    </h3>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      w-12 h-12
                      rounded-full
                      border border-white/10
                      bg-white/[0.03]

                      flex items-center justify-center
                    "
                  >
                    <MapPin
                      size={16}
                      className="text-[#C79A67]"
                    />
                  </div>

                  <div>
                    <p
                      className="
                        uppercase
                        text-[#D8CEC2]/35
                      "
                      style={{
                        fontFamily:
                          "'Inter', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.28em",
                      }}
                    >
                      Location
                    </p>

                    <h3
                      className="
                        mt-3
                        max-w-[300px]
                        text-[#F5EEE6]
                        leading-[1]
                      "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                        fontSize: "2rem",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      Hidden within the
                      Himalayan valleys.
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CARD */}
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
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]

                border border-white/8

                bg-white/[0.03]
                backdrop-blur-2xl

                p-8
                md:p-14
              "
            >
              {/* LIGHT */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

              <div className="relative">
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
                  Social Presence
                </p>

                <h2
                  className="
                    mt-6
                    text-[#F5EEE6]
                    leading-[0.92]
                  "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontSize:
                      "clamp(3rem,5vw,5rem)",
                    letterSpacing: "-0.06em",
                  }}
                >
                  Follow the
                  <br />
                  stillness.
                </h2>

                <p
                  className="
                    mt-8
                    max-w-[480px]
                    text-[#D8CEC2]/65
                    leading-[2]
                  "
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Explore moments from Athira —
                  mountain mornings, warm
                  interiors, misty evenings, and
                  slow retreat rituals captured
                  through our visual journal.
                </p>

                {/* INSTAGRAM */}
                <motion.a
                  whileHover={{
                    y: -2,
                  }}
                  href="#"
                  className="
                    mt-12

                    flex
                    items-center
                    justify-between

                    rounded-full

                    border border-white/10

                    bg-black/20
                    backdrop-blur-xl

                    px-7
                    py-5
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        w-12 h-12
                        rounded-full
                        bg-white/[0.04]

                        flex items-center justify-center
                      "
                    >
                      <FaInstagram
                        size={18}
                        className="text-[#C79A67]"
                      />
                    </div>

                    <div>
                      <p
                        className="
                          uppercase
                          text-[#D8CEC2]/35
                        "
                        style={{
                          fontFamily:
                            "'Inter', sans-serif",
                          fontSize: "10px",
                          letterSpacing: "0.28em",
                        }}
                      >
                        Instagram
                      </p>

                      <h3
                        className="
                          mt-2
                          text-[#F5EEE6]
                        "
                        style={{
                          fontFamily:
                            "'Cormorant Garamond', serif",
                          fontSize: "2rem",
                          letterSpacing: "-0.04em",
                        }}
                      >
                        @athira.retreat
                      </h3>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="text-[#D8CEC2]/40"
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;