import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { format } from "date-fns";

const Wrapper = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;
const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`;
const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
`;

const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  :active {
    border: 1px solid white;
    padding: 10px;
    border-radius: 20px;
  }
`;

const HeaderTitle = styled.h1``;
const HeaderDescription = styled.p`
  margin: 20px 0px;
`;
const HeaderButton = styled.button`
  background-color: #0071c2;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

// searchbar
const HeaderSearch = styled.div`
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
`;
const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    color: lightgray;
    cursor: pointer;
  }
`;
const HeaderSearchIcon = styled.div`
  color: lightgray;
`;
const HeaderSearchInput = styled.input`
  border: none;
  outline: none;
`;
const SearchButton = styled(HeaderButton)``;
const DatePicker = styled.div`
  position: absolute;
  top: 50px;
`;

const Header = () => {
  // date picker using date-range library, here we set up use state as per docs spec
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <>
      <Wrapper>
        <HeaderContainer>
          <HeaderList>
            <HeaderListItem>
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </HeaderListItem>
            <HeaderListItem>
              <FontAwesomeIcon icon={faPlane} />
              <span>Fligths</span>
            </HeaderListItem>
            <HeaderListItem>
              <FontAwesomeIcon icon={faCar} />
              <span>Car</span>
            </HeaderListItem>
            <HeaderListItem>
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </HeaderListItem>
            <HeaderListItem>
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxi</span>
            </HeaderListItem>
          </HeaderList>
          <HeaderTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            libero?
          </HeaderTitle>
          <HeaderDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa
            labore debitis soluta at consequatur quis fugiat veniam porro
            ratione.
          </HeaderDescription>
          <HeaderButton>Sign in / Register</HeaderButton>
          <HeaderSearch>
            <HeaderSearchItem>
              <HeaderSearchIcon>
                <FontAwesomeIcon icon={faBed} />
              </HeaderSearchIcon>
              <HeaderSearchInput
                type="text"
                placeholder="Where are you going?"
              />
            </HeaderSearchItem>
            <HeaderSearchItem>
              <HeaderSearchIcon>
                <FontAwesomeIcon icon={faCalendarDays} />
              </HeaderSearchIcon>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
              {openDate && (
                <DatePicker>
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                  />
                </DatePicker>
              )}
            </HeaderSearchItem>
            <HeaderSearchItem>
              <HeaderSearchIcon>
                <FontAwesomeIcon icon={faPerson} />
              </HeaderSearchIcon>
              <span>2 adults 2 children 1 room</span>
            </HeaderSearchItem>
            <HeaderSearchItem>
              <SearchButton>Search</SearchButton>
            </HeaderSearchItem>
          </HeaderSearch>
        </HeaderContainer>
      </Wrapper>
    </>
  );
};

export default Header;
