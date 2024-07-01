import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import MenuPage from "./pages/MenuPage";
import DepositCompleted from "./pages/DepositCompleted";
import Community from "./pages/Community";
import RecommendPage from "./pages/RecommendPage";
import DocumentStorage from "./pages/DocumentStorage";
import EmploymentContract from "./pages/EmploymentContract";
import Chatbot from "./pages/Chatbot";
import Account from "./pages/Account";
import Ing from "./pages/ComingSoon";

function App() {
  // src/index.js 또는 src/App.js 파일에 추가
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
  });

  document.addEventListener("dblclick", function (e) {
    e.preventDefault();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menupage" element={<MenuPage />} />
        <Route path="/community" element={<Community />} />
        {/* 팝업창! 필요없으면 삭제 */}
        {/* <Route path="/completed" element={<DepositCompleted />} /> */}
        <Route path="/recommendpage" element={<RecommendPage />} />
        <Route path="/documentstorage" element={<DocumentStorage />} />
        <Route path="/employmentcontract" element={<EmploymentContract />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/account" element={<Account />} />
        <Route path="/ing" element={<Ing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
