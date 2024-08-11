import React from "react";
import BioModal from '../Modal/BioModal'
import VideoModal from "../Modal/VideoModal";

const User = () => {
  return (
    <>
      <div className="max-w-screen-lg container mx-auto">
        <div className="my-20">
          User's picture
          <div class="flex items-center border rounded-full h-16 w-16 m-2 mb-5 ...">
            <img src="path/to/image.jpg" />
          </div>
          {/* <div class="rounded-full h-16 w-16 flex bg-teal-400 m-2 mb-8 ..."></div> */}
          <div className="border rounded-full mb-5 ... ..."></div>
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h3>Upload Data</h3>
            <div>
              <a
                className="bg-green-500 hover:bg-green-700
                             text-white px-3 py-2 bordered rounded-md outline-none"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Add Bio
              </a>
              <BioModal />
            </div>
          </div>
          <div className="" style={{ display: "flex", gap: "40px" }}>
            <div>First Name</div>
            <div>Last Name</div>
          </div>
          <div className="" style={{ display: "flex", gap: "40px" }}>
            <div>Email</div>
            <div>Contact</div>
          </div>
        </div>

        <div className="Video-section">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "50px" }}>
              <a target="_blank" href="img_forest.jpg">
                <img
                  src="https://www.w3schools.com/images/picture.jpg"
                  alt="Thumbnail"
                  style={{
                    border: "1px solid black",
                    borderRadius: "4px",
                    padding: "5px",
                    width: "210px",
                  }}
                />
              </a>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p
                  style={{
                    width: "500px",
                    padding: "5px",
                    border: "1px solid black",
                  }}
                >
                  <b>YouTube Title</b>
                </p>
                <p
                  style={{
                    height: "100px",
                    padding: "5px",
                    border: "1px solid black",
                  }}
                >
                  Description
                </p>
              </div>
            </div>

             <a  className="bg-green-500 hover:bg-green-700 w-16 h-16
                             text-white text-sm px-3 py-3  bordered rounded-full outline-none"
                             onClick={() =>
                              document.getElementById("my_modal_4").showModal()
                            }>
                               Upload Video
             </a>
              <VideoModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
