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
      
        <HashRouter>
          <Routes>
            <Route path="/google-clone/search" element={<SearchPage />} />
            <Route path="/google-clone/images/search" element={<SearchPageImages />} />
            <Route path="/google-clone/maps/search" element={<SearchPageMaps />} />
            <Route path="/google-clone/news/search" element={<SearchPageNews />} />
            <Route path="/google-clone/videos/search" element={<SearchPageVideos />} />
            <Route path="/google-clone" element={<Home/>} />
            <Route path="/google-clone/images" element={<HomeImages/>} />
            <Route path="/google-clone/lucky" element={<LuckySearch/>} />
          </Routes>
        </HashRouter>
      
    </div>
  );
}

export default App;
