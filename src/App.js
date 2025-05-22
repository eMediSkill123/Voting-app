import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Feed from "./components/Feed";
import Members from "./components/Members";
import Profile from "./components/Profile";
import BottomNav from "./components/BottomNav";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/feed" element={<Feed />} />
          <Route path="/members" element={<Members />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/feed" />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
