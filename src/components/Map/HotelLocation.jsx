import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";


const HotelLocation = ({ coords, nearRestaurants }) => {
  console.log("Coords: ", coords);
  console.log("Near Restuaurants: ", nearRestaurants);

  return (
    <div className="hotel-location-map">
      <Map defaultZoom={14} defaultCenter={coords} mapId="hotel">
        {/* Hotel Pin */}
        <AdvancedMarker position={coords}>
          <Pin
            background={"#b88e2f"}
            borderColor={"#b88e2f"}
            glyphColor={"#ffffff"}
          > 
          Hotel
          </Pin>
        </AdvancedMarker>

        {/* Restaurant Pins */}
        {nearRestaurants && nearRestaurants.map((restaurant, index) => (
          restaurant.coords && (
            <AdvancedMarker key={index} position={restaurant.coords}>
              <Pin
                background={"#8c8c8c"}
                borderColor={"#8c8c8c"}
                glyphColor={"#ffffff"}
              >
                  {restaurant.name}
              </Pin>
            </AdvancedMarker>
          )
        ))}
      </Map>
    </div>
  );
};

export default HotelLocation;
