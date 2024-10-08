import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Api/base";
import "./style.css";
import SingleVideoCard from "../../Components/Video/SingleVideoCard";
import { startApiCall } from "../../Helpers/globalFunctions";
import ApiCall from "../../Api/ApiCall";
import { VideoEndPoints } from "../../Api/Endpoints";
import UploadVideo from "../../Components/Modals/UploadVideo";
import { useNavigate } from "react-router-dom";
import MainRoutes from "../../Routes/MainRoutes";
import Editbio from "../../Components/Modals/Editbio";

const User = ({ user }) => {
  const navigate = useNavigate();
  const [openModal, setopenModal] = useState(false);
  const [errorMessage, seterrorMessage] = useState(false);
  const [Loader, setLoader] = useState(false);
  const [allVideo, setallVideo] = useState([]);
  const [totalPages, settotalPages] = useState()

  const [openUploadModal, setopenUploadModal] = useState(false);

  const getVideos = async () =>{

    startApiCall(seterrorMessage, setLoader);
    const payload = {
        userId: user._id,
    };
    
    const res = await ApiCall("post", VideoEndPoints.getAllVideos, payload);
    console.log(res);
    if (res?.success) {
      setallVideo(res?.result)
      
    } else {
      seterrorMessage(res.error);
      setLoader(false);
    }



  }
  useEffect(() => {
    getVideos()
  }, [])
  

  return (
    <>
    <button class="goto-all-video" onClick={() => navigate(MainRoutes.USERVIDEOS)}>All video</button>
      {!openUploadModal && !openModal && (
        <>
          <div className="main-container">
            <div class="card">
              <img
                class="img"
                src={BASE_URL + "/profile-pic/" + user.profilePic}
                alt=""
                srcset=""
              />
              {/* </div> */}
              <small>Firstname: {user.first_name}</small>
              <small>Lastname: {user.last_name}</small>
              <small>email: {user.email}</small>
              <small>phone: {user.phone}</small>
              <span>Bio</span>
              <p class="info">
                {user.bio}
              </p>
              <button onClick={() => setopenModal(true)}>Edit Bio</button>
              <p style={{color:"#fff",textAlign:"center"}}>Scroll down ⏬ </p>
            </div>
          </div>

          <div>
            <div className="videos">
              <div>
                <h1>My Videos</h1>
              </div>
              <br />
              <hr />
              {allVideo?.map((video) =>{

                return (<div>
                <SingleVideoCard video={video} />
              </div>)
              })}
            </div>

            <button className="upload-button" onClick={() => setopenUploadModal(true)}>upload video</button>
          </div>
        </>
      )}

      {openModal && (
        <Editbio
          user={user}
          openModal={openModal}
          setopenModal={setopenModal}
        />
      )}
      {
        openUploadModal&&(
          <UploadVideo user={user} 
          openModal={openUploadModal}
          setopenModal={setopenUploadModal}
          />
        )
      }
    </>
  );
};

export default User;
