import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
