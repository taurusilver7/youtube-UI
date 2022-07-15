import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  align-items: center;
  ${"" /* justify-content: center; */}
  color: white;
`;
const Main = styled.div`
  flex: 7;
`;

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
      </Main>
    </Container>
  );
}

export default App;
