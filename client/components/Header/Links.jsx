import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div id="nav-links">
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
        Home
      </Link>
      <Link to="/about-us" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
        About us
      </Link>
      <Link to="/events" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
        Events
      </Link>
      <Link
        to="/thakorji-darshan"
        className="block mt-4 lg:inline-block lg:mt-0 mr-4"
      >
        Thakorji Darshan
      </Link>
      <Link to="/donate" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
        Donate
      </Link>
      <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
        Contact
      </Link>
    </div>
  );
}
