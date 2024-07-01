import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBar = styled.div`
  position: relative;
  margin: 0 auto;
  width: 370px;
  height: 61px;
  display: flex;
  align-items: center;
  padding: 0 23px;
`;

const Backicon = styled.span`
  cursor: pointer;
`;

const PageTitle = styled.div`
  color: var(--Green, #089995);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: left;
  padding-left: 14px;
`;

const Icon = styled.span``;

const Language = styled.span`
  color: var(--Green, #089995);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.2px;
  margin-left: 3px;
  line-height: 1;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 23px;
  width: 60px;
  display: flex;
  justify-content: space-between;
`;

const LanWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 3px;
  align-items: center;
  position: absolute;
  right: 97px;
`;

const ChatbotNav = () => {
  const navigate = useNavigate();

  return (
    <NavBar>
      <Backicon onClick={() => navigate(-1)}>
        <img src={`${process.env.PUBLIC_URL}/images/backicon.svg`} alt="Back" />
      </Backicon>
      <PageTitle>AI 챗봇</PageTitle>
      <LanWrapper>
        <Icon>
          <img src={`${process.env.PUBLIC_URL}/images/language.svg`} width="14px" alt="Language" />
        </Icon>
        <Language>Korean</Language>
        <img src={`${process.env.PUBLIC_URL}/images/right2.svg`} height="6px" alt="Right arrow" />
      </LanWrapper>
      <IconWrapper>
        <Icon>
          <img src={`${process.env.PUBLIC_URL}/images/notice.svg`} width="12px" alt="Notice" />
        </Icon>
        <Icon>
          <img src={`${process.env.PUBLIC_URL}/images/profile.svg`} width="15px" alt="Profile" />
        </Icon>
        <Icon>
          <img src={`${process.env.PUBLIC_URL}/images/side.svg`} width="11.5px" alt="Side" />
        </Icon>
      </IconWrapper>
    </NavBar>
  );
};

export default ChatbotNav;
