import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const Profile = ({ handleClose, open,handleProfile }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [next, setNext]=useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });
  const buttonStyle1 = {
    borderBottom: next ? '5px solid #3c7fef' : '5px solid grey',
  };
  const buttonStyle2 = {
    borderBottom: !next ? '5px solid #3c7fef' : '5px solid grey',
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Check if all fields are filled
    const { name, email, phone, instagram, youtube } = formData;
  
    if (!name || !email || !phone || !instagram || !youtube) {
      alert("All fields are required.");
      return;
    }
  
    // Check if the phone number has 10 characters
    if (phone.length !== 10) {
      alert("Phone number must be 10 digits long.");
      return;
    }
  
    // All validation checks passed, proceed to store in localStorage
    handleProfile(formData);
    handleClose();
  };
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            <ProfileContainer>
              <div className="header">
                <h2>Add New Profile</h2>
                <h3 onClick={handleClose}>X</h3>
              </div>
              <div className="buttons">
                <CustomButton style={buttonStyle2} >Basic</CustomButton>
                <CustomButton style={buttonStyle1}>Contact</CustomButton>
              </div>
              {!next && (
        <>
          <p>Enter Name*</p>
          <input
            name="name"
            placeholder="Eg: John Doe"
            value={formData.name}
            onChange={handleInputChange}
          />
          <p>Enter Email*</p>
          <input
            name="email"
            placeholder="Eg: john@xyz.com"
            value={formData.email}
            onChange={handleInputChange}
          />
          <p>Enter Phone*</p>
          <input
            name="phone"
            placeholder="Eg: 9999123123"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <button className="next-btn" onClick={() => setNext(true)}>
            Next
          </button>
        </>
      )}
              {next && 
                <>
          <p>Instagram Link</p>
          <input
            name="instagram"
            placeholder="Eg: instagram.com/username"
            value={formData.instagram}
            onChange={handleInputChange}
          />
          <p>Youtube Link</p>
          <input
            name="youtube"
            placeholder="Eg: youtube.com/username"
            value={formData.youtube}
            onChange={handleInputChange}
          />
                <div className="btn-box">
                
                <button className="next-btn" style={{background:"white", border:"1px solid black",color:"black"}}  onClick={()=>setNext(false)}>Back</button>
                <button className="next-btn" onClick={handleSubmit}>Done</button>

                </div>
              </>
              
              }
            </ProfileContainer>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  width: 500px;
  background:#f8faff;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
color:black;

.header{
  display:flex;
  justify-content:space-between;
  color:black;

  h3{
    color:grey;
    cursor:pointer;
  }
}

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  input{
    border:none;
    padding:10px;
    background-color:white;

  }

  .next-btn{
    align-self:flex-end;
    padding:10px;
    background:#3c7fef;
    border:none;
    color:white;
    cursor:pointer;
    font-weight:bold;
    border-radius:10px;
    letter-spacing:1px;
  }

  .btn-box{
    display:flex;
    width:100%;
    justify-content:flex-end;
    column-gap:5px;
  }
`;

const CustomButton = styled.button`
border:none;
  width:45%;
cursor:pointer;
  font-size: 16px;
  padding: 10px 0;
  font-weight:bold;
  background-color:white;
`;


