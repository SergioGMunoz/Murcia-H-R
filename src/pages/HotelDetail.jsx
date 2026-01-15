import { useLocation, useNavigate } from "react-router-dom";
import notImg from "../assets/img/not-img.png";
import Button from "../components/ui/Button";
import Error from "../components/ui/Error";
import InfoItem from "../components/ui/InfoItem";
import HotelLocation from "../components/Map/HotelLocation";
import { parseHotelCoordinates } from "../utils/coordinatesUtils";

const HotelDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const hotel = state?.hotel;

  console.log("HOTEL A MOSTRAR", hotel);

  // Render error 404 if hotel not found in state
  if (!hotel) {
    return (
      <div className="hotel-detail-container">
        <Error
          message="404 - Hotel no encontrado"
          onTryAgain={() => navigate("/")}
        />
      </div>
    );
  }

  // search api for photos
  const getPhotos = () => {
    if (!hotel) return [notImg];

    const photos = [];
    Object.keys(hotel).forEach((key) => {
      if (key.match(/^Foto \d+$/)) {
        const photoUrl = hotel[key];

        // If not empty
        if (photoUrl && photoUrl.trim() !== "") {
          photos.push(photoUrl.trim());
        }
      }
    });

    return photos.length > 0 ? photos.slice(0, 4) : [notImg];
  };

  const photos = getPhotos();

  // fields to render
  const fields = [
    "Dirección",
    "Municipio",
    "Código Postal",
    "Teléfono",
    "Email",
    "Web",
    "Categoría",
    "Habitaciones",
    "Plazas",
    "Descripción",
  ];

  // go to the htel page
  const handleReserveNow = () => {
    const url = hotel["URL Real"] || hotel["URL Corta"] || "";
    if (url) {
      window.open(`https://${url}`, "_blank");
    }
  };

  return (
    <div className="hotel-detail-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Volver
      </button>

      <div className="hotel-detail-header">
        <h1>{hotel.Nombre || "Hotel sin nombre"}</h1>
      </div>

      <div className="hotel-detail-photos">
        {photos.map((photo, index) => (
          <div key={index} className="hotel-photo">
            <img
              src={photo}
              alt={`${hotel.Nombre} - Foto ${index + 1}`}
              onError={(e) => {
                if (e.currentTarget.src !== notImg) {
                  e.currentTarget.src = notImg;
                }
              }}
            />
          </div>
        ))}
      </div>

      <div className="hotel-detail-info">
        <div className="info-section">
          <h2>Información del Hotel</h2>

          {fields.map((key) => {
            if (key === "Dirección") {
              const coords = parseHotelCoordinates(
                hotel["Latitud"],
                hotel["Longitud"]
              );
              return (
                <div key={key}>
                  <InfoItem label={key} value={hotel[key]} />
                  {/* If have coordinates */}
                  {coords && (
                    <div className="hotel-location-container">
                      <h3>Ubicación</h3>
                      <HotelLocation coords={coords} />
                    </div>
                  )}
                </div>
              );
            }
            return <InfoItem key={key} label={key} value={hotel[key]} />;
          })}
        </div>

        <div className="hotel-actions">
          <Button text="Reservar Ahora" onClick={handleReserveNow} />
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
