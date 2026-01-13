import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Button from "../ui/Button.jsx";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createHotelId } from "../../utils/hotelUtils";

const Carousel = ({ name, url, photos, hotel }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = useCallback(() => {
    if (!photos || photos.length === 0) return;
    setIndex((prevIndex) => {
      return (prevIndex + 1) % photos.length;
    });
  }, [photos]);

  const handleBefore = () => {
    if (!photos || photos.length === 0) return;
    setIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  // Navigate to hotel  page
  const handleOnClick = () => {
    const hotelId = createHotelId(name);
    navigate(`/hotel/${hotelId}`, { state: { hotel } });
  };

  // Autoplay
  useEffect(() => {
    if (!photos || photos.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [photos, handleNext]);

  return (
    <div className="carousel-container">
      <img
        className="carousel-img"
        src={photos[index]}
        alt="img"
        onError={handleNext}
      />

      {photos.length > 1 && (
        <NavigateBeforeIcon
          onClick={handleBefore}
          className="navigation-icon prev"
        />
      )}

      <div className="carousel-content">
        {name && <h1>{name}</h1>}
        {url && <Button text="Reservar ahora" onClick={handleOnClick} />}
      </div>

      {photos.length > 1 && (
        <NavigateNextIcon
          onClick={handleNext}
          className="navigation-icon next"
        />
      )}
    </div>
  );
};

export default Carousel;
