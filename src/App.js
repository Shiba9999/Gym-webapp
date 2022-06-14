import "./App.css";

import { Route, Routes } from "react-router-dom";

import React from "react";
import { Box } from "@mui/material";
import NavBar from "./componnets/NavBar";
import Home from "./componnets/pages/Home";
import ExerciseDetail from "./componnets/pages/ExerciseDetail";
import Footer from "./componnets/Footer";

const App = () => {
  return (
    <Box width="400px" sx={{ width:{xl:"1488px"}}} m="auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
