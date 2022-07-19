import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { format } from "timeago.js";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 25px 0px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 11px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 12px;
`;

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/find/${comment.userId}`);
      setChannel(res.data);
    };
    return () => {
      fetchComment();
    };
  }, [comment.userId]);
  return (
    <Container>
      <Avatar src={channel?.image} />
      <Details>
        <Name>
          {channel?.name} <Date>{format(comment.createdAt)}</Date>
        </Name>
        <Text>{comment.description}</Text>
      </Details>
    </Container>
  );
};

export default Comment;
