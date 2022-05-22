import { Route, Routes } from "react-router-dom";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Navbar from "./components/Navbar";
import AvailableParts from "./Pages/AvailableParts/AvailableParts";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/availableparts" element={<AvailableParts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
      </Routes>
    </div>
  );
}

export default App;
