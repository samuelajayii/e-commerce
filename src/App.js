/* eslint-disable no-unused-vars */
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from "react";

export const userContext = createContext(null)

function App() {

  const [userDetails, setUserDetails] = useState(null)

  return (
    <userContext.Provider value={{userDetails, setUserDetails}}>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </userContext.Provider> 

  );
}

export default App;
