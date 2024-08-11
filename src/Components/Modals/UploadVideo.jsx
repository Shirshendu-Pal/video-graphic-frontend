import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { startApiCall } from "../../Helpers/globalFunctions";
import { VideoEndPoints } from "../../Api/Endpoints";
import "./style.css";
import ApiCall from "../../Api/ApiCall";
import toast from "react-hot-toast";
import ApiLoader from "../../Components/Loaders/ApiLoader";
import MainRoutes from '../../Routes/MainRoutes';

const UploadVideo = ({user , setopenModal , openModal}) => {

    const [title , settitle] = useState("")
    const [description , setdescription] = useState("")
    const [file,setfile] = useState()
    const [errorMessage, seterrorMessage] = useState("");
  const [loader, setLoader] = useState(false);

    const addVideo = async () => {
        const formData = new FormData();
        startApiCall(seterrorMessage, setLoader);
        const payload = {
          file,
          userId: user._id,
          title,
          description,
        };

        for(let [key , value] of Object.entries(payload)){
            formData.append(key, value);
          }
        const res = await ApiCall("post", VideoEndPoints.addVideo, formData);
        // console.log(res);
        if (res?.success) {
          setopenModal(false);
          toast.loading("video uploaded successfully");
          window.location.href = MainRoutes.PROFILE;
        } else {
          seterrorMessage(res.error);
          setLoader(false);
        }
      };


  return (
    <div className="main-container">
    <div class="modal-card">
      <p class="cookieHeading">Edit Bio</p>
      <input
        type="text"
        class="cookieDescription"
        placeholder='add title'
        maxLength={150}
        value={title}
        onChange={(e) => settitle(e.target.value)}
      ></input>

       <input
        type="text"
        class="cookieDescription"
        placeholder='add description'
        maxLength={150}
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></input>

    <input
        type="file"
        class="cookieDescription"
        onChange={(e) => setfile(e.target.files[0])}
      ></input>

      <div class="buttonContainer">
        <button class="acceptButton" onClick={addVideo}>
          Add
        </button>
        <button class="declineButton" onClick={() =>{
            setopenModal(false);
            window.location.href = MainRoutes.PROFILE;

        } 
            }>
          cancel
        </button>
      </div>
    </div>
  </div>
  )
}

export default UploadVideo