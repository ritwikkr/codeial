import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import SessionPage from "./pages/SessionPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/session" element={<SessionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
