import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar/navbar.jsx";
import HotelesListing from "./pages/HotelsListing.jsx";
import HotelDetail from "./pages/HotelDetail.jsx";
import { APIProvider } from "@vis.gl/react-google-maps";

function App() {
  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <NavBar />
      <main>
        {/* React router to navegate between pages */}
        <Routes>
          <Route path="/" element={<HotelesListing />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
        </Routes>
      </main>
    </APIProvider>
  );
}

export default App;
