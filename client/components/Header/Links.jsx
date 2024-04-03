import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div id="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about-us">About us</Link>
      <Link to="/events">Events</Link>
      <Link to="/thakorji-darshan">Thakorji Darshan</Link>
      <Link to="/donate">Donate</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
