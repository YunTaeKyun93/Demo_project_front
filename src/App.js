import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page";
import SignInPage from "./pages/sign-in-page";
import NoticePostPage from "./pages/notice-post-page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/noticepost" element={<NoticePostPage />} />

      </Routes>
    </div>
  );
}
export default App;
