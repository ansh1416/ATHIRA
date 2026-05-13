import { motion, AnimatePresence } from "framer-motion";
import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useEffect, useState } from "react";

import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Retreat",
    path: "/retreats",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Booking",
    path: "/booking",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const location = useLocation();

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* CLOSE MENU ON ROUTE CHANGE */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* LOCK BODY SCROLL */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{
          
          opacity: 0,
        }}
        animate={{
          
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          fixed
          top-0
          left-0
          w-full
          z-[999]
          transition-all
          duration-500

          ${
            scrolled
              ? "py-4"
              : "py-6"
          }
        `}
      >
        <div
          className="
            px-5
            md:px-10
            lg:px-16
          "
        >
          <div
            className={`
              relative
              flex
              items-center
              justify-between

              rounded-full

              border
              border-white/10

              transition-all
              duration-500

              ${
                scrolled
                  ? `
                    bg-black/40
                    backdrop-blur-2xl

                    shadow-[0_10px_40px_rgba(0,0,0,0.28)]

                    px-5 md:px-7
                    py-4
                  `
                  : `
                    bg-black/15
                    backdrop-blur-xl

                    px-5 md:px-7
                    py-5
                  `
              }
            `}
          >
            {/* LOGO */}
            <motion.div
  onClick={() => {
    navigate("/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}

  className="cursor-pointer"
>
              <motion.h1
                whileHover={{
                  opacity: 0.85,
                }}
                className="
                  text-[#F5EEE6]
                  leading-none
                  uppercase
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontSize:
                    "clamp(2rem,3vw,3rem)",
                  letterSpacing: "-0.08em",
                }}
              >
                Athira
              </motion.h1>
            </motion.div>

            {/* DESKTOP NAV */}
            <div
              className="
                hidden
                lg:flex
                items-center
                gap-8
              "
            >
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className="relative"
                >
                  {({ isActive }) => (
                    <motion.div
                      whileHover={{
                        y: -1,
                      }}
                      className="
                        relative
                        flex
                        flex-col
                        items-center
                      "
                    >
                      <span
                        className={`
                          uppercase
                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? "text-[#F5EEE6]"
                              : "text-[#D8CEC2]/60"
                          }
                        `}
                        style={{
                          fontFamily:
                            "'Inter', sans-serif",
                          fontSize: "11px",
                          letterSpacing: "0.24em",
                        }}
                      >
                        {item.name}
                      </span>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            layoutId="navbar-indicator"
                            initial={{
                              opacity: 0,
                              width: 0,
                            }}
                            animate={{
                              opacity: 1,
                              width: "100%",
                            }}
                            exit={{
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.4,
                            }}
                            className="
                              absolute
                              -bottom-3
                              h-px
                              bg-[#C79A67]
                            "
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </NavLink>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:block">
              <motion.button
              onClick={() => navigate("/booking")}
                whileHover={{
                  scale: 1.03,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  rounded-full
                  border
                  border-white/10

                  bg-white/[0.04]
                  backdrop-blur-xl

                  px-6
                  py-3

                  text-[#F5EEE6]
                  uppercase
                  tracking-[0.2em]
                  text-[10px]
                "
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                }}
              >
                Book Retreat
              </motion.button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="
                lg:hidden
                text-[#F5EEE6]
              "
            >
              {mobileOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              fixed
              inset-0
              z-[998]

              overflow-hidden

              bg-[#0A0A0A]
            "
          >
            {/* ATMOSPHERIC LIGHT */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,154,103,0.12),transparent_45%)]" />

            {/* GRAIN */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* CONTENT */}
            <div
              className="
                relative
                h-full

                flex
                flex-col
                justify-between

                px-7
                pt-32
                pb-12
              "
            >
              {/* TOP */}
              <div>
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <NavLink
                      to={item.path}
                    >
                      {({ isActive }) => (
                        <motion.div
                          whileTap={{
                            scale: 0.98,
                          }}
                          className="
                            group

                            flex
                            items-center
                            justify-between

                            border-b
                            border-white/6

                            py-7
                          "
                        >
                          <h2
                            className={`
                              leading-none
                              transition-all
                              duration-500

                              ${
                                isActive
                                  ? "text-[#F5EEE6]"
                                  : "text-[#D8CEC2]/65"
                              }

                              group-hover:text-[#F5EEE6]
                            `}
                            style={{
                              fontFamily:
                                "'Cormorant Garamond', serif",
                              fontSize:
                                "clamp(3rem,12vw,5rem)",
                              letterSpacing:
                                "-0.07em",
                            }}
                          >
                            {item.name}
                          </h2>

                          <ArrowUpRight
                            size={24}
                            className="
                              text-[#D8CEC2]/25

                              transition-all
                              duration-500

                              group-hover:text-[#C79A67]
                              group-hover:translate-x-1
                              group-hover:-translate-y-1
                            "
                          />
                        </motion.div>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* BOTTOM */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                }}
                className="
                  flex
                  flex-col
                  gap-8
                "
              >
                {/* CTA */}
                <motion.button
                  whileTap={{
                    scale: 0.97,
                  }}
                  whileHover={{
                    scale: 1.01,
                  }}
                  className="
                    w-full

                    rounded-full

                    bg-[#F5EEE6]
                    text-[#111111]

                    py-5

                    uppercase
                    tracking-[0.24em]
                    text-[10px]

                    shadow-[0_10px_40px_rgba(255,255,255,0.08)]
                  "
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Begin Your Retreat
                </motion.button>

                {/* SMALL TEXT */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <p
                    className="
                      text-[#D8CEC2]/35
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                    }}
                  >
                    Himalayan Retreat
                  </p>

                  <p
                    className="
                      text-[#D8CEC2]/25
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                    }}
                  >
                    ATHIRA
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;