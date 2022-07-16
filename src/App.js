import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { DarkMode } from "./utlis/Theme";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  min-height: 100vh;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  color: white;
`;
const Main = styled.div`
  flex: 7;
  background-color: #181818;
`;
const Wrapper = styled.div``;

function App() {
  return (
    <ThemeProvider theme={DarkMode}>
      <Container>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
