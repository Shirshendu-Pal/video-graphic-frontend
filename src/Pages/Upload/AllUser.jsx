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
  const [page, setpage] = useState(1)
  const [limit, setlimit] = useState(10)
  const [totalPages, settotalPages] = useState()

  const getAllUsers = async () =>{

      startApiCall(seterrorMessage, setLoader);
      const payload = {
          filters: {},
          page,
          limit
      };
      
      const res = await ApiCall("post", VideoEndPoints.getAllUserVideo, payload);
      console.log(res);
      if (res?.success) {
        setallUser(res?.result?.docs)
        setpage(res?.result?.page);
        settotalPages(res?.result?.totalPages)
        
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
