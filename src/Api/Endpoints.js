const customerPrefix = "customer";
const userPrefix = "user";
const authPrefix = "auth";
const videoPrefix = "video";

// ** CUSTOMER RELATED ENDPOINTS **
export const customerEndPoints = {
  addCustomer: customerPrefix + "/add-customer",
};

// ** AUTH RELATED ENDPOINTS **
export const AuthEndPoints = {
  userRegister: authPrefix + "/register",
  userLogin: authPrefix + "/login",
  // managementLogout: managementPrefix + "/management-logout",
  verifyUser: userPrefix + "/getuser",
  editUser: userPrefix + "/edit-user"

};

// ** VIDEO RELATED ENDPOINTS **
export const VideoEndPoints = {
  getAllVideos: videoPrefix + "/get-all-videos",
  addVideo: videoPrefix + "/add-video",
  getAllUserVideo : videoPrefix + "/get-all-user-videos"
  // // managementLogout: managementPrefix + "/management-logout",
  // verifyUser: userPrefix + "/getuser",
  // editUser: userPrefix + "/edit-user"

};
