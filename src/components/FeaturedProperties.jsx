import styled from "styled-components";

const Property = styled.div`
  img {
  }
`;
const PropertyName = styled.span``;
const PropertyCity = styled.span``;
const PropertyPrice = styled.span``;

const FeaturedProperties = () => {
  return (
    <>
      <Property>
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max500/106393405.jpg?k=237d0a65974505ec4d34765c230ad8c6198e0cc4f807e4f8c542ef95c89a38ab&o=)"
          alt="the patio barcelona"
        />
        <PropertyName>The Patio Barcelona</PropertyName>
        <PropertyCity>Barcelona</PropertyCity>
        <PropertyPrice>Starting from $300 </PropertyPrice>
      </Property>
    </>
  );
};

export default FeaturedProperties;
