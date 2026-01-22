import { useEffect, useState } from "react";
import Pagination from "../components/List/Pagination";
import { fetchHotelsData } from "../hooks/useData";
import List from "../components/List/List";
import Loader from "../components/ui/Loader";
import Error from "../components/ui/Error";
import Promo from "../components/Promo/Promo";
import FilterBar from "../components/ui/FilterBar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const itemsPerPage = 15;

const HotelesListing = () => {
  const [hotels, setHotels] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    nombre: "",
    cp: "",
    municipio: "",
    pedania: "",
  });

  // Error
  const handleError = () => {
    return <Error onTryAgain={() => window.location.reload()} />;
  };

  // Error fetching Hotels -> Render error page
  useEffect(() => {
    setIsLoading(true);
    fetchHotelsData().then((response) => {
      if (response.data) {
        setHotels(response.data);
      } else {
        console.error("Error fetching hotels:", response.error);
        handleError();
      }
      setIsLoading(false);
    });
  }, []);

  // Filter hotels based on user input
  const getFilteredHotels = () => {
    if (!hotels) return [];

    return hotels.filter((hotel) => {
      const matchesNombre = !filters.nombre || 
        hotel.Nombre?.toLowerCase().includes(filters.nombre.toLowerCase());
      
      const matchesCp = !filters.cp || 
        hotel["C.P."]?.includes(filters.cp);
      
      const matchesMunicipio = !filters.municipio || 
        hotel.Municipio?.toLowerCase().includes(filters.municipio.toLowerCase());
      
      const matchesPedania = !filters.pedania || 
        hotel.Pedanía?.toLowerCase().includes(filters.pedania.toLowerCase());

      return matchesNombre && matchesCp && matchesMunicipio && matchesPedania;
    });
  };

  // Handle filter changes and reset to page 1
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  // calc hotels to display
  const getCurrentPageHotels = () => {
    const filteredHotels = getFilteredHotels();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredHotels.slice(startIndex, endIndex);
  };

  // total pages based on filtered results
  const filteredHotels = getFilteredHotels();
  const totalPages = filteredHotels.length > 0 ? Math.ceil(filteredHotels.length / itemsPerPage) : 0;

  // Pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOnPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleOnNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
          }}
        >
          <CircularProgress
            size={60}
            sx={{ color: "#b88e2f" }}
          />
        </Box>
      ) : !hotels ? (
        <Loader />
      ) : (
        <>
          <Promo item={hotels[Math.floor(Math.random() * hotels.length)]}/>
          <FilterBar onFilterChange={handleFilterChange} />
          <List elements={getCurrentPageHotels()} />
          {totalPages > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPrevious={handleOnPrevious}
              onNext={handleOnNext}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </>
  );
};

export default HotelesListing;
