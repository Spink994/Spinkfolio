import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoverPage from "./components/CoverPage";
import Home from "./pages/Home";

const App = () => {
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowCover(false);
    }, 3000);
  }, [showCover]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {showCover && <CoverPage />}
    </div>
  );
};

export default App;
