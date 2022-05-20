import styled from "styled-components";

const SearchWrapper = styled.div`
  border: 1px solid lightgray;
  padding: 0.625rem;
  border-radius: 0.3125rem;
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  img {
    width: 12.5rem;
    height: 12.5rem;
    object-fit: cover;
  }
`;
const SearchItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  flex: 2;
`;
const SearchTitle = styled.h1`
  font-size: 1.25rem;
  color: #0071c2;
`;
const SearchDistance = styled.span`
  font-size: 0.75rem;
`;
const SearchTaxiOption = styled.span`
  font-size: 0.75rem;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 0.1875rem;
  border-radius: 0.3125rem;
`;
const SearchSubstitle = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
`;
const SearchFeatures = styled.span`
  font-size: 0.75rem;
`;
const SearchCancelOption = styled.span`
  font-size: 0.75rem;
  color: #008009;
  font-weight: bold;
`;
const CancelOptionSubtitle = styled.span`
  font-size: 0.75rem;
  color: #008009;
`;
const SearchItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SearchItemRating = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 500;
  }
`;
const RatingButton = styled.button`
  background-color: #003580;
  color: white;
  padding: 0.3125rem;
  font-weight: bold;
  border: none;
`;
const SearchItemDetailTexts = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`;
const SearchPrice = styled.span`
  font-size: 1.5rem;
`;
const AvailabilityButton = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 0.625rem 0.3125rem;
  border: none;
  cursor: pointer;
  border-radius: 0.3125rem;
`;

const SearchItem = () => {
  return (
    <SearchWrapper>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
      />
      <SearchItemDescription>
        <SearchTitle>Tower Street Apartments</SearchTitle>
        <SearchDistance>500m from center</SearchDistance>
        <SearchTaxiOption>Free airport taxi</SearchTaxiOption>
        <SearchSubstitle>
          Studio Apartment with Air conditioning
        </SearchSubstitle>
        <SearchFeatures>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </SearchFeatures>
        <SearchCancelOption>Free cancellation </SearchCancelOption>
        <CancelOptionSubtitle>
          You can cancel later, so lock in this great price today!
        </CancelOptionSubtitle>
      </SearchItemDescription>
      <SearchItemDetails>
        <SearchItemRating>
          <span>Excellent</span>
          <RatingButton>8.9</RatingButton>
        </SearchItemRating>
        <SearchItemDetailTexts>
          <SearchPrice>$112</SearchPrice>
          <SearchTaxiOption>Includes taxes and fees</SearchTaxiOption>
          <AvailabilityButton>See availability</AvailabilityButton>
        </SearchItemDetailTexts>
      </SearchItemDetails>
    </SearchWrapper>
  );
};

export default SearchItem;
