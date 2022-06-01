import React from "react";
import Home from "./pages/Home"
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import LuckySearch from "./pages/LuckySearch";


function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path="/google-clone/search" element={<SearchPage />} />
            <Route path="/google-clone" element={<Home/>} />
            <Route path="/google-clone/lucky" element={<LuckySearch/>} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
