import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLight};
  height: 56px;
`;

const Navbar = () => {
  return <Container>Navbar</Container>;
};

export default Navbar;
