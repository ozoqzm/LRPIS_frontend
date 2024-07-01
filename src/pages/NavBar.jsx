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
  justify-content: space-between;
`;
const Logo = styled.span`
  margin-top: 10px;
`;
const Icon = styled.span``;
const Language = styled.span`
  color: var(--Green, #089995);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.2px;
  margin-left: -4px;
  line-height: 1;
`;
const IconWrapper = styled.div`
  width: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconWrapper2 = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
`;
const LanWrapper = styled.div`
  margin-top: 3px;
  width: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar>
        <IconWrapper>
          <Logo onClick={() => navigate("/")}>
            <img
              src={`${process.env.PUBLIC_URL}/images/lrpislogo.svg`}
              alt="logo"
              width="45px"
            />
          </Logo>
          <LanWrapper onClick={() => navigate("/ing")}>
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
        </IconWrapper>
        <IconWrapper2>
          <Icon>
            <img
              src={`${process.env.PUBLIC_URL}/images/notice.svg`}
              width="12px"
            />
          </Icon>
          <Icon onClick={() => navigate("/ing")}>
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.svg`}
              width="15px"
            />
          </Icon>
          <Icon>
            <img
              src={`${process.env.PUBLIC_URL}/images/side.svg`}
              width="11.5px"
              onClick={() => navigate("/menupage")} 
            />
          </Icon>
        </IconWrapper2>
      </NavBar>
    </div>
  );
};

export default Nav;
