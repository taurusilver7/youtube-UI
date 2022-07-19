import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import Upload from "./Upload";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bg};
  height: 60px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  position: relative;
  justify-content: flex-end;
`;
const Search = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  position: absolute;
  left: -20px;
  right: 30%;
  margin: auto;
  gap: 5;
  background-color: ${({ theme }) => theme.soft};
  justify-content: space-between;
  padding: 5px;
  border-radius: 3px;
`;
const Input = styled.input`
  width: 90%;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.bgLight};
  padding: 10px 15px;
  color: ${({ theme }) => theme.textSoft};
`;

const User = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Button = styled.button`
  padding: 0.45rem 0.7rem;
  background-color: transparent;
  display: flex;
  gap: 5px;
  align-items: center;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 0.7rem;
  cursor: pointer;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Container>
        <Wrapper>
          <>
            <Search>
              <Input />
              <SearchOutlinedIcon />
            </Search>
            <MicOutlinedIcon
              style={{ padding: "10px 10px 0 0", color: "#3ea6ff" }}
            />
          </>
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
              <NotificationsOutlinedIcon />
              <Avatar src={currentUser?.image} />
              {currentUser?.name}
            </User>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                Sign in
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
