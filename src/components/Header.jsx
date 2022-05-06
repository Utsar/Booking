import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
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

// Search bar options
const Options = styled.div`
  position: absolute;
  top: 50px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`;
const OptionItem = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin: 10px;
`;
const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;
const OptionText = styled.span``;
const OptionCounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: white;

  :disabled {
    cursor: not-allowed;
    background-color: tomato;
    transition: 0.3s ease-in-out;
  }

  ${(props) =>
    props.toggleInvalid &&
    css`
      background-color: tomato;
      transition: 0.3s ease-in-out;
    `}
`;
const OptionCounterNumber = styled.span``;

const Header = ({ type }) => {
  // date picker using date-range library, here we set up use state as per docs spec
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // options for number of adults, children and room picker

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 2,
  });

  // testing toggle css function - come back later for this
  // const [toggle, setToggle] = useState(false);

  // options button handleclick function

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

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
          {/* search area from down on here */}
          {type !== "list" && (
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
                {/* onclick event for toggling date picker calendar open and close */}
                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                {/* dateRange library wrapped in DatePicker styled component */}
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
                <span
                  onClick={() => setOpen(!open)}
                >{`${options.adult} adults ${options.children} children ${options.room} room`}</span>
                {open && (
                  <Options>
                    <OptionItem>
                      <OptionText>Adult</OptionText>
                      <OptionCounter>
                        <OptionCounterButton
                          // toggleInvalid={toggle} come back later to this testing toggle attribute
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "decrease")}
                        >
                          -
                        </OptionCounterButton>
                        <OptionCounterNumber>
                          {options.adult}
                        </OptionCounterNumber>
                        <OptionCounterButton
                          onClick={() => handleOption("adult", "increase")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <OptionText>children</OptionText>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "decrease")}
                        >
                          -
                        </OptionCounterButton>
                        <OptionCounterNumber>
                          {options.children}
                        </OptionCounterNumber>
                        <OptionCounterButton
                          onClick={() => handleOption("children", "increase")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <OptionText>Room</OptionText>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "decrease")}
                        >
                          -
                        </OptionCounterButton>
                        <OptionCounterNumber>
                          {options.room}
                        </OptionCounterNumber>
                        <OptionCounterButton
                          onClick={() => handleOption("room", "increase")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                  </Options>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <SearchButton>Search</SearchButton>
              </HeaderSearchItem>
            </HeaderSearch>
          )}
        </HeaderContainer>
      </Wrapper>
    </>
  );
};

export default Header;
