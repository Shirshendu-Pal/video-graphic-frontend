import React, { useState } from "react";
import MainRoutes from "../../Routes/MainRoutes";
import { useNavigate, useParams } from "react-router-dom";
import { startApiCall } from "../../Helpers/globalFunctions";
import { AuthEndPoints } from "../../Api/Endpoints";
import "./style.css";
import ApiCall from "../../Api/ApiCall";
import toast from "react-hot-toast";
import ApiLoader from "../../Components/Loaders/ApiLoader";

const Editbio = ({ user, openModal, setopenModal }) => {
  const navigate = useNavigate();
  const [bio, setbio] = useState(user?.bio);
  const [errorMessage, seterrorMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const editProfile = async () => {
    startApiCall(seterrorMessage, setLoader);
    const payload = {
      userId: user._id,
      bio,
      profilePicIsDeleted: false,
    };

    const res = await ApiCall("post", AuthEndPoints.editUser, payload);
    // console.log(res);
    if (res?.success) {
      setopenModal(false);
      toast.loading("Profile updated successfully");
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
          maxLength={150}
          value={bio}
          onChange={(e) => setbio(e.target.value)}
        ></input>

        <div class="buttonContainer">
          <button class="acceptButton" onClick={editProfile}>
            Edit
          </button>
          <button class="declineButton" onClick={() => setopenModal(false)}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editbio;
