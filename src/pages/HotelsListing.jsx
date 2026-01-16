import { useEffect, useState } from "react";
import Pagination from "../components/List/Pagination";
import { fetchHotelsData } from "../hooks/useData";
import List from "../components/List/List";
import Loader from "../components/ui/Loader";
import Error from "../components/ui/Error";
import Promo from "../components/Promo/Promo";

const itemsPerPage = 15;

const HotelesListing = () => {
  const [hotels, setHotels] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Error
  const handleError = () => {
    return <Error onTryAgain={() => window.location.reload()} />;
  };

  // Error fetching Hotels -> Render error page
  useEffect(() => {
    fetchHotelsData().then((response) => {
      if (response.data) {
        setHotels(response.data);
      } else {
        console.error("Error fetching hotels:", response.error);
        handleError();
      }
    });
  }, []);

  // calc hotels to display
  const getCurrentPageHotels = () => {
    if (!hotels) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return hotels.slice(startIndex, endIndex);
  };

  // total pages
  const totalPages = hotels ? Math.ceil(hotels.length / itemsPerPage) : 0;

  // Pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOnPrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleOnNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <>
      {!hotels ? (
        <Loader />
      ) : (
        <>
          <Promo item={hotels[Math.floor(Math.random() * hotels.length)]}/>
          <List elements={getCurrentPageHotels()} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevious={handleOnPrevious}
            onNext={handleOnNext}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default HotelesListing;
