import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute";
import Signup from "./authentication/Signup";
import Navbar from "./components/Navbar";
import AvailableParts from "./Pages/AvailableParts/AvailableParts";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/availableparts" element={<AvailableParts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/purchase/:id"
          element={
            <PrivateRoute>
              <Purchase />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
      </Routes>
    </div>
  );
}

export default App;
