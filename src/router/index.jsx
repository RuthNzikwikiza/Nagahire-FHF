import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BookingPage from "../pages/BookingPage";
import Men from "../pages/Men";
import Women from "../pages/Women";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
   <Route path="/men" element={<Men />} />
<Route path="/women" element={<Women />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}
