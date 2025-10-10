import { useEffect, useState } from "react";
import Pagination from "../components/List/Pagination";
import { fetchData } from "../hooks/useData";
import List from "../components/List/List";
import Loader from "../components/ui/Loader";
import Error from "../components/ui/Error";
import Promo from "../components/Promo/Promo";

const HotelesListing = () => {
  // Fetch Data
  const [hotels, setHotels] = useState(null);

  const handleError = () => {
    return <Error onTryAgain={() => window.location.reload()} />;
  };

  useEffect(() => {
    fetchData("hotels").then((response) => {
      if (response.data) {
        setHotels(response.data);
      } else {
        console.error("Error fetching hotels:", response.error);
        handleError();
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
      {!hotels ? (
        <Loader />
      ) : (
        <>
          <Promo item={hotels[Math.floor(Math.random() * hotels.length)]}/>
          <List elements={hotels} />
          <Pagination
            currentPage={1}
            totalPages={10}
            onPrevious={handleOnPrevious}
            onNext={handleOnNext}
          />
        </>
      )}
    </>
  );
};

export default HotelesListing;
