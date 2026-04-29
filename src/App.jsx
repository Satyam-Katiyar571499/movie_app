import React from "react";
import { Routes, Route } from "react-router-dom";
import error from "./Error";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Tv from "./components/Tv";
import About from "./components/About";
import Contact from "./components/Contact";
import Movies from "./components/Movies";
import People from "./components/People";
import Moviedetails from "./components/moviedetails";
import Tvdetails from "./components/Tvdetails"
import Peopledetails from "./components/peopledetails";
import Trailer from "./components/template/Trailer";
function App() {
  return (
    <div className="h-screen w-screen bg-[#1F1E24] text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} >
        <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        
        </Route>

        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} />

        <Route path="/people" element={<People />} />

        <Route path="/person/details/:id" element={<Peopledetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={< Error/>} />
      </Routes>
    </div>
  );
}

export default App;
