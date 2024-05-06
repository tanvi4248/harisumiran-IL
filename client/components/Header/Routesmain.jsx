import { Routes, Route } from "react-router-dom";
import Aboutus from "../Pages/Aboutus";
import Gallery from "../Pages/Gallery";
import Donate from "../Pages/Donate";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Events from "../Pages/Events";
export default function Routesmain() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about-us" element={<Aboutus />}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/donate" element={<Donate />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
