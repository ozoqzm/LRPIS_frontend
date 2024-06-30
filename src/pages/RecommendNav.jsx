import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBar = styled.div`
  position: relative;
  margin: 0 auto;
  width: 370px;
  height: 61px;
  display: flex;
  align-items: center;
  padding: 0 10px; 
`;
const Backicon = styled.span`
  margin-top: 10px;
  cursor : pointer;
`;
const PageTitle = styled.div`
  width : 180px;
  color: var(--Green, #089995);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: center;

  margin-top : 8px;

`;
const Icon = styled.span`
`;
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
  width: 60px;
  display: flex;
  justify-content: space-between;
  margin-left : 55px;
  margin-top : 10px;
`;
const LanWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap : 3px;
  margin-top : 10px;
`;
const RecommendNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar>
      <Backicon onClick={() => navigate(-1)}>
          <img src="../images/backicon.svg" alt="Back" />
        </Backicon>
        <PageTitle>
          유학생 추천 구인구직
        </PageTitle>
        <LanWrapper>
          <Icon>
            <img
              src={`${process.env.PUBLIC_URL}/images/language.svg`}
              width="14px"
            />
          </Icon>
          <Language>Korean</Language>
          <img
            src={`${process.env.PUBLIC_URL}/images/right2.svg`}
            height="6px"
          />
        </LanWrapper>
        <IconWrapper>
          <Icon>
            <img
              src={`${process.env.PUBLIC_URL}/images/notice.svg`}
              width="12px"
            />
          </Icon>
          <Icon>
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.svg`}
              width="15px"
            />
          </Icon>
          <Icon>
            <img
              src={`${process.env.PUBLIC_URL}/images/side.svg`}
              width="11.5px"
            />
          </Icon>
        </IconWrapper>
      </NavBar>
      
    </div>
  );
};

export default RecommendNav;
