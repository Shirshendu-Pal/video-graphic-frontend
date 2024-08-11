import React, { useEffect, useState } from "react";
import BioModal from "../Modal/BioModal";
import VideoModal from "../Modal/VideoModal";
import { BASE_URL } from "../../Api/base";
import "./style.css";
import Editbio from "../../Components/Modals/Editbio";
import SingleVideoCard from "../../Components/Video/SingleVideoCard";
import { startApiCall } from "../../Helpers/globalFunctions";
import ApiCall from "../../Api/ApiCall";
import { VideoEndPoints } from "../../Api/Endpoints";
import UploadVideo from "../../Components/Modals/UploadVideo";
import { useNavigate, useParams } from "react-router-dom";
import MainRoutes from "../../Routes/MainRoutes";

const AllVideos = ({ }) => {
  const navigate = useNavigate();
  const [openModal, setopenModal] = useState(false);
  const [errorMessage, seterrorMessage] = useState(false);
  const [Loader, setLoader] = useState(false);
  const [allVideo, setallVideo] = useState([]);
  const [totalPages, settotalPages] = useState();

  const [openUploadModal, setopenUploadModal] = useState(false);

  const { id , name } = useParams();
  const getVideos = async () => {
    startApiCall(seterrorMessage, setLoader);
    const payload = {
      userId: id,
    };

    const res = await ApiCall("post", VideoEndPoints.getAllVideos, payload);
    console.log(res);
    if (res?.success) {
      setallVideo(res?.result);
    } else {
      seterrorMessage(res.error);
      setLoader(false);
    }
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div>
      <div style={{ fontStyle: "italic" }}>
        FirstName: {name} 
      </div>

      <div>All Videos</div>
      <hr />
      {allVideo?.map((video) => {
        return (
          <div>
            <SingleVideoCard video={video} />
          </div>
        );
      })}
    </div>
  );
};

export default AllVideos;
