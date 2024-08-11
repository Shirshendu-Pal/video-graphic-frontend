import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const BioModal = () => {
  return (
    <div>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box p-8 rounded-md" >
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>

              {/*BioData */}

              <textarea
                id="bio"
                rows="4"
                maxlength="500"
                class="mt-10 p-8 space-y-2 p-2 resize-y rounded-md"
                placeholder="Write your bio here..."
              ></textarea>

              {/*Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700
                             text-white px-3 py-2 bordered rounded-md outline-none"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default BioModal;
