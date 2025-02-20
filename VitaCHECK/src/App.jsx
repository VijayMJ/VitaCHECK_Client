import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import VitaminPage from "./pages/VitaminPage/VitaminPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/vitamins" element={<VitaminPage />}></Route>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
