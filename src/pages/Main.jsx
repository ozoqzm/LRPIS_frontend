import React from "react";
import { styled } from "styled-components";
import MenuBar from "./MenuBar";
import Nav from "./NavBar";
import AccountBtn from "./AccountBtn";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  background: var(--Gray-Mobileregular, #f6f7f9);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
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
  #sub {
    margin-left: 7px;
    color: #888;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.2px;
    text-decoration-line: underline;
  }
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
  -ms-overflow-style: none;
  scrollbar-width: none;
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
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
const ManageBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  #worklogo {
    margin-top: 20px;
  }
  span {
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
  }
`;
const JobBoard = styled.div`
  position: relative;
  padding-left: 20px;
  width: 235px;
  height: 150px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 3.3px 4px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
  & + & {
    margin-left: 20px;
  }
  #location {
    margin-top: 10px;
    color: #888;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.24px;
  }
  #thumbnail {
    margin-top: 10px;
    width: 210px;
    height: 62px;
    border-radius: 15px;
  }
  #content {
    margin-top: 5px;
    color: #333;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.24px;
  }
  #salary {
    color: #888;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
  }
  #dday {
    position: absolute;
    margin-left: 170px;
    bottom: 122px;
    width: 37px;
    height: 16px;
    border-radius: 3px;
    background: #888;
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
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
    margin-left: 10px;
  }
  #subtitle {
    position: absolute;
    left: 40px;
    color: #333;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.24px;
  }
  #detail {
    position: absolute;
    left: 180px;
    color: #888;
    font-family: Inter;
    font-size: 8px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.16px;
  }
  #nicon {
    position: absolute;
    margin-left: 300px;
  }
`;
const FloatBtn = styled.div`
  position: fixed;
  margin-left: 330px;
  bottom: 120px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const Footer = styled.div`
  position: relative;
  margin-top: 30px;
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
  const navigate = useNavigate();

  // 커뮤니티 페이지로 이동
  const gotoComm = () => {
    navigate("/community");
  };
  // 구인구직 페이지로 이동
  const gotoJobSearch = () => {
    navigate("/recommendpage");
  };
  // 챗봇 이동
  const gotoChatbot = () => {
    navigate("/chatbot");
  };

  // 근무지 추가로 이동
  const gotoAddJob = () => {
    navigate("/addjob");
  };
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
      <AccountBtn icon={"dot"}></AccountBtn>
      <Exception>월급이 입금되지 않았나요?</Exception>
      <Title>근무지 관리</Title>
      <BoardWrapper>
        <ManageBoard>
          <img
            src={`${process.env.PUBLIC_URL}/images/worklogo.svg`}
            width="58px"
            id="worklogo"
          />
          <span>
            <img
              src={`${process.env.PUBLIC_URL}/images/document.svg`}
              width="58px"
              id="document"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/inform.svg`}
              width="58px"
              id="info"
            />
          </span>
        </ManageBoard>
        <div style={{ marginLeft: "20px" }} onClick={gotoAddJob}>
          <img
            src={`${process.env.PUBLIC_URL}/images/addwork.svg`}
            height="196px"
          />
        </div>
      </BoardWrapper>
      <Title onClick={gotoJobSearch}>
        유학생 추천 구인구직
        <span id="sub">더보기</span>
      </Title>
      <BoardWrapper2>
        <JobBoard>
          <div id="location">서울시 동대문구</div>
          <div id="dday">D-10</div>
          <img
            src={`${process.env.PUBLIC_URL}/images/sample1.svg`}
            id="thumbnail"
          />
          <div id="content">랭스터디카페 야간 직원 1명 찾습니다</div>
          <div id="salary">시급: 10,000원</div>
        </JobBoard>

        <JobBoard>
          <div id="location">서울시 동대문구</div>
          <div id="dday">D-10</div>
          <img
            src={`${process.env.PUBLIC_URL}/images/sample2.svg`}
            id="thumbnail"
          />
          <div id="content">랭스터디카페 야간 직원 1명 찾습니다</div>
          <div id="salary">시급: 10,000원</div>
        </JobBoard>
      </BoardWrapper2>
      <Title onClick={gotoComm}>
        커뮤니티
        <span id="sub">경희대학교</span>
      </Title>
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
      <FloatBtn>
        <img
          onClick={gotoChatbot}
          src={`${process.env.PUBLIC_URL}/images/sangdam.svg`}
          width="56px"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/floatbtn2.svg`}
          width="56px"
        />
      </FloatBtn>
      <MenuBar></MenuBar>
    </Container>
  );
};

export default Main;
