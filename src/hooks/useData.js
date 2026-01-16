import { getHotelsData, getRestaurantsData } from "../api/dataApi.js";

// To return data or error
export const fetchHotelsData = async () => {
  try {
    const data = await getHotelsData();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

// Restaurants
export const fetchRestaurantsData = async () => {
  try {
    const data = await getRestaurantsData();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
