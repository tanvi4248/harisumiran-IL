import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./ImageSlider";
import YouTubeChannel from "./YouTubeChannel";
import Timing from "./Timing";
import Atiming from "./Atiming";
import Ttiming from "./Ttiming";
import Stiming from "./Stiming";
import Footerbottom from "../Footer/Footerbottom";
import Banner from "./Banner";
import UpcomingEvents from "./UpcomingEvents";
import Founder from "./Founder";
export default function Home() {
  return (
    <div>
      <ImageSlider></ImageSlider>
      <Banner></Banner>
      <div className="container">
        <UpcomingEvents></UpcomingEvents>
        <div className="timing-main flex justify-center -mx-3 mb-8">
          <Timing></Timing>
          <Atiming></Atiming>
          <Ttiming></Ttiming>
          <Stiming></Stiming>
        </div>
        <Founder></Founder>
        <YouTubeChannel channelId="UCizha79cD_LOFJoZbREl0Gg" />
      </div>
      <Footerbottom></Footerbottom>
    </div>
  );
}
