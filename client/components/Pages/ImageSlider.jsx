import Slider from "react-slick";
import { useGetAllSlidersQuery } from "../../api/harisumiranApi";

export default function ImageSlider() {
  const { data: sliderData, error, isLoading } = useGetAllSlidersQuery();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !sliderData) {
    return <div>Failed to load Slides. Try again later.</div>;
  }

  return (
    <div className="container-fluid">
      <div className="slider-main">
        <Slider {...settings}>
          {sliderData.map((slide) => (
            <div key={slide.id}>
              <img
                src={slide.image}
                alt="travel image"
                className="slide-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
