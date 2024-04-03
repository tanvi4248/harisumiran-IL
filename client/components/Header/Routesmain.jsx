import { Routes, Route } from "react-router-dom";
import Aboutus from "../Pages/Aboutus";
import Events from "../Pages/Events";
import Thakorjidarshan from "../Pages/Thakorjidarshan";
import Donate from "../Pages/Donate";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
export default function Routesmain() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about-us" element={<Aboutus />}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/thakorji-darshan" element={<Thakorjidarshan />}></Route>
      <Route path="/donate" element={<Donate />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
