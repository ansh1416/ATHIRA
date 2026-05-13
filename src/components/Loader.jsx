import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1.4,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            fixed
            inset-0
            z-[99999]

            overflow-hidden

            bg-[#0A0A0A]

            flex
            items-center
            justify-center
          "
        >
          {/* ATMOSPHERIC LIGHT */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,154,103,0.12),transparent_45%)]" />

          {/* GRAIN */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* CONTENT */}
          <div className="relative flex flex-col items-center">
            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
                letterSpacing: "0.4em",
              }}
              animate={{
                opacity: 0.95,
                y: 0,
                filter: "blur(0px)",
                letterSpacing: "0.08em",
              }}
              exit={{
                opacity: 0,
                y: -20,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-[#F5EEE6]
                uppercase
                leading-none
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontSize:
                  "clamp(5rem,12vw,10rem)",
                textShadow:
                  "0 10px 40px rgba(0,0,0,0.35)",
              }}
            >
              ATHIRA
            </motion.h1>

            {/* LINE */}
            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-6
                h-px
                w-40
                bg-[#C79A67]/40
                origin-center
              "
            />

            {/* POETIC LINE */}
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 0.7,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1.8,
                delay: 0.8,
              }}
              className="
                mt-7
                text-[#D8CEC2]/60
                text-center
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontSize:
                  "clamp(1rem,2vw,1.2rem)",
                letterSpacing: "0.12em",
              }}
            >
              In the silence of the Himalayas
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;