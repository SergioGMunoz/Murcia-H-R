import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

const HotelLocation = ({ coords }) => {
  console.log("Coords: ", coords);
  return (
    <div className="hotel-location-map">
      <Map defaultZoom={18} defaultCenter={coords} mapId="hotel">
        <AdvancedMarker position={coords}>
          <Pin
            background={"#b88e2f"}
            borderColor={"#b88e2f"}
            glyphColor={"#ffffff"}
          />
        </AdvancedMarker>
      </Map>
    </div>
  );
};

export default HotelLocation;
