import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0F0F0F]">
      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-[18vh] bg-gradient-to-b from-[#111111] to-transparent pointer-events-none" />

      {/* ATMOSPHERIC LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,159,108,0.08),transparent_35%)]" />

      {/* GRAIN */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <section className="relative px-7 md:px-16 lg:px-24 pt-24 md:pt-32 pb-10">
        {/* TOP */}
        <div className="grid lg:grid-cols-[1.4fr_0.8fr_0.8fr] gap-16 md:gap-20">
          {/* BRAND */}
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
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
          >
            <h2
              className="
                text-[#F5EEE6]
                leading-none
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(4rem,7vw,7rem)",
                letterSpacing: "-0.08em",
              }}
            >
              Athira
            </h2>

            <p
              className="
                mt-8
                max-w-[420px]
                text-[#D8CEC2]/65
                leading-[2]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
              }}
            >
              Where Himalayan silence, warm
              architecture, and slow living come
              together to create a retreat beyond
              ordinary luxury.
            </p>

            {/* SOCIAL */}
            <div className="mt-10 flex items-center gap-4">
              <motion.a
                whileHover={{
                  y: -2,
                }}
                href="#"
                className="
                  w-11 h-11
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl

                  flex items-center justify-center

                  text-[#E7DDD2]/70
                "
              >
                <FaInstagram size={16} />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -2,
                }}
                href="#"
                className="
                  w-11 h-11
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl

                  flex items-center justify-center

                  text-[#E7DDD2]/70
                "
              >
                <Mail size={16} />
              </motion.a>
            </div>
          </motion.div>

          {/* NAVIGATION */}
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
              duration: 1.2,
              delay: 0.08,
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
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.3em",
              }}
            >
              Navigation
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {[
                "Home",
                "Experiences",
                "Gallery",
                "Testimonials",
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{
                    x: 4,
                  }}
                  href="#"
                  className="
                    flex items-center gap-2
                    text-[#F5EEE6]
                  "
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {item}

                  <ArrowUpRight
                    size={16}
                    className="opacity-50"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CONTACT */}
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
              duration: 1.2,
              delay: 0.16,
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
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.3em",
              }}
            >
              Contact
            </p>

            <div className="mt-8 space-y-7">
              <div>
                <p
                  className="text-[#F5EEE6]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    letterSpacing: "-0.04em",
                  }}
                >
                  reservations@athira.com
                </p>

                <p
                  className="
                    mt-2
                    text-[#D8CEC2]/50
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                  }}
                >
                  Reservation Enquiries
                </p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="
                    mt-1
                    text-[#C79A67]/70
                  "
                />

                <p
                  className="
                    max-w-[220px]
                    text-[#D8CEC2]/65
                    leading-[1.9]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                  }}
                >
                  Hidden within the Himalayan
                  valleys, surrounded by cedar
                  forests and mountain silence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="mt-20 h-px w-full bg-white/6" />

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="
              text-[#D8CEC2]/38
              text-center md:text-left
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.08em",
            }}
          >
            © 2026 Athira Retreat. Crafted for
            stillness in the Himalayas.
          </p>

          <p
            className="
              uppercase
              text-[#D8CEC2]/28
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.28em",
            }}
          >
            Slow Living • Mountain Silence • Sacred Calm
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;