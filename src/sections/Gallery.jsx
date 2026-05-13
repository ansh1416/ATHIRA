import { motion } from "framer-motion";

import villaImage from "../assets/images/gallery-villa.PNG";
import jacuzziImage from "../assets/images/gallery-jacuzzi.PNG";
import washroomImage from "../assets/images/gallery-washroom.PNG";
import poolImage from "../assets/images/gallery-pool.PNG";
import cafeImage from "../assets/images/gallery-cafe.PNG";
import spaImage from "../assets/images/gallery-spa.PNG";
import breakfastImage from "../assets/images/gallery-breakfast.PNG";
import exteriorImage from "../assets/images/gallery-exterior.PNG";
import villa from "../assets/images/hero.PNG";


const galleryItems = [
  {
    title: "Villa Bedroom",
    description:
      "Warm cedar interiors shaped around silence, mist, and slow mountain mornings.",
    image: villaImage,
  },
  {
    title: "Sacred Water Rituals",
    description:
      "Stone jacuzzis and heated waters designed for stillness beneath Himalayan skies.",
    image: jacuzziImage,
  },
  {
    title: "Architectural Calm",
    description:
      "Muted textures, warm lighting, and handcrafted spaces rooted in quiet luxury.",
    image: washroomImage,
  },
  {
    title: "Infinity Pool",
    description:
      "Floating between fog, reflection, and the endless mountain horizon.",
    image: poolImage,
  },
];

const Gallery = () => {
  return (
    <section className="relative bg-[#191816] overflow-hidden">
      {/* ATMOSPHERIC GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(185,140,92,0.10),transparent_35%)]" />

      {/* MYSTICAL AMBER LIGHT */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#C6925C]/10 blur-[140px] rounded-full" />

      {/* GRAIN */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* HERO */}
      <section className="relative px-7 md:px-16 lg:px-24 pt-28 md:pt-36">
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
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
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="relative z-20 w-full lg:w-[42%]"
          >
            <p
              className="uppercase text-[#E7DDD2]/45"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
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
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3.2rem,6vw,5.8rem)",
                letterSpacing: "-0.07em",
              }}
            >
              Spaces designed
              <br />
              for silence.
            </h2>

            <div className="mt-8 w-20 h-px bg-[#D8CEC2]/20" />

            <p
              className="
                mt-8
                max-w-[460px]
                text-[#D8CEC2]/72
                leading-[2]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
              }}
            >
              Every corner at Athira is shaped with
              warmth, stillness, and architectural calm
              — from mountain-facing villas to quiet
              spa rituals beneath the Himalayan sky.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.04,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.015,
            }}
            transition={{
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="
              relative
              w-full lg:w-[58%]
              mt-6 lg:mt-0
              overflow-hidden
              rounded-[2.5rem]
            "
          >
            <img
              src={villa}
              alt="Athira Villa"
              className="
                w-full
                h-[52vh] md:h-[78vh]
                object-cover
              "
            />

            <div className="absolute inset-0 bg-black/18" />

            {/* FLOATING LABEL */}
            <div
              className="
                absolute
                bottom-6 left-6
                backdrop-blur-md
                bg-white/[0.05]
                border border-white/10
                px-5 py-3
                rounded-full
              "
            >
              <p
                className="text-white/80 uppercase"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.24em",
                }}
              >
                Mountain Villa
              </p>
            </div>
          </motion.div>
        </div>
      </section>

     {/* STACKED CINEMATIC PANELS */}
<section className="relative px-7 md:px-16 lg:px-24 py-24 md:py-36">
  <div className="flex flex-col gap-28 md:gap-40">
    {galleryItems.map((item, index) => (
      <motion.div
        key={index}
        initial={{
          opacity: 0,
          y: 70,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
          delay: index * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
        viewport={{ once: true }}
        className={`
          relative
          flex
          flex-col
          ${
            index % 2 === 0
              ? "lg:flex-row"
              : "lg:flex-row-reverse"
          }
          items-center
          gap-10 lg:gap-20
        `}
      >
        {/* IMAGE SIDE */}
        <div className="relative w-full lg:w-[62%]">
          <motion.div
            whileHover={{
              scale: 1.015,
            }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="
                w-full
                h-[42vh]
                sm:h-[52vh]
                md:h-[82vh]
                object-cover
              "
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/18" />

            {/* FLOATING LABEL */}
            <div
              className={`
                absolute
                bottom-4 md:bottom-6
                z-20

                ${
                  index % 2 === 0
                    ? "left-4 md:left-6"
                    : "right-4 md:right-6"
                }

                backdrop-blur-xl
                bg-black/25
                border border-white/10

                px-4 md:px-5
                py-2.5 md:py-3

                rounded-full

                shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              `}
            >
              <p
                className="
                  text-white/80
                  uppercase
                  whitespace-nowrap
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.24em",
                }}
              >
                {item.title}
              </p>
            </div>
          </motion.div>
        </div>

        {/* TEXT SIDE */}
        <div className="relative w-full lg:w-[38%]">
          <p
            className="
              uppercase
              text-[#C7B6A1]/45
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
            }}
          >
            Athira Retreat
          </p>

          <h3
            className="
              mt-5
              text-[#F5EEE6]
              leading-[0.95]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem,5vw,4.5rem)",
              letterSpacing: "-0.06em",
            }}
          >
            {item.title}
          </h3>

          <div className="mt-7 w-16 h-px bg-[#D8CEC2]/20" />

          <p
            className="
              mt-7
              max-w-[420px]
              text-[#D8CEC2]/70
              leading-[2]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
            }}
          >
            {item.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* EXPERIENCE STRIP */}
      <section className="relative px-7 md:px-16 lg:px-24 pb-28 md:pb-36">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Mountain Café",
              image: cafeImage,
            },
            {
              title: "Spa Rituals",
              image: spaImage,
            },
            {
              title: "Morning Stillness",
              image: breakfastImage,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 1.3,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                rounded-[2rem]
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-[46vh]
                  object-cover
                  transition-transform duration-[2400ms]
                  hover:scale-[1.04]
                "
              />

              <div className="absolute inset-0 bg-black/18" />
              

              {/* BOTTOM OVERLAY */}
              <div
                className="
                  absolute bottom-0 left-0
                  w-full
                  p-6
                  bg-gradient-to-t
                  from-black/50
                  to-transparent
                "
              >
                <p
                  className="
                    text-white/85
                    uppercase
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.26em",
                  }}
                >
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL STILLNESS */}
      <section className="relative px-7 md:px-16 lg:px-24 pb-20 md:pb-28">
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
            duration: 1.8,
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
              h-[60vh] md:h-[90vh]
              object-cover
            "
          />

          <div className="absolute inset-0 bg-black/30" />

          {/* CONTENT */}
          <div
            className="
              absolute inset-0
              flex items-end
              px-7 md:px-14
              pb-10 md:pb-16
            "
          >
            <div className="max-w-[700px]">
              <p
                className="
                  uppercase
                  text-white/60
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
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
                  leading-[0.92]
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(3rem,6vw,5.8rem)",
                  letterSpacing: "-0.06em",
                }}
              >
                Between comfort,
                silence, and the
                mountains.
              </h3>
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default Gallery;