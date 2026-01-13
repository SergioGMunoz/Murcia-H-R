import { getData } from "../api/dataApi.js";

// To return data or error
export const fetchData = async () => {
  try {
    const data = await getData();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
