import { Map } from "@vis.gl/react-google-maps";
import "./HotelLocation.css";

const HotelLocation = () => {
  return (
    <div className="hotel-location-map">
      <Map
        defaultZoom={15}
        defaultCenter={{ lat: 37.9838, lng: -1.1288 }}
        mapId="hotel-location-map"
      />
    </div>
  );
};

export default HotelLocation;
