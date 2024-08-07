import { Routes, Route } from "react-router-dom";
import Aboutus from "../Pages/Aboutus";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Events from "../Pages/Events";
import Donate from "../Pages/Donate";
import Bhagwan_swaminarayan from "../Pages/Bhagwan_swaminarayan";
import Gunatit_swami from "../Pages/Gunatit_swami";
import Shastriji from "../Pages/Shastriji";
import Yogiji from "../Pages/Yogiji";
import Hariprasad from "../Pages/Hariprasad";
import Prabodh from "../Pages/Prabodh";
export default function Routesmain() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about-us" element={<Aboutus />}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/donate" element={<Donate />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route
        path="/bhagwan_swaminarayan"
        element={<Bhagwan_swaminarayan />}
      ></Route>
      <Route path="/gunatit_swami" element={<Gunatit_swami />}></Route>
      <Route path="/shastriji" element={<Shastriji />}></Route>
      <Route path="/yogiji" element={<Yogiji />}></Route>
      <Route path="/hariprasad" element={<Hariprasad />}></Route>
      <Route path="/prabodh" element={<Prabodh />}></Route>
    </Routes>
  );
}
