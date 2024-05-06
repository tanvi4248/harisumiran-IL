import OwlCarousel from "react-owl-carousel2";
import { useGetAllSlidersQuery } from "../../api/harisumiranApi";

export default function Slider() {
  const { data: sliderData, error, isLoading } = useGetAllSlidersQuery();
  const options = {
    items: 1,
    nav: false,
    rewind: true,
    autoplay: true,
    loop: true,
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
        <OwlCarousel
          className="owl-carousel owl-theme slider"
          options={options}
        >
          {sliderData.map((slide) => {
            return (
              <div key={slide.id}>
                <img
                  src={slide.image}
                  alt="travel image"
                  className="slide-image"
                />
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
}
