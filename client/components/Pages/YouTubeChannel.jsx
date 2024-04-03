import { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import OwlCarousel from "react-owl-carousel2";

// eslint-disable-next-line react/prop-types
const YouTubeChannel = ({ channelId }) => {
  const [videos, setVideos] = useState([]);
  const options = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true,
  };
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=AIzaSyBV94yPCnlrDAeh_7CQCrS2QuqvihmA_Nc`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [channelId]);

  return (
    <div>
      <h1>Recent Events</h1>
      <OwlCarousel className="owl-carousel owl-theme" options={options}>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <YouTube videoId={video.id.videoId} />
            <h2>{video.snippet.title}</h2>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default YouTubeChannel;
