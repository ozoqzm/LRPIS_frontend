import React from "react";
import { styled } from "styled-components";
import MenuBar from "./MenuBar";
import Nav from "./NavBar";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 1241px;
  background: var(--Gray-Mobileregular, #f6f7f9);
`;
const Banner = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 15px;
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
  margin-top: 25px;
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
  margin-bottom: 30px;
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
  margin-top: 15px;
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
  margin: auto;
  margin-top: 10px;
  padding: 5px;
  display: flex;
  height: 200px;
  width: 360px;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
`;
const BoardWrapper2 = styled.div`
  position: relative;
  padding: 5px;
  margin: auto;
  margin-top: 10px;
  display: flex;
  width: 360px;
  height: 155px;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
`;
const ManageBoard = styled.div`
  position: relative;
  width: 180px;
  height: 195px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 3.3px 4px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
  & + & {
    margin-left: 20px;
  }
`;
const JobBoard = styled.div`
  position: relative;
  width: 240px;
  height: 150px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 3.3px 4px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
  & + & {
    margin-left: 20px;
  }

  #location {
  }

  #thumbnail {
    width: 210px;
    height: 62px;
    border-radius: 15px;
  }
  #content {
  }
  #salary {
  }
`;
const Btn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin: auto;
  margin-top: 18px;
  width: 345px;
  height: 54px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 3.3px 4px rgba(0, 0, 0, 0.05);

  #icon {
  }
  #subtitle {
  }
  #detail {
  }
  #nicon {
  }
`;
const Footer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 390px;
  height: 160px;
  background: #eff0f4;
  color: #888;
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 10;
  letter-spacing: -0.2px;
  text-decoration-line: underline;
`;

const Main = () => {
  return (
    <Container>
      <Nav></Nav>
      <Banner>
        <img
          src={`${process.env.PUBLIC_URL}/images/card.svg`}
          width="15px"
          alt="card"
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
        <ManageBoard>
          <img
            src={`${process.env.PUBLIC_URL}/images/worklogo.svg`}
            width="58px"
            id="worklogo"
          />
        </ManageBoard>
        <div style={{ marginLeft: "20px" }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/addwork.svg`}
            height="196px"
          />
        </div>
      </BoardWrapper>
      <Title>유학생 추천 구인구직</Title>
      <BoardWrapper2>
        <JobBoard>
          <img
            src={`${process.env.PUBLIC_URL}/images/sample1.svg`}
            id="thumbnail"
          />
        </JobBoard>
        <JobBoard>
          <img
            src={`${process.env.PUBLIC_URL}/images/sample2.svg`}
            id="thumbnail"
          />
        </JobBoard>
      </BoardWrapper2>
      <Title>커뮤니티</Title>
      <Btn>
        <img
          src={`${process.env.PUBLIC_URL}/images/vietnam.svg`}
          width="20px"
          id="icon"
        />
        <span id="subtitle">베트남 유학생 게시판</span>
        <span id="detail">Có công việc bán thời gian nào...</span>
        <img
          src={`${process.env.PUBLIC_URL}/images/nicon.svg`}
          width="13px"
          id="nicon"
        />
      </Btn>
      <Btn>
        <span id="subtitle">인기게시판</span>
        <span id="detail">What should I do when my bos...</span>
        <img
          src={`${process.env.PUBLIC_URL}/images/nicon.svg`}
          width="13px"
          id="nicon"
        />
      </Btn>
      <Footer>개인정보처리방침</Footer>
      <MenuBar></MenuBar>
    </Container>
  );
};

export default Main;
