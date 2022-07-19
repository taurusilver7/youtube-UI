import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 60px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 22px;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;
const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { name, password });
      // console.log(res.data);
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  const signinWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        axios
          .post("/auth/google", {
            name: result.user.displayName,
            email: result.user.email,
            image: result.user.photoURL,
          })
          .then((res) => {
            console.log(res);
            dispatch(loginSuccess(res.data));
            navigate("/");
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>Sign in to Inshot Premiere</SubTitle>
        <Input
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <Button onClick={handleLogin}>Sign In</Button>
        <Button onClick={signinWithGoogle}>Sign in with Google</Button>
        <SubTitle>New here? It's easy to register</SubTitle>
        <Input
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Login;
