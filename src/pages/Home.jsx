import React ,{useState} from "react";
import { BsFillArchiveFill, BsFillTagsFill } from "react-icons/bs";
import { FiThumbsUp, FiUsers, FiMail } from "react-icons/fi";
import {AiOutlineWhatsApp,AiFillInstagram, AiOutlineYoutube} from "react-icons/ai"
import { useMediaQuery } from '@mui/material';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie } from "recharts";
import Profile from "../components/Profile";

function Home() {
  const [open, setOpen] = useState(false);
  const [profileData, setProfile] = useState({});
  const isMaxWidth1275 = useMediaQuery('(max-width:1275px)');
  const Piechartdata = [
    { name: "Basic Tees", value: 550 },
    { name: "Custom Short Pants", value: 310 },
    { name: "Super Hoodies", value: 140 },
  ];
  const PIECHARTCOLORS = ["#98D89E", "#F6DC7D", "#EE8484"];
  const data = [
    {
      name: "Week 1",
      User: 500,
      Guest: 400,
    },
    {
      name: "Week 2",
      User: 350,
      Guest: 450,
    },
    {
      name: "Week 3",
      User: 200,
      Guest: 300,
    },
    {
      name: "Week 4",
      User: 400,
      Guest: 350,
    },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleProfile = (data) => {
    console.log(data);
    console.log(typeof data); 
    setProfile({...data});
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <main className="main-container">
        <div className="main-cards">
          <div className="card">
            <div className="icons" style={{ background: "#7FCD93" }}>
              {" "}
              <BsFillArchiveFill />{" "}
            </div>
            <p>Total Revenues</p>
            <div className="gain">
              <h2>$2,129,430</h2>
              <p>+1.7%</p>
            </div>
          </div>
          <div className="card">
            <div className="icons" style={{ background: "#DEBF85" }}>
              {" "}
              <BsFillTagsFill />{" "}
            </div>
            <p>Total Transactions</p>
            <div className="gain">
              <h2>1,520</h2>
              <p>+1.7%</p>
            </div>
          </div>
          <div className="card">
            <div className="icons" style={{ background: "#ECA4A4" }}>
              {" "}
              <FiThumbsUp />{" "}
            </div>
            <p>Total Likes</p>
            <div className="gain">
              <h2>9,721</h2>
              <p>+1.7%</p>
            </div>
          </div>
          <div className="card">
            <div className="icons" style={{ background: "#A9B0E5" }}>
              {" "}
              <FiUsers />{" "}
            </div>
            <p>Total Users</p>

            <div className="gain">
              <h2>9,721</h2>
              <p>+1.7%</p>
            </div>
          </div>
        </div>

        <div className="singlechart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
            
              data={data}
              margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar barSize={20} dataKey="User" fill="#98D89E" />
              <Bar barSize={20} dataKey="Guest" fill="#EE8484" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="charts">
          <div className="halfchart secondchart">
            <ResponsiveContainer width="50%" height="100%">
              <PieChart>
                <Pie
                  data={Piechartdata}
                  cx={120}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIECHARTCOLORS[index % PIECHARTCOLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="chart-details">
              <div>
                <p className="colorview" style={{ background: "#98D89E" }} />{" "}
                Basic Tees
              </div>
              <div>
                <p className="colorview" style={{ background: "#F6DC7D" }} />{" "}
                Custom Short Pants
              </div>
              <div>
                <p className="colorview" style={{ background: "#EE8484" }} />{" "}
                Super Hoodies
              </div>
            </div>
          </div>
          {(profileData && Object.keys(profileData).length > 0) ? (
        <div className="halfchart profiledetails"> 
        <h2>{profileData.name}</h2>
        <div className="otherdetails">
          <p><AiOutlineWhatsApp style={{color:"green"}}/>{profileData.phone}</p>
          <p><FiMail style={{color:"purple"}}/>{profileData.email}</p>
          <p><AiFillInstagram style={{color:"pink"}}/>{profileData.instagram}</p>
          <p><AiOutlineYoutube style={{color:"red"}}/>{profileData.youtube}</p>
        </div>
        </div>
      ) : ( 
        <div className="halfchart profilesection">
            <div onClick={handleClickOpen}> + </div>
            <p>Add Profile</p>
          </div>
    
      )}
        </div>
      </main>
      <Profile handleProfile={handleProfile}  handleClose={handleClose} open={open}/>
    </>
  );
}

export default Home;

