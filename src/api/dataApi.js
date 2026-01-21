// Murcia data API fetching
const HOTELS_API_URL =
  "https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Hoteles.json";

const RESTAURANTS_API_URL =
  "https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Restaurantes.json";

export const getHotelsData = async () => {
  console.log("Fetching hotels data from API...");

  const res = await fetch(HOTELS_API_URL);
  if (!res.ok) {
    throw new Error(
      `API ERROR: Hotels request failed with status ${res.status}`
    );
  }
  return res.json();
};

export const getRestaurantsData = async () => {
  console.log("Fetching restaurants data from API...");

  const res = await fetch(RESTAURANTS_API_URL);
  if (!res.ok) {
    throw new Error(
      `API ERROR: Restaurants request failed with status ${res.status}`
    );
  }
  return res.json();
};
