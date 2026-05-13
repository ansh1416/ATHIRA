import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Mehta",
    location: "Mumbai, India",
    rating: "4.9/5",
    quote:
      "Athira didn’t feel like a resort. It felt like silence finally found a home. Every morning carried a strange calm I haven’t felt in years.",
  },
  {
    name: "Sophia Bennett",
    location: "London, UK",
    rating: "5/5",
    quote:
      "The architecture, the stillness, and the warmth of the mountains made Athira feel deeply personal. It stays with you long after you leave.",
  },
  {
    name: "Ishaan Kapoor",
    location: "Delhi, India",
    rating: "4.8/5",
    quote:
      "At night the retreat glows like a hidden sanctuary in the mountains. One of the most beautiful places I’ve ever experienced.",
  },
  {
    name: "Elena Rossi",
    location: "Milan, Italy",
    rating: "4.9/5",
    quote:
      "The silence here feels luxurious. Every detail — the textures, the firelight, the mist — feels intentional and calming.",
  },
  {
    name: "Kabir Malhotra",
    location: "Bangalore, India",
    rating: "5/5",
    quote:
      "Athira slowed time for me. Waking up to mountain fog and warm cedar interiors felt unreal.",
  },
  {
    name: "Mia Thompson",
    location: "New York, USA",
    rating: "4.7/5",
    quote:
      "The retreat feels cinematic in the best way possible. Minimal, emotional, and deeply peaceful.",
  },
  {
    name: "Yuki Tanaka",
    location: "Kyoto, Japan",
    rating: "4.9/5",
    quote:
      "Everything about Athira feels balanced — architecture, nature, lighting, and silence existing together beautifully.",
  },
  {
    name: "Reyansh Verma",
    location: "Jaipur, India",
    rating: "5/5",
    quote:
      "The infinity pool at dusk with the mountain skyline behind it is something I’ll never forget.",
  },
];

const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#141414] py-28 md:py-36">
      {/* ATMOSPHERIC LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,159,108,0.08),transparent_35%)]" />

      {/* GRAIN */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-[18vh] bg-gradient-to-b from-[#191816] to-transparent pointer-events-none" />

      {/* HEADER */}
      <div className="relative px-7 md:px-16 lg:px-24 max-w-[1000px]">
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
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
        >
          <p
            className="uppercase text-[#D8CEC2]/45"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.32em",
            }}
          >
            Guest Reflections
          </p>

          <h2
            className="mt-6 text-[#F5EEE6] leading-[0.92]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.2rem,6vw,6rem)",
              letterSpacing: "-0.07em",
            }}
          >
            Stories carried
            <br />
            home from Athira.
          </h2>

          <p
            className="mt-8 max-w-[620px] text-[#D8CEC2]/68 leading-[2]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
            }}
          >
            Every stay leaves behind something unforgettable — mountain stillness,
            emotional calm, and memories shaped by warmth and silence.
          </p>
        </motion.div>
      </div>

      {/* MARQUEE */}
      <div className="relative mt-20 overflow-hidden">
        {/* SIDE FADES */}
        <div className="absolute left-0 top-0 z-20 h-full w-24 md:w-40 bg-gradient-to-r from-[#141414] to-transparent" />

        <div className="absolute right-0 top-0 z-20 h-full w-24 md:w-40 bg-gradient-to-l from-[#141414] to-transparent" />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 md:gap-8 w-max"
        >
          {duplicatedTestimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                relative
                shrink-0
                w-[86vw]
                sm:w-[440px]
                md:w-[520px]
                overflow-hidden
                rounded-[2rem]
                border border-white/8
                bg-white/[0.03]
                backdrop-blur-xl
                p-7 md:p-10
              "
            >
              {/* CARD LIGHT */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

              {/* RATING */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-1">

                {[...Array(5)].map((_, i) => {
                  const numericRating = parseFloat(item.rating);
                  const fullStars = Math.floor(numericRating);
                  const hasHalfStar = numericRating % 1 >= 0.5;

                  // FULL STAR
                  if (i < fullStars) {
                    return (
                      <Star
                        key={i}
                        size={14}
                        className="fill-[#C79A67] text-[#C79A67]"
                      />
                    );
                  }

                  // HALF STAR
                  if (i === fullStars && hasHalfStar) {
                    return (
                      <div key={i} className="relative">
                        {/* EMPTY STAR */}
                        <Star
                          size={14}
                          className="text-[#C79A67]/30"
                        />

                        {/* HALF FILLED */}
                        <div className="absolute inset-0 overflow-hidden w-1/2">
                          <Star
                            size={14}
                            className="fill-[#C79A67] text-[#C79A67]"
                          />
                        </div>
                      </div>
                    );
                  }

                  // EMPTY STAR
                  return (
                    <Star
                      key={i}
                      size={14}
                      className="text-[#C79A67]/30"
                    />
                  );
                })}
                </div>

                <p
                  className="text-[#D8CEC2]/80"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                  }}
                >
                  {item.rating}
                </p>
              </div>

              {/* QUOTE MARK */}
              <div
                className="mt-5 text-[#C79A67]/50 leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "5rem",
                }}
              >
                “
              </div>

              {/* QUOTE */}
              <p
                className="relative z-10 -mt-4 text-[#E7DDD2]/82 leading-[2]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                }}
              >
                {item.quote}
              </p>

              {/* LINE */}
              <div className="mt-10 w-16 h-px bg-[#D8CEC2]/12" />

              {/* NAME */}
              <div className="mt-7">
                <h3
                  className="text-[#C79A67]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.name}
                </h3>

                <p
                  className="mt-1 uppercase text-[#D8CEC2]/38"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.28em",
                  }}
                >
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
