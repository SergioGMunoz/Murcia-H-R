import * as utm from "utm";

// LIbrería UTM Convierte coordenadas UTM zona a  geográficas
export const parseHotelCoordinates = (latStr, lngStr) => {
  if (!latStr || !lngStr) return null;

  const north = parseFloat(latStr);
  const east = parseFloat(lngStr);

  // Validar que los valores estén en el rango válido para UTM
  if (isNaN(north) || isNaN(east)) return null;
  if (east < 100000 || east > 999999) return null;
  if (north < 0 || north > 10000000) return null;

  try {
    const result = utm.toLatLon(east, north, 30, "N");
    return {
      lat: result.latitude,
      lng: result.longitude,
    };
  } catch (error) {
    console.error("Error convirtiendo coordenadas UTM:", error);
    return null;
  }
};
