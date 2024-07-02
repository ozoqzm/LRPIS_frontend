import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 390px;
  height: 62px;
  background: #fff;
`;
const Btn = styled.div`
  cursor: pointer;
`;

const MenuBar = () => {
  const navigate = useNavigate();

  const gotoMenu = () => {
    navigate("/menupage");
  };
  const gotoMain = () => {
    navigate("/");
  };
  return (
    <Container>
      <Btn onClick={gotoMain}>
        <img
          src={`${process.env.PUBLIC_URL}/images/home.png`}
          alt="logo"
          width="20.5px"
        />
      </Btn>
      <Btn onClick={() => navigate("/ing")}>
        <img
          src={`${process.env.PUBLIC_URL}/images/product.png`}
          alt="logo"
          width="22px"
        />
      </Btn>
      <Btn onClick={() => navigate("/ing")}>
        <img
          src={`${process.env.PUBLIC_URL}/images/asset.svg`}
          alt="logo"
          width="22px"
        />
      </Btn>
      <Btn onClick={() => navigate("/ing")}>
        <img
          src={`${process.env.PUBLIC_URL}/images/stock.svg`}
          alt="logo"
          width="22px"
        />
      </Btn>
      <Btn onClick={gotoMenu}>
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
