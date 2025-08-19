import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questions" element={<Questions />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
