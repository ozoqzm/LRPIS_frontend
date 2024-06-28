import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  height: 62px;
  background: #fff;
`;
const Btn = styled.div``;

const MenuBar = () => {
  return (
    <Container>
      <Btn></Btn>
      <Btn></Btn>
      <Btn></Btn>
      <Btn></Btn>
      <Btn></Btn>
    </Container>
  );
};

export default MenuBar;
