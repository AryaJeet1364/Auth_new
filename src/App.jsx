import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Phone from "./Components/Phone";
import "firebase/auth";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Phone />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
