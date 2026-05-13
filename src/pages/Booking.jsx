import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import heroImage from "../assets/images/hero.png";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "2 Guests",
    experience: "Signature Retreat",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = () => {
const message = `
Hello Athira 

I would love to experience a retreat at Athira.

Here are my stay details:

━━━━━━━━━━━━━━━

Name: ${formData.name}

Email: ${formData.email}

Check In: ${formData.checkIn}

Check Out: ${formData.checkOut}

Guests: ${formData.guests}

Experience: ${formData.experience}

━━━━━━━━━━━━━━━

A few notes from me:

${formData.message}

Looking forward to hearing from you 
`;

    const whatsappUrl = `https://wa.me/917877253802?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#111111]">
        {/* HERO */}
        <section className="relative h-[85vh] overflow-hidden">
          <img
            src={heroImage}
            alt="Athira Booking"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#111111]" />

          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

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
                Reservation
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
                Begin your
                <br />
                retreat.
              </h1>
            </motion.div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="relative px-7 md:px-16 lg:px-24 py-24 md:py-36">
          {/* GLOW */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[#C6925C]/8 blur-[140px] rounded-full" />

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
                Athira Retreat
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
                Reserve your
                <br />
                mountain stay.
              </h2>

              <div className="mt-8 w-20 h-px bg-[#D8CEC2]/15" />

              <p
                className="
                  mt-8
                  max-w-[420px]
                  text-[#D8CEC2]/68
                  leading-[2]
                "
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                  fontSize: "15px",
                }}
              >
                Every reservation at Athira is
                personally curated to create a
                slower, quieter, and deeply
                immersive mountain experience.
              </p>
            </motion.div>

            {/* FORM */}
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
                p-7
                md:p-12
              "
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

              <div className="relative grid md:grid-cols-2 gap-6">
                {/* NAME */}
                <div>
                  <label
                    className="
                      uppercase
                      text-[#D8CEC2]/40
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.28em",
                    }}
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="
                      mt-4
                      w-full
                      bg-transparent
                      border-b border-white/10
                      pb-4
                      text-[#F5EEE6]
                      placeholder:text-[#D8CEC2]/28
                      outline-none
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    className="
                      uppercase
                      text-[#D8CEC2]/40
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.28em",
                    }}
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@email.com"
                    className="
                      mt-4
                      w-full
                      bg-transparent
                      border-b border-white/10
                      pb-4
                      text-[#F5EEE6]
                      placeholder:text-[#D8CEC2]/28
                      outline-none
                    "
                  />
                </div>

                {/* CHECK IN */}
                <div>
                  <label
                    className="
                      uppercase
                      text-[#D8CEC2]/40
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.28em",
                    }}
                  >
                    Check In
                  </label>

                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="
                      mt-4
                      w-full
                      bg-transparent
                      border-b border-white/10
                      pb-4
                      text-[#F5EEE6]
                      outline-none
                    "
                  />
                </div>

                {/* CHECK OUT */}
                <div>
                  <label
                    className="
                      uppercase
                      text-[#D8CEC2]/40
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.28em",
                    }}
                  >
                    Check Out
                  </label>

                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="
                      mt-4
                      w-full
                      bg-transparent
                      border-b border-white/10
                      pb-4
                      text-[#F5EEE6]
                      outline-none
                    "
                  />
                </div>

                {/* GUESTS */}
                <div>
                  <label
                    className="
                      uppercase
                      text-[#D8CEC2]/40
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.28em",
                    }}
                  >
                    Guests
                  </label>

                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="
                      mt-4
                      w-full
                      bg-transparent
                      border-b border-white/10
                      pb-4
                      text-[#F5EEE6]
                      outline-none
                    "
                  >
                    <option className="bg-black">
                      1 Guest
                    </option>

                    <option className="bg-black">
                      2 Guests
                    </option>

                    <option className="bg-black">
                      3 Guests
                    </option>

                    <option className="bg-black">
                      4 Guests
                    </option>
                  </select>
                </div>

                {/* EXPERIENCE */}
                <div>
                  <label
                    className="
                      uppercase
                      text-[#D8CEC2]/40
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.28em",
                    }}
                  >
                    Experience
                  </label>

                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="
                      mt-4
                      w-full
                      bg-transparent
                      border-b border-white/10
                      pb-4
                      text-[#F5EEE6]
                      outline-none
                    "
                  >
                    <option className="bg-black">
                      Signature Retreat
                    </option>

                    <option className="bg-black">
                      Wellness Escape
                    </option>

                    <option className="bg-black">
                      Romantic Stay
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="md:col-span-2 mt-6">
                  <label
                    className="
                      uppercase
                      text-[#D8CEC2]/40
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.28em",
                    }}
                  >
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your retreat..."
                    className="
                      mt-5
                      w-full
                      bg-transparent
                      border border-white/10
                      rounded-[1.5rem]
                      p-6
                      text-[#F5EEE6]
                      placeholder:text-[#D8CEC2]/28
                      outline-none
                      resize-none
                    "
                  />
                </div>

                {/* BUTTON */}
                <div className="md:col-span-2 mt-8">
                  <motion.button
                    onClick={handleBooking}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      w-full
                      rounded-full
                      bg-[#F5EEE6]
                      text-[#111111]
                      py-5
                      uppercase
                      tracking-[0.22em]
                      text-[11px]
                      shadow-[0_10px_40px_rgba(255,255,255,0.08)]
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                    }}
                  >
                    Reserve via WhatsApp
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Booking;