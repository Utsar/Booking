import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  width: 1024px;
  font-size: 0.75rem;
`;
const FooterLists = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3.125rem;
`;
const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;
const FooterListItem = styled.li`
  margin-bottom: 0.625rem;
  color: #003580;
  cursor: pointer;
`;
const FooterText = styled.div``;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterLists>
          <FooterList>
            <FooterListItem>Countries</FooterListItem>
            <FooterListItem>Regions</FooterListItem>
            <FooterListItem>Cities</FooterListItem>
            <FooterListItem>Districts</FooterListItem>
            <FooterListItem>Airports</FooterListItem>
            <FooterListItem>Hotels</FooterListItem>
            <FooterListItem>Places of interest</FooterListItem>
          </FooterList>
          <FooterList>
            <FooterListItem>Homes</FooterListItem>
            <FooterListItem>Apartments</FooterListItem>
            <FooterListItem>Resorts</FooterListItem>
            <FooterListItem>Villas</FooterListItem>
            <FooterListItem>Hostels</FooterListItem>
            <FooterListItem>B&amp;Bs</FooterListItem>
            <FooterListItem>Guest Houses</FooterListItem>
          </FooterList>
          <FooterList>
            <FooterListItem>Unique places to stay</FooterListItem>
            <FooterListItem>All destinations</FooterListItem>
            <FooterListItem>Discover</FooterListItem>
            <FooterListItem>Reviews</FooterListItem>
            <FooterListItem>Unpacked: Travel articles</FooterListItem>
            <FooterListItem>Travel communities</FooterListItem>
            <FooterListItem>Seasonal and holiday deals</FooterListItem>
          </FooterList>
          <FooterList>
            <FooterListItem>Car rental</FooterListItem>
            <FooterListItem>Flight finder</FooterListItem>
            <FooterListItem>Restaurant reservations</FooterListItem>
            <FooterListItem>utsarBooking for travel Agents</FooterListItem>
            <FooterListItem>Airports</FooterListItem>
            <FooterListItem>Hotels</FooterListItem>
            <FooterListItem>Hotels</FooterListItem>
          </FooterList>
          <FooterList>
            <FooterListItem>Countries</FooterListItem>
            <FooterListItem>Regions</FooterListItem>
            <FooterListItem>Cities</FooterListItem>
            <FooterListItem>Districts</FooterListItem>
            <FooterListItem>Airports</FooterListItem>
            <FooterListItem>Hotels</FooterListItem>
            <FooterListItem>Hotels</FooterListItem>
          </FooterList>
        </FooterLists>
        <FooterText>Copyright 2022</FooterText>
      </FooterWrapper>
    </>
  );
};

export default Footer;
