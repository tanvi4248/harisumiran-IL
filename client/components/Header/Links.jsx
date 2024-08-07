import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div id="nav-links" className="ml-8">
      <Link
        to="/about-us"
        className="block mt-4 lg:inline-block lg:mt-0 mr-4 font-medium text-secondary"
      >
        About us
      </Link>
      <Link
        to="/events"
        className="block mt-4 lg:inline-block lg:mt-0 mr-4 font-medium text-secondary"
      >
        Events
      </Link>
      <Link
        to="/gallery"
        className="block mt-4 lg:inline-block lg:mt-0 mr-4 font-medium text-secondary"
      >
        Gallery
      </Link>

      <Link
        to="/contact"
        className="block mt-4 lg:inline-block lg:mt-0 mr-4 font-medium text-secondary"
      >
        Contact Us
      </Link>
    </div>
  );
}
