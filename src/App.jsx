import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "./components/Loader";

import Home from "./pages/Home";
import Retreats from "./pages/Retreats";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import GalleryPages from "./pages/GalleryPages";

const App = () => {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/retreats"
          element={<Retreats />}
        />

        <Route
          path="/gallery"
          element={<GalleryPages />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </>
  );
};

export default App;