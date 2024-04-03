import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Slider from "./Slider";
import YouTubeChannel from "./YouTubeChannel";

export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <YouTubeChannel channelId="UCizha79cD_LOFJoZbREl0Gg" />
    </div>
  );
}
