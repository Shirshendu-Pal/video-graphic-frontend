import React, { useState, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import useVerifyUser from "./Helpers/custom-hooks/useVerifyUser";
import { useSelector } from "react-redux";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import User from "./Pages/Upload/User";
import AllUser from "./Pages/Upload/AllUser";
import AllVideos from "./Pages/Upload/AllVideos";

function App() {
  const [mainLoader, setmainLoader] = useState(true);
  const user = useSelector((state) => state.user);
  const refreshToken = localStorage.getItem("token");
  useVerifyUser(refreshToken, setmainLoader);
  // console.log("app.js", user)
  return (
    <>
    <Routes>
      <Route
        path={MainRoutes.Signup}
        element={user ? <Navigate to={MainRoutes.Signup} /> : <Signup />}
      />
      <Route
        path={MainRoutes.LOGIN}
        element={user ? <Navigate to={MainRoutes.PROFILE} /> : <Login />}
      />
      <Route element={<PrivateRoutes user={user} />}>
        <Route path="*" element={<User user={user} />} />
        <Route path={MainRoutes.PROFILE} element={<User user={user} />} />
        <Route path={MainRoutes.USERVIDEOS} element={<AllUser user={user} />} />
        <Route path={MainRoutes.ALLVIDEOS} element={<AllVideos />} />
        {/* <Route path={MainRoutes.CUSTOMER} element={<AllUser />} /> */}
      </Route>
    </Routes>
     <Toaster
     position="top-center"
     reverseOrder={false}
     //  gutter={3}
     toastOptions={{
       // Define default options
       className: "",
       duration: 5000,
     }}
   />
   </>
    // <AllUser />
  );
}

export default App;
