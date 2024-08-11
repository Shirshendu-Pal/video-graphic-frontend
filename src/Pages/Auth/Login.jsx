import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import MainRoutes from "../../Routes/MainRoutes";
import { useNavigate, useParams } from "react-router-dom";
import { startApiCall } from '../../Helpers/globalFunctions';
import {AuthEndPoints}  from "../../Api/Endpoints"
import "./style.css";
import ApiCall from "../../Api/ApiCall";
import toast from "react-hot-toast";
import ApiLoader from "../../Components/Loaders/ApiLoader";
import { resolveErrorMessage } from "../../Api/service";

const Login = () => {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("");
  const [password, setpassword] = useState("")
  const [errorMessage, seterrorMessage] = useState("");
  const [loader, setLoader] = useState(false);
  

  const signIn = async () => {
    startApiCall(seterrorMessage, setLoader);
    const data = {
      first_name: firstName,
      password,
    };
    const res = await ApiCall("post", AuthEndPoints.userLogin, data);
    if (res?.success) {
      toast.loading("Login Success");
      let data = res?.result
      let refreshToken = data.tokens.refresh.token ;
      localStorage.setItem("token", refreshToken);
      window.location.href = MainRoutes.PROFILE;
      
    } else {
      seterrorMessage(resolveErrorMessage(res.error));
      setLoader(false);
    }
  };
  return (
    <>
      <div className="main-container">
        <div class="form-box">
          <div class="form">
            <span class="title">Sign in</span>
            <span class="subtitle">Sign in to enjoy the video market place.</span>
            <div class="form-container">
              <input type="text" class="input" placeholder="Full Name" onChange={(e) => setfirstName(e.target.value)}/>
              <input type="password" class="input" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
            </div>
            <button onClick={signIn}>Sign in</button>
          </div>
          <div class="form-section">
            <p>
              {" "}
              Don't have an account?{" "}
              <a href="" onClick={() => navigate(MainRoutes.Signup)}>
                Sign up
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
