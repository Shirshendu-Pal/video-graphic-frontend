import React, { useEffect, useState } from 'react'
import SingleVideoCard from '../Video/SingleVideoCard'
import "./style.css"
import { useNavigate } from 'react-router-dom';
import MainRoutes from '../../Routes/MainRoutes';

const UserCard = ({user}) => {

    const navigate = useNavigate();

      
  return (
    <>
    <div style={{fontStyle:"italic"}}>FirstName: {user?.first_name} , LastName: {user?.last_name} , email:{user?.email} , phone: {user?.phone}  
    
    {user?.videos?.length > 2&&
     <button className='goto-view-video' onClick={() => {navigate(MainRoutes.ALLVIDEOS+"/"+user?.first_name+"/"+user?._id )}}> view more </button>
     
     }
    </div>
    
    
   

   {

    user?.videos?.length === 0 ? 

    <small style={{color:"gray"}}>
      No Video Avilable For this User
    </small>
    
    
    :

   user?.videos.map((video) =>{
    return (
        <div>
        <SingleVideoCard video={video} />
    </div>
    )
   })
   
   }
   
    </>
  )
}

export default UserCard