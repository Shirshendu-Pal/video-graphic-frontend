import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import MainRoutes from "../../Routes/MainRoutes";
import { useNavigate, useParams } from "react-router-dom";
import { startApiCall } from '../../Helpers/globalFunctions';
import {AuthEndPoints}  from "../../Api/Endpoints"
import "./style.css";
import ApiCall from "../../Api/ApiCall";
import toast from "react-hot-toast";
import ApiLoader from "../../Components/Loaders/ApiLoader";

const Signup = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [file, setfile] = useState();
  const [loader, setLoader] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setPhoneNumber(numericValue);
  };

  const signUp = async () =>{
    startApiCall(seterrorMessage, setLoader);
    const formData = new FormData();
    const payload = {
      file: file,
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phoneNumber
    };
    for(let [key , value] of Object.entries(payload)){
      formData.append(key, value);
    }
    console.log(formData);
    const res = await ApiCall("post", AuthEndPoints.userRegister, formData);
    console.log(res);
    if (res?.success) {
      toast.loading("Logged in successfully");
      navigate(MainRoutes.LOGIN)
    } else {
      seterrorMessage(res.error);
      setLoader(false);
    }
  }

  return (
    <>
      <div className="main-container">
        <div class="form-box">
          <div class="form">
            <span class="title">Sign up</span>
            <span class="subtitle">Create a free account with your email.</span>
            <div class="form-container">
              <input
                type="text"
                class="input"
                placeholder="First Name"
                onChange={(e) => setfirstName(e.target.value)}
                required
              />
              <input
                type="text"
                class="input"
                placeholder="Last Name"
                onChange={(e) => setlastName(e.target.value)}
                required
              />
              <input
                type="text"
                className="input number"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                minLength="10" // Set minimum length for validation
                pattern="\d{10,}" // Ensure input is at least 10 digits
                title="Phone number must be at least 10 digits long" // Custom error message
                required
              />
              <input
                type="email"
                class="input"
                placeholder="Email Address"
                onChange={(e) => setemail(e.target.value)}
                required
              />
               <input
                type="file"
                class="input"
                onChange={(e) => setfile(e.target.files[0])}
                required
              />
            </div>
            {loader ? <ApiLoader /> : <button onClick={signUp}>
            
              
            Sign up
            
            </button>}
            
          </div>
          <div class="form-section">
            <p>
              Have an account?{" "}
              <a href="" onClick={() => navigate(MainRoutes.LOGIN)}>
                Log in
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
