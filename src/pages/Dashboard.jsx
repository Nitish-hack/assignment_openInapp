import { useEffect, useState } from "react";
import "../styles/dashboardstyles.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const navigate = useNavigate();
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      navigate('/');
      alert("Login using google to access Dashboard");
    }
  }, []);

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Home />
    </div>
  );
}

export default Dashboard;
