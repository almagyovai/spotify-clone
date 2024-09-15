import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Assets/App.css";
import HomePage from "./Pages/HomePage.js";
import NotificationPage from "./Pages/NotificationPage.js";
import SearchPage from "./Pages/SearchPage.js";
import NotFound from "./Pages/NotFound.js";
import React, { useState, useEffect } from 'react';
import { loginToSpotify, getTokenFromUrl } from './spotifyAuth';
import SpotifyDataComponent from './Components/CardList.js';


function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const tokenFromUrl = getTokenFromUrl();
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      loginToSpotify();
    }
  }, []);

  if (!token) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/spotify-data" element={<SpotifyDataComponent token={token} />} />
        <Route path="/" element={<HomePage token={token} />} />
        <Route path="/NotificationPage" element={<NotificationPage token={token} />} />
        <Route path="/SearchPage" element={<SearchPage token={token} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;