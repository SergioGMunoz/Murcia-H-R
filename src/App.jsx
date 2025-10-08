import "./App.css";
import List from "./components/List/List.jsx";
import { NavBar } from "./components/navbar/navbar.jsx";
import Pagination from "./components/List/Pagination.jsx";
import { fetchData } from "./hooks/useData.js";
import HotelesListing from "./pages/HotelsListing.jsx";

function App() {
  fetchData("hotel");
  return (
    <>
      {console.log("HOTELS LENGTH")}
      <NavBar />
      <main>
        <HotelesListing />
      </main>
    </>
  );
}

export default App;
