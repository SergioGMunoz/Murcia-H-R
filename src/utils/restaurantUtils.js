import { parseHotelCoordinates } from "./coordinatesUtils";

// Filter restaurants by CP
export const filterRestaurantsByCP = (restaurants, postalCode) => {
  if (!restaurants || !postalCode) return [];

  return restaurants
    .filter((r) => r["C.P."] === postalCode)
    .map((r) => {
      const { Latitud, Longitud } = r;
      console.log(`Restaurant ${r["Nombre"]}: Lat=${Latitud}, Lng=${Longitud}`);
      const coords = parseHotelCoordinates(Latitud, Longitud);
      const name = r["Nombre"];
      return { name, coords };
    })
    // Filter not null coords 
    .filter((r) => r.coords !== null); 
};
