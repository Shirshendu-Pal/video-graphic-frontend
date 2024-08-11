import React from 'react'
import ApiCall from '../../Api/ApiCall';
import { startApiCall } from '../../Helpers/globalFunctions';

const Home = () => {

  // API EXAMPLE
  // const handleAddPayment = async (e) => {
  //   e.preventDefault();
  //   startApiCall(seterrorMessage, setLoader);
  //   const payload = {
    
  //   };
  //   const res = await ApiCall("post", paymentEndPoints.addPayment, payload);
  //   if (res?.success) {
  //   } else {
  //     seterrorMessage(res.error);
  //     setLoader(false);
  //   }
  // };


  return (
    <div>
      BASIC REACT PROJECT STRUCTURE EXAMPLE
      {/* <img src="http://localhost:8001/videos/1723365830609-Best Airfares - Cheap Flights To USA, Canada, Caribbean, Mexico, Central America_ Lowest Airfares.mp4" alt="" srcset="" /> */}
      <video src="http://localhost:8001/videos/1723365830609-Best Airfares - Cheap Flights To USA, Canada, Caribbean, Mexico, Central America_ Lowest Airfares.mp4"></video>
    </div>
  )
}

export default Home
