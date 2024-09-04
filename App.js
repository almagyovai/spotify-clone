import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Assets/App.css";

import HomePage from "./Pages/HomePage.js";
import NotFound from "./Pages/NotFound.js";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
