import React from "react";
import {
  BsFillBellFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { styled } from "styled-components";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left" >
      <div className='main-title'>
            <h3>Dashboard</h3>
        </div>
      </div>
      <div className="header-right">
        <InputContainer>
          <input placeholder="search..." />
          <BsSearch />
        </InputContainer>
        <BsFillBellFill className="icon" />

        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;

const InputContainer = styled.div`
  background: white;
  padding: 5px 20px;
  border-radius: 10px;
  input {
    border-radius: 10px;
    border: none;
    outline:none;
    font-size:14px;
    padding-right:10px;
  }
`;
