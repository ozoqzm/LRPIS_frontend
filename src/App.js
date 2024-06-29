import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menupage" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
