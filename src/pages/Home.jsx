import styled from "styled-components";
import Featured from "../components/Featured";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HomeContainer>
        <Featured />
      </HomeContainer>
    </>
  );
};

export default Home;
