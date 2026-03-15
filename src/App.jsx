import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JoinPage from "./pages/JoinPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SecurityPolicy from "./pages/SecurityPolicy";
import AboutSection from "./pages/AboutSection";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/security" element={<SecurityPolicy/>}/>
        <Route path="/business" element={<AboutSection/>} />
      </Routes>
    </BrowserRouter>
  );
}