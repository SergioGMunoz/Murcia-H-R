// Create hotel id by hotel name 
// Example: Casa De Paco -> casa-de-paco
export const createHotelId = (name) => {
  if (!name) return "";
  return name.toLowerCase().replace(/\s+/g, "-");
};
