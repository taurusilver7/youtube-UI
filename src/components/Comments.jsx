import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import axios from "axios";
import { useSelector } from "react-redux";

const Container = styled.div``;

const CommentTrack = styled.h4`
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
`;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(`/comments/${videoId}`);
      setComments(res.data);
    };
    return () => {
      fetchComments();
    };
  }, [videoId]);
  return (
    <Container>
      <CommentTrack>23 Comments</CommentTrack>
      <NewComment>
        <Avatar src={currentUser?.image} />
        <Input placeholder="Add a comment..." />
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;
