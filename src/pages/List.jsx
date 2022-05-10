import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const List = () => {
  return (
    <>
      <Navbar />
      <Header type="list" listMode />
    </>
  );
};

export default List;
