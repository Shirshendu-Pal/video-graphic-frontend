import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import User from "./Pages/Upload/User";
import AllUser from "./Pages/Upload/AllUser";

function App() {
  return (
    // <Routes>
    //   <Route path="*" element={<Home />} />
    // </Routes>
<AllUser />
  );
}

export default App;
