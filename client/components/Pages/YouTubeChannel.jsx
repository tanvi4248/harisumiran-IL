import { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import OwlCarousel from "react-owl-carousel2";

// eslint-disable-next-line react/prop-types
const YouTubeChannel = ({ channelId }) => {
  const [videos, setVideos] = useState([]);
  const options = {
    items: 3,
    nav: false,
    rewind: true,
    autoplay: true,
    loop: true,
  };
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=6&order=date&type=video&key=AIzaSyBV94yPCnlrDAeh_7CQCrS2QuqvihmA_Nc`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [channelId]);

  return (
    <div className="latest-post-main">
      <h1 className="font-['Playfair_Display'] text-title mb-3">
        Recent Events
      </h1>
      <div className="latest-post -mx-3">
        <OwlCarousel className="owl-carousel owl-theme" options={options}>
          {videos.map((video) => (
            <div key={video.id.videoId} className="px-3">
              <YouTube
                videoId={video.id.videoId}
                className="video rounded-lg overflow-hidden"
                opts={{ width: "100%", height: "210px" }}
              />
              <p className="pt-2 text-base font-medium">
                {video.snippet.title}
              </p>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default YouTubeChannel;
