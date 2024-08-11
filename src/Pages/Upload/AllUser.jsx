import React from "react";

const AllUser = () => {
  return (
    <>
      <div className="max-w-screen-lg container mx-auto">
        <div className="my-20">
          {/* User Section */}
          <div className="" style={{ display: "flex", gap: "40px" }}>
            <div class="flex items-center border rounded-full h-16 w-16 m-2 mb-5 ...">
              <img src="path/to/image.jpg" alt="User Image" />
            </div>

            <div className="First name">
              <h3 className="text-sm ... mb-5">User's Name</h3>
            </div>
          </div>
          <div className="border rounded-full mb-5 ... ..."></div>
          {/* Carousal Section */}

          <div className="carousal" style={{display:"flex" , justifyContent:"space-evenly"}}>
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
          </div>

          {/* Carousal Section End */}
        </div>
      </div>
    </>
  );
};

export default AllUser;
