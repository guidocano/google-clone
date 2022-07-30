import React from "react";
import Home from "./pages/Home"
import HomeImages from "./pages/HomeImages"
import { BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SearchPageImages from "./pages/SearchPageImages";
import SearchPageMaps from "./pages/SearchPageMaps";
import SearchPageNews from "./pages/SearchPageNews";
import SearchPageVideos from "./pages/SearchPageVideos";
import LuckySearch from "./pages/LuckySearch";


function App() {
  return (
    <div className="App">
      
        <HashRouter basename='/'>
          <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/images/search" element={<SearchPageImages />} />
            <Route path="/maps/search" element={<SearchPageMaps />} />
            <Route path="/news/search" element={<SearchPageNews />} />
            <Route path="/videos/search" element={<SearchPageVideos />} />
            <Route path="/" element={<Home/>} />
            <Route path="/images" element={<HomeImages/>} />
            <Route path="/lucky" element={<LuckySearch/>} />
          </Routes>
        </HashRouter>
      
    </div>
  );
}

export default App;
