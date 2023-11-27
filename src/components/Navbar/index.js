import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import CustomButton from "../CustomButton";
import Tab from "../Tab";
import "./index.scss";

const StyledButton = styled(Button)`
  background-color: rgba(210, 55, 93, 1);
  border-radius: 16px;
  color: white;
  width: 99px;
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 40px;
  font-family: 'Urbanist', sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: none;

  &:hover {
    background-color:  rgba(210, 55, 93, 0.8) ;
  }
`

const Navbar = () => {
  const tabList = [
    {
      icon: "/icon-discover.svg",
      tabName: "Discover"
    },
    {
      icon: "/icon-message.svg",
      tabName: "Messages"
    },
    {
      icon: "/icon-favourite.svg",
      tabName: "Favorites"
    },
    {
      icon: "/icon-settings.svg",
      tabName: "Settings"
    },
  ]

  return (
    <div className="navbar">
      <div className="navbar-leftpane">
        <div className="navbar-logo">
          <img src="/logo.svg" alt="logo"></img>
        </div>
        <div className="nav-bar-tabs-wrapper">
          <div className="nav-bar-tabs">
            <StyledButton>
              <img 
                src="/icon-home.svg" 
                alt="home icon" 
                width={"12px"}
              />
              <span>Home</span>
            </StyledButton>
            {
              tabList.map((item, index) =>
                <Tab
                  key={index}
                  icon={item.icon}
                  tabName={item.tabName}
                />
              )
            }
          </div>
        </div>
      </div>
      <div className="navbar-rightpane">
        <div className="navbar-rightpane-button-group">
          <CustomButton 
            icon="/icon-ring.svg"
            isNotification={true}
            count={2}
          />
          <CustomButton 
            icon="/icon-microphone.svg"
            isNotification={false}
          />
        </div>
        <div className="navbar-rightpane-avatar">
          A
        </div>
      </div>
    </div>
  )
}

export default Navbar;