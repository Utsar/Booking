import styled from "styled-components";

const PropertiesContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
`;
const Property = styled.div`
  flex: 1;
  gap: 0.625rem;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
`;
const PropertyName = styled.span`
  font-weight: bold;
`;
const PropertyCity = styled.span`
  font-weight: 300;
`;
const PropertyPrice = styled.span`
  font-weight: 500;
`;
const PropertyRating = styled.div`
  font-size: 0.875rem;
`;
const RatingScore = styled.button`
  background-color: #003580;
  color: white;
  border: none;
  padding: 0.1875rem;
  margin-right: 0.625rem;
  font-weight: bold;
`;
const RatingDescription = styled.span``;

const FeaturedProperties = () => {
  return (
    <>
      <PropertiesContainer>
        <Property>
          <img
            src="https://t-cf.bstatic.com/xdata/images/hotel/max500/106393405.jpg?k=237d0a65974505ec4d34765c230ad8c6198e0cc4f807e4f8c542ef95c89a38ab&o=)"
            alt="the patio barcelona"
          />
          <PropertyName>The Patio Barcelona</PropertyName>
          <PropertyCity>Barcelona</PropertyCity>
          <PropertyPrice>Starting from $300 </PropertyPrice>
          <PropertyRating>
            <RatingScore>8.9</RatingScore>
            <RatingDescription>Excellent</RatingDescription>
          </PropertyRating>
        </Property>
        <Property>
          <img
            src="https://t-cf.bstatic.com/xdata/images/hotel/max500/106393405.jpg?k=237d0a65974505ec4d34765c230ad8c6198e0cc4f807e4f8c542ef95c89a38ab&o=)"
            alt="the patio barcelona"
          />
          <PropertyName>The Patio Barcelona</PropertyName>
          <PropertyCity>Barcelona</PropertyCity>
          <PropertyPrice>Starting from $300 </PropertyPrice>
          <PropertyRating>
            <RatingScore>8.9</RatingScore>
            <RatingDescription>Excellent</RatingDescription>
          </PropertyRating>
        </Property>
        <Property>
          <img
            src="https://t-cf.bstatic.com/xdata/images/hotel/max500/106393405.jpg?k=237d0a65974505ec4d34765c230ad8c6198e0cc4f807e4f8c542ef95c89a38ab&o=)"
            alt="the patio barcelona"
          />
          <PropertyName>The Patio Barcelona</PropertyName>
          <PropertyCity>Barcelona</PropertyCity>
          <PropertyPrice>Starting from $300 </PropertyPrice>
          <PropertyRating>
            <RatingScore>8.9</RatingScore>
            <RatingDescription>Excellent</RatingDescription>
          </PropertyRating>
        </Property>
      </PropertiesContainer>
    </>
  );
};

export default FeaturedProperties;
