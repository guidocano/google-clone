import React from "react";
import Home from "./pages/Home"
import HomeImages from "./pages/HomeImages"
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SearchPageImages from "./pages/SearchPageImages";
import LuckySearch from "./pages/LuckySearch";


function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path="/google-clone/search" element={<SearchPage />} />
            <Route path="/google-clone/images/search" element={<SearchPageImages />} />
            <Route path="/google-clone" element={<Home/>} />
            <Route path="/google-clone/images" element={<HomeImages/>} />
            <Route path="/google-clone/lucky" element={<LuckySearch/>} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
