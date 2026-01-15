import * as utm from "utm";

// LIbrería UTM Convierte coordenadas UTM zona a  geográficas
export const parseHotelCoordinates = (latStr, lngStr) => {
  if (!latStr || !lngStr) {
    return null;
  }
  const north = parseFloat(latStr);
  const east = parseFloat(lngStr);

  try {
    const result = utm.toLatLon(east, north, 30, "N");
    return {
      lat: result.latitude,
      lng: result.longitude
    };
  } catch (error) {
    console.error("Error convirtiendo coordenadas UTM:", error);
    return null;
  }
};
