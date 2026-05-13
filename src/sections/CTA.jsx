import { motion } from "framer-motion";
import ctaImage from "../assets/images/hero.PNG";
import { useNavigate } from "react-router-dom";



const CTA = () => {
  const navigate = useNavigate();
  return (
    <section id="cta"
     className="relative overflow-hidden bg-[#111111]">
      {/* IMAGE BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={ctaImage}
          alt="Athira Retreat"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

        {/* TOP GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-black/20 to-[#111111]" />
      </div>

      {/* ATMOSPHERIC LIGHT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-[#C6925C]/10 blur-[160px] rounded-full" />

      {/* GRAIN */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <section className="relative min-h-screen flex items-center justify-center px-7 md:px-16 lg:px-24 py-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="
            relative
            max-w-[1000px]
            text-center
          "
        >
          {/* MINI LABEL */}
          <p
            className="
              uppercase
              text-[#E7DDD2]/55
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.34em",
            }}
          >
            Athira Retreat
          </p>

          {/* TITLE */}
          <h2
            className="
              mt-8
              text-[#F5EEE6]
              leading-[0.88]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(4rem,9vw,8rem)",
              letterSpacing: "-0.08em",
            }}
          >
            Escape into
            <br />
            mountain stillness.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-10
              mx-auto
              max-w-[760px]
              text-[#E7DDD2]/75
              leading-[2]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
            }}
          >
            Athira is more than a stay — it is a slow,
            immersive retreat shaped by Himalayan
            silence, warm architecture, sacred calm,
            and unforgettable mountain experiences.
          </p>

          {/* BUTTONS */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* PRIMARY BUTTON */}
            <motion.button
            onClick={() => navigate("/booking")}
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                overflow-hidden
                rounded-full
                px-9 md:px-10
                py-4
                bg-[#F5EEE6]
                text-[#111111]
                font-medium
                tracking-[0.18em]
                uppercase
                text-[11px]

                shadow-[0_10px_40px_rgba(255,255,255,0.08)]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Book Your Retreat
            </motion.button>

            {/* SECONDARY BUTTON */}
            <motion.button
            onClick={() => navigate("/retreats")}
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                rounded-full
                px-9 md:px-10
                py-4

                border border-white/10
                backdrop-blur-xl

                bg-black/20

                text-[#F5EEE6]

                tracking-[0.18em]
                uppercase
                text-[11px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Step Into Silence
            </motion.button>
          </div>

          {/* BOTTOM STATS */}
          <div className="mt-20 grid grid-cols-3 gap-6 md:gap-10">
            {[
              {
                value: "1",
                label: "Signature Villa",
              },
              {
                value: "4.9",
                label: "Guest Rating",
              },
              {
                value: "∞",
                label: "Mountain Silence",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
              >
                <h3
                  className="text-[#F5EEE6]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2rem,4vw,3.5rem)",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-2
                    uppercase
                    text-[#D8CEC2]/45
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.26em",
                  }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default CTA;