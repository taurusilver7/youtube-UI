import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 360px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 50%;
  height: 100px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  gap: 5px;
`;

const Title = styled.h1`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Channel = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  margin-top: -5px;
`;
const Info = styled.div`
  font-size: 11px;
  font-weight: 400;
  margin-top: -5px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/videos/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://i.ytimg.com/vi/C5fLxtJH2Qs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxwLHjOgAxes1042xYKq8bl_oV1A" />
        <Details>
          <Title>Video name</Title>
          <Channel>Channel Name</Channel>
          <Info>views number & publish date</Info>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
