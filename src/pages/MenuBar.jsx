import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 390px;
  height: 62px;
  background: #fff;
`;
const Btn = styled.div``;

const MenuBar = () => {
  return (
    <Container>
      <Btn>
        <img
          src={`${process.env.PUBLIC_URL}/images/home.svg`}
          alt="logo"
          width="20.5px"
        />
      </Btn>
      <Btn>
        <img
          src={`${process.env.PUBLIC_URL}/images/product.svg`}
          alt="logo"
          width="22px"
        />
      </Btn>
      <Btn>
        <img
          src={`${process.env.PUBLIC_URL}/images/asset.svg`}
          alt="logo"
          width="22px"
        />
      </Btn>
      <Btn>
        <img
          src={`${process.env.PUBLIC_URL}/images/stock.svg`}
          alt="logo"
          width="22px"
        />
      </Btn>
      <Btn>
        <img
          src={`${process.env.PUBLIC_URL}/images/menu.svg`}
          alt="logo"
          width="22px"
        />
      </Btn>
    </Container>
  );
};

export default MenuBar;
