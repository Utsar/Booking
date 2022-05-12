import styled from "styled-components";
import Featured from "../components/Featured";
import FeaturedProperties from "../components/FeaturedProperties";
import Header from "../components/Header";
import MailList from "../components/MailList";
import Navbar from "../components/Navbar";
import PropertyList from "../components/PropertyList";

const HomeContainer = styled.div`
  margin-top: 3.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;
`;
const HomeTitle = styled.h1`
  width: 1024px;
  font-size: 20px;
`;
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HomeContainer>
        <Featured />
        <HomeTitle>Browse by property type</HomeTitle>
        <PropertyList />
        <HomeTitle>Homes guests love</HomeTitle>
        <FeaturedProperties />
        <MailList />
      </HomeContainer>
    </>
  );
};

export default Home;
