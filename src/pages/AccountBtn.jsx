import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Btn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  width: 345px;
  height: 54px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 3.3px 4px rgba(0, 0, 0, 0.05);
  #hana {
    margin-left: 15px;
  }
  #wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 100px;
  }
  #owner {
    color: #474c52;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.16px;
  }
  #cash {
    color: #333;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;
  }
  #icon {
    margin-left: 140px;
  }
`;


const AccountBtn = ({ icon }) => {
  const navigate = useNavigate();
  return (
    <Btn onClick={() => navigate("/account")}>
      <img
        src={`${process.env.PUBLIC_URL}/images/hanalogo.svg`}
        width="20px"
        id="hana"
      />
      <span id="wrapper">
        <span id="owner">HappyHana의 통장</span>
        <span id="cash">285,687원</span>
      </span>
      <img
        src={`${process.env.PUBLIC_URL}/images/${icon}.svg`}
        width="20px"
        id="icon"
      />
    </Btn>
  );
};

export default AccountBtn;
