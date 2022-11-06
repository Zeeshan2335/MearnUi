import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardCreate from "./CardCreate";
import CardUpate from "./CardUpdate";
import Home from "./Home";
import ShowCard from "./ShowCard";

const LandingPage = () => {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/CardCreate" element={<CardCreate />} />
          <Route path="/ShowCard" element={<ShowCard />} />
          <Route path="/CardUpate" element={<CardUpate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default LandingPage;
