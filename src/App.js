import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { DarkMode, LightMode } from "./utlis/Theme";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 8.5;
  background-color: ${({ theme }) => theme.bgDark};
`;
const Wrapper = styled.div`
  padding: 20px 10px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? DarkMode : LightMode}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="videos">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
