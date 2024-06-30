import React, { useState } from "react";
import { styled } from "styled-components";
import MenuBar from "./MenuBar";
import Nav from "./NavBar";


const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 800px;
  background: var(--Gray-Mobileregular, #f6f7f9);
`;

const RecommendPage = () => {
  
    return (
      <Container>
        <Nav />
        <MenuBar />
      </Container>
    );
  };
  
  export default RecommendPage;