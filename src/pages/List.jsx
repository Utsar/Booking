import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
`;

const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 1.25rem;
`;
const ListSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  position: sticky;
  top: 0.625rem;
  height: max-content;
  padding: 0.625rem;
  border-radius: 0.625rem;
`;
const ListTitle = styled.h1`
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 0.625rem;
`;
const ListSearchItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  margin-bottom: 0.625rem;
  label {
    font-size: 0.75rem;
  }
`;
const DestinationInput = styled.input`
  height: 1.875rem;
  border: none;
  padding: 0.3125rem;
`;
const ListSearchDate = styled.span`
  height: 1.875rem;
  padding: 0.3125rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const DatePicker = styled.div``;
const ListSearchOptions = styled.div`
  padding: 0.625rem;
`;
const ListSearchOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.625rem;
  color: #555;
  font-size: 0.75rem;
`;
const ListSearchOptionText = styled.span``;
const ListSearchOptionInput = styled.input`
  width: 3.125rem;
`;
const SearchButton = styled.button`
  padding: 0.75rem;
  background-color: #0071c2;
  color: white;
  border: none;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
`;
const ListResult = styled.div`
  flex: 3;
`;

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  console.log(location);
  return (
    <>
      <Navbar />
      <Header type="list" listMode />
      <ListContainer>
        <ListWrapper>
          <ListSearch>
            <ListTitle>Search</ListTitle>
            <ListSearchItem>
              <label>Destination</label>
              <DestinationInput placeholder={destination} type="text" />
            </ListSearchItem>
            <ListSearchItem>
              <label>Check-in Date</label>
              <ListSearchDate onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</ListSearchDate>
              {openDate && (
                <DatePicker>
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                </DatePicker>
              )}
            </ListSearchItem>
            <ListSearchItem>
              <lablel>Options</lablel>
              <ListSearchOptions>
                <ListSearchOptionItem>
                  <ListSearchOptionText>
                    Min price <small>per night</small>
                  </ListSearchOptionText>
                  <ListSearchOptionInput type="number" />
                </ListSearchOptionItem>
                <ListSearchOptionItem>
                  <ListSearchOptionText>
                    Max price <small>per night</small>
                  </ListSearchOptionText>
                  <ListSearchOptionInput type="number" />
                </ListSearchOptionItem>
                <ListSearchOptionItem>
                  <ListSearchOptionText>Adult</ListSearchOptionText>
                  <ListSearchOptionInput
                    type="number"
                    min={1}
                    placeholder={options.adult}
                  />
                </ListSearchOptionItem>
                <ListSearchOptionItem>
                  <ListSearchOptionText>Children</ListSearchOptionText>
                  <ListSearchOptionInput
                    type="number"
                    min={0}
                    placeholder={options.children}
                  />
                </ListSearchOptionItem>
                <ListSearchOptionItem>
                  <ListSearchOptionText>Room</ListSearchOptionText>
                  <ListSearchOptionInput
                    type="number"
                    min={1}
                    placeholder={options.room}
                  />
                </ListSearchOptionItem>
              </ListSearchOptions>
            </ListSearchItem>
            <SearchButton>Search</SearchButton>
          </ListSearch>
          <ListResult></ListResult>
        </ListWrapper>
      </ListContainer>
    </>
  );
};

export default List;
