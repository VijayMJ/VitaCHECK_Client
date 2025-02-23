import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import VitaminPage from "./pages/VitaminPage/VitaminPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import FruitPage from "./pages/FruitPage/FruitPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/vitamins" element={<VitaminPage />}></Route>
        <Route path="/vitamins/:id/fruits" element={<FruitPage/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
