import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardCreate from "./CardCreate";
import Home from "./Home";
import ShowCard from "./ShowCard";

const LandingPage = () => {
  return (
    <>
      {/* <h1>LandingPage</h1> */}
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/CardCreate" element={<CardCreate />} />
          <Route path="/showCard" element={<ShowCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default LandingPage;
