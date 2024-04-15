import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Slider from "./Slider";
import YouTubeChannel from "./YouTubeChannel";
import Timing from "./Timing";
import Atiming from "./Atiming";
import Ttiming from "./Ttiming";
import Stiming from "./Stiming";
import Address from "./Address";
import Footerbottom from "../Footer/Footerbottom";
export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <div className="timing-main flex justify-center -mx-3">
        <Timing></Timing>
        <Atiming></Atiming>
        <Ttiming></Ttiming>
        <Stiming></Stiming>
      </div>
      <YouTubeChannel channelId="UCizha79cD_LOFJoZbREl0Gg" />
      <Address></Address>
      <Footerbottom></Footerbottom>
    </div>
  );
}
