import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div> 

  );
}

export default App;
