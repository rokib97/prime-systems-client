import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./authentication/Login";
import PrivateAdmin from "./authentication/PrivateAdmin";
import PrivateRoute from "./authentication/PrivateRoute";
import Signup from "./authentication/Signup";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AvailableParts from "./Pages/AvailableParts/AvailableParts";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageAllOrder from "./Pages/Dashboard/ManageAllOrder";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyReview from "./Pages/Dashboard/MyReview";
import Payment from "./Pages/Dashboard/Payment";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Navbar setDark={setDark} dark={dark} />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/availableparts" element={<AvailableParts />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="updateprofile/:id" element={<UpdateProfile />}></Route>
          <Route path="order" element={<MyOrder />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
          <Route path="manageorder" element={<ManageAllOrder />}></Route>
          <Route path="manageproduct" element={<ManageProducts />}></Route>
          <Route
            path="admin"
            element={
              <PrivateAdmin>
                <MakeAdmin />
              </PrivateAdmin>
            }
          ></Route>
        </Route>
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
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
