import { useEffect, useState } from "react";
import Pagination from "../components/List/Pagination";
import { fetchData } from "../hooks/useData";
import List from "../components/List/List";
import Loader from "../components/ui/Loader";

const HotelesListing = () => {
  // Fetch Data
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchData("hotels").then((response) => {
      if (response.data) {
        setHotels(response.data);
      } else {
        console.error("Error fetching hotels:", response.error);
      }
    });
  }, []);

  // Pagination logic
  const handleOnPrevious = () => {
    console.log("Going to previous page");
  };

  const handleOnNext = () => {
    console.log("Going to next page");
  };

  return (
    <>
      {hotels && hotels.length > 0 ? (
        <>
          <List elements={hotels} />
          <Pagination
            currentPage={1}
            totalPages={10}
            onPrevious={handleOnPrevious}
            onNext={handleOnNext}
          />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HotelesListing;
