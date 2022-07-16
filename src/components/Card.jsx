import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
  padding: 1px 5px;
  gap: 12px;
`;

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div`
  margin-top: -10px;
`;
const Title = styled.h1`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Channel = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px 0px 0px;
  font-weight: 100;
`;
const Info = styled.div`
  font-size: 14px;
  font-weight: 50;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/videos/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://i.ytimg.com/vi/C5fLxtJH2Qs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxwLHjOgAxes1042xYKq8bl_oV1A" />
        <Details>
          <ChannelImg />
          <Texts>
            <Title>Video name</Title>
            <Channel>Channel Name</Channel>
            <Info>views number & publish date</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
