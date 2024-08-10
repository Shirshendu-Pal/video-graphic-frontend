//******* START API CALL ********/
export const startApiCall = (seterrorMessage, setLoader) => {
  {
    seterrorMessage !== null && seterrorMessage("");
  }
  setLoader(true);
  setTimeout(() => {
    setLoader(false);
  }, 50000);
};
