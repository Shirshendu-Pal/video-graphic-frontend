import React from "react";
import "./style.css"
import { BASE_URL } from "../../Api/base";

const SingleVideoCard = ({video}) => {
  return (
    <div>
      <div class="video-card">
        <div class="content">
          <span class="title">{video?.title}</span>
          <div class="desc">{video?.description}</div>
          <div class="actions">
            <div>
                <video class="video-clip" src={BASE_URL+"/videos/"+video?.video} className="video-clip"></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideoCard;
