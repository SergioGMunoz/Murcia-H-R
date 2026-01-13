import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar/navbar.jsx";
import HotelesListing from "./pages/HotelsListing.jsx";
import HotelDetail from "./pages/HotelDetail.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main>
        {/* React router to navegate between pages */}
        <Routes>
          <Route path="/" element={<HotelesListing />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
