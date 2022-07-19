import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
`;

const Image = styled.img`
  width: ${(props) => (props.type === "sm" ? "50%" : "100%")};
  height: ${(props) => (props.type === "sm" ? "100px" : "200px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  padding: 1px 5px;
  gap: 12px;
  flex: 1;
`;

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
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

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});
  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    return () => {
      fetchChannel();
    };
  }, [video.userId]);

  return (
    <Link to={`/videos/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video?.imgUrl} />
        <Details type={type}>
          <ChannelImg type={type} src={channel?.image} alt="" />
          <Texts>
            <Title>{video.title}</Title>
            <Channel>{channel?.name}</Channel>
            <Info>
              {video?.views} views · {format(video?.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
