import "./App.css";
import Routesmain from "../components/Header/Routesmain";
import Links from "../components/Header/Links";
import logo from "./assets/harisumiran-logo.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div
        id="header"
        className="flex items-center justify-between flex-wrap py-4 px-8"
      >
        <div className="flex items-center justify-between flex-wrap flex-row">
          <Link to="/">
            <img id="logo-image" src={logo} />
          </Link>
          <Links />
        </div>
        <div>
          <Link to="/donate">
            <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
              Donate
            </button>
          </Link>
        </div>
      </div>
      <div className="main-container">
        <Routesmain />
      </div>
    </>
  );
}

export default App;
