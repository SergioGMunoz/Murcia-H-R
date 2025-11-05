import { useState, useEffect, useCallback } from "react";

interface CarouselProps {
  name: string;
  url: string;
  photos: string[];
}

const Carousel = ({ name, url, photos }: CarouselProps) => {
  const [index, setIndex] = useState(0);

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

  const handleOnClick = () => {
    window.open(`https://${url}`, "_blank");
  };

  useEffect(() => {
    if (!photos || photos.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

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
        <svg 
          onClick={handleBefore}
          className="navigation-icon prev"
          viewBox="0 0 24 24"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
        </svg>
      )}

      <div className="carousel-content">
        {name && <h1>{name}</h1>}
        {url && <button className="primary-button" onClick={handleOnClick}>Reservar ahora</button>}
      </div>

      {photos.length > 1 && (
        <svg 
          onClick={handleNext}
          className="navigation-icon next"
          viewBox="0 0 24 24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
        </svg>
      )}
    </div>
  );
};

export default Carousel;
