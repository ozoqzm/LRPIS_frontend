import React from "react";
import { styled } from "styled-components";
import MenuBar from "./MenuBar";
import Nav from "./NavBar";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  min-height: 1241px;
  background: var(--Gray-Mobileregular, #f6f7f9);
`;
const Banner = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  width: 345px;
  height: 51px;
  border-radius: 15px;
  background: #ecedf1;
  color: #393939;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-items: center;

  #card {
    margin-left: 15px;
  }
  #text {
    margin-left: 8px;
  }
  #right {
    margin-left: 60px;
  }
`;

const DepositNotice = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 30px;
  #nickname {
    color: #474c52;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  }
  #content {
    color: #333;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.36px;
  }
`;
const AccountBtn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 15px;
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
    font-family: Inter;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.16px;
  }
  #cash {
    color: #333;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;
  }
  #dot {
    margin-left: 140px;
  }
`;
const Exception = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 15px;
  color: #888;
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  text-decoration-line: underline;
`;
const Title = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 30px;
  color: #333;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.36px;
`;
const BoardWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  height: 200px;
  overflow-x: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const ManageBoard = styled.div`
  position: relative;
  margin-left: 20px;
  width: 180px;
  height: 197px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 3.3px 4px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
`;
const JobBoard = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 30px;
  width: 243px;
  height: 152px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 3.3px 4px rgba(0, 0, 0, 0.05);
`;
const Btn = styled.div`
  position: relative;
  margin-top: 30px;
  margin: 0 auto;
  width: 345px;
  height: 54px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 3.3px 4px rgba(0, 0, 0, 0.05);
`;
const Footer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 390px;
  height: 160px;
  background: #eff0f4;
`;

const Main = () => {
  return (
    <Container>
      <Nav></Nav>
      <Banner>
        <img
          src={`${process.env.PUBLIC_URL}/images/card.svg`}
          width="15px"
          id="card"
        />
        <span id="text">나에게 딱 맞는 유학생 전용 신용카드?</span>
        <img
          src={`${process.env.PUBLIC_URL}/images/right.svg`}
          width="8px"
          id="right"
        />
      </Banner>
      <DepositNotice>
        <div id="nickname">HappyHana님,</div>
        <div id="content">6월 10일 1,000,000원 입금 예정입니다</div>
      </DepositNotice>
      <AccountBtn>
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
          src={`${process.env.PUBLIC_URL}/images/dot.svg`}
          width="20px"
          id="dot"
        />
      </AccountBtn>
      <Exception>월급이 입금되지 않았나요?</Exception>
      <Title>근무지 관리</Title>
      <BoardWrapper>
        <ManageBoard></ManageBoard>
        <ManageBoard></ManageBoard>
        <div style={{ marginLeft: "20px" }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/addwork.svg`}
            height="196px"
          />
        </div>
      </BoardWrapper>

      <Title>유학생 추천 구인구직</Title>
      <JobBoard></JobBoard>
      <Title>커뮤니티</Title>
      <Btn></Btn>
      <Btn></Btn>
      <Footer></Footer>
      <MenuBar></MenuBar>
    </Container>
  );
};

export default Main;
