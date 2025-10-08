import {getData} from '../api/dataApi.js';
       
export const fetchData = async (type) => {
  try {
    const data = await getData(type);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};