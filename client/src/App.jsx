import "./App.css";
import Routesmain from "../components/Header/Routesmain";
import Links from "../components/Header/Links";
import logo from "./assets/harisumiran-logo.png";
function App() {
  return (
    <>
      <div id="header">
        <img id="logo-image" src={logo} />
        <Links />
      </div>
      <div className="main-container">
        <Routesmain />
      </div>
    </>
  );
}

export default App;
