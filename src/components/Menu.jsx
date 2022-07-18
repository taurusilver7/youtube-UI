import React from "react";
import styled from "styled-components";
import logo from "../logo.png";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Container = styled.div`
  position: sticky;
  top: 0;
  flex: 1.75;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  /* border-right: 0.1px solid ${({ theme }) => theme.soft}; */
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  font-style: normal;
  font-size: 16px;
  margin-bottom: 0.5rem;
`;

const Img = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  padding: 0.5rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 5px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
  font-size: 12px;
`;
const Button = styled.button`
  padding: 0.45rem 0.7rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 0.7rem;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 12px;
  font-weight: 500;
  color: #aaa;
  margin-bottom: 5px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logo} alt="logo"></Img>
            Inshot Premiere
          </Logo>
        </Link>

        <Item>
          <HomeIcon />
          Home
        </Item>
        <Link to="/trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </Link>
        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Login>
          Sign in to like, comment & subscribe
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              Sign in
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>Best of Inshot</Title>
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>

        <Hr />

        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
