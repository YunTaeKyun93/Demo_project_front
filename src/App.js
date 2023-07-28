import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page";
import NoticePostPage from "./pages/notice-post-page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/noticepost" element={<NoticePostPage />} />
        {/* <Route path="/noticelist" element={<NoticePostPage />} /> */}

      </Routes>
    </div>
  );
}
export default App;
