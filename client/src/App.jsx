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
        <Link to="/">
          <img id="logo-image" src={logo} />
        </Link>
        <Links />
      </div>
      <div className="main-container">
        <Routesmain />
      </div>
    </>
  );
}

export default App;
