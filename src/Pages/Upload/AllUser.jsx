import React, { useEffect, useState } from 'react'
import UserCard from "../../Components/User/UserCard";
import { startApiCall } from "../../Helpers/globalFunctions";
import { VideoEndPoints } from "../../Api/Endpoints";
import ApiCall from "../../Api/ApiCall";
import toast from "react-hot-toast";
import ApiLoader from "../../Components/Loaders/ApiLoader";
import MainRoutes from '../../Routes/MainRoutes';
const AllUser = ({user}) => {

  const [errorMessage, seterrorMessage] = useState(false);
  const [Loader, setLoader] = useState(false);
  const [allUser, setallUser] = useState([]);
  const [totalPages, settotalPages] = useState()

  const getAllUsers = async () =>{

      startApiCall(seterrorMessage, setLoader);
      const payload = {
          filters: {}
      };
      
      const res = await ApiCall("post", VideoEndPoints.getAllUserVideo, payload);
      console.log(res);
      if (res?.success) {
        setallUser(res?.result)
        
      } else {
        seterrorMessage(res.error);
        setLoader(false);
      }
  
  
  
    }
    useEffect(() => {
      getAllUsers()
    }, [])
  return (
    <>

      <div>
        {
          allUser?.map((userData) =>{
           return <UserCard user={userData} />
          })
        }
      </div>
    </>
  );
};

export default AllUser;
