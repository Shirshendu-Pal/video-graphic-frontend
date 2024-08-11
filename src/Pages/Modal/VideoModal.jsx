import React, { useState } from "react";
import { Link } from "react-router-dom";

const VideoModal = () => {
  const [validateFrom , setvalidateFrom] = useState(false)
  function validateFileSize(e) {
    const FileSize = e.target.files[0];

    if (FileSize.size > 6291456) {
      e.target.value = "";
      setvalidateFrom(true)
      return;
    }else{
      setvalidateFrom(false)
    }
  }

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box p-8 rounded-md">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                window.location.reload()
                document.getElementById("my_modal_4").close()
              }}
            >
              ✕
            </Link>
            {/*Youtube File*/}

            <div className="mt-4 space-y-2">
              <span>Choose your File</span>
              <br />
              <input
                type="file"
                id="myfile"
                name="myfile"
                onChange={(e) => validateFileSize(e)}
              />
            </div>
{
  validateFrom && <small style={{color: "red"}}> File size must under 6MiB! </small>
}
            

            {/*Youtube title */}

            <div className="mt-4 space-y-2">
              <span>Title</span>
              <br />
              <input
                type="text"
                maxlength="30"
                placeholder="enter video's title"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>

            {/*Youtube Desc */}

            <div className="mt-4 space-y-2">
              <span>Description</span>
              <br />
              <textarea
                id="desc"
                maxlength="180"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                placeholder="Write your description here..."
              />
            </div>

            {/*Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700
                             text-white px-3 py-2 bordered rounded-md outline-none"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default VideoModal;
