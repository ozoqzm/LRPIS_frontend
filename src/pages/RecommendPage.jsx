import React, { useState } from "react";
import styled from "styled-components";
import MenuBar from "./MenuBar";
import RecommendNav from "./RecommendNav";

import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  background: var(--Gray-Mobileregular, #f6f7f9);
`;

const WhiteBox = styled.div`
  width: 80%;
  height: 10px;
  background: white;
  border-radius: 50px;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display : flex;
`;

const Locationicon = styled.div`

`;

const Divider = styled.div`
  height: 28px;
  border-left: 2px solid lightgray;
`;

const Select = styled.select`
  width: 45%;
  padding: 5px;
  border: none;
  background: none;
`;
const Contenttxt = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.26px;
  padding : 20px;
  margin-left : 10px;
`;

const Highlight = styled.span`
  color: #089995;
`;

const BoardWrapper2 = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬을 위해 flex-direction 추가 */
  align-items: center; /* 가운데 정렬 */
`;

const JobBoard = styled.div`
  position: relative;
  padding-left: 20px;
  width: 300px;
  height: 150px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 3.3px 4px rgba(0, 0, 0, 0.05);
  margin: 10px 0; /* 각 JobBoard 사이의 간격 조정 */
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 아이템들을 왼쪽 정렬에서 가운데 정렬로 변경 */
  justify-content: space-between;
  padding-bottom: 10px; /* 하단 여백 추가 */
  & + & {
    margin-top: 20px; /* JobBoard 간의 상단 간격 추가 */
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
    margin-left : 30px;
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
    #day {
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
    margin-left: 230px;
    bottom: 130px;
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
const Another = styled.div`
  font-size: 60px;
  margin: 0 auto;
  text-align: center;
  margin: -34px;
  padding-bottom: 20px;
  color: #D9D9D9;
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


const RecommendPage = () => {
  const [region, setRegion] = useState("동대문구 전체");
  const [job, setJob] = useState("전체 업종");
  
  const navigate = useNavigate();

  return (
    <Container>
      <RecommendNav />
      <WhiteBox>
        <Locationicon>
            <img src="../images/location.svg" />
        </Locationicon>
        <Select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="동대문구 전체">동대문구 전체</option>
          <option value="성북구 전체">성북구 전체</option>
          <option value="중구 전체">중구 전체</option>
          <option value="마포구 전체">마포구 전체</option>
          <option value="강남구 전체">강남구 전체</option>
        </Select>
        <Divider />
        <Select value={job} onChange={(e) => setJob(e.target.value)}>
          <option value="전체 업종">전체 업종</option>
          <option value="IT/기술">IT / 기술</option>
          <option value="디자인">디자인</option>
          <option value="미디어">미디어</option>
          <option value="병원/간호/연구">병원 / 간호 / 연구</option>
          <option value="교육/강사">교육 / 강사</option>
          <option value="서비스">서비스</option>
          <option value="사무직">사무직</option>
          <option value="생산/건설/노무">생산 / 건설/노무</option>
          <option value="외식/음료">외식 / 음료</option>
          <option value="매장관리 및 판매">매장관리 및 판매</option>
          <option value="고객상담/리서치/연구">고객상담 / 리서치 / 연구</option>
        </Select>
      </WhiteBox>
      <Contenttxt>
        총 <Highlight>63</Highlight>건의 추천 구직 정보가 있어요
      </Contenttxt>
      <BoardWrapper2 onClick={() => navigate("/ing")}>
        <JobBoard>
          <div id="location">서울시 동대문구</div>
          <div id="dday">D-10</div>
          <img
            src={`${process.env.PUBLIC_URL}/images/sample1.svg`}
            id="thumbnail"
          />
          <div id="content">랭스터디카페 야간 직원 1명 찾습니다</div>
          <div id="salary">시급: 10,000원</div>
          <div id="day">어제</div>
        </JobBoard>

        <JobBoard>
          <div id="location">부천시 하남</div>
          <div id="dday">D-10</div>
          <img
            src={`${process.env.PUBLIC_URL}/images/sample2.svg`}
            id="thumbnail"
          />
          <div id="content">GS25 하남안녕점 야간 직원 1명 찾습니다</div>
          <div id="salary">시급: 10,000원</div>
          <div id="day">어제</div>
        </JobBoard>
        <JobBoard>
          <div id="location">부천시 하남</div>
          <div id="dday">D-10</div>
          <img
            src={`${process.env.PUBLIC_URL}/images/sample2.svg`}
            id="thumbnail"
          />
          <div id="content">GS25 하남안녕점 야간 직원 1명 찾습니다</div>
          <div id="salary">시급: 10,000원</div>
          <div id="day">어제</div>
        </JobBoard>
        <JobBoard>
          <div id="location">부천시 하남</div>
          <div id="dday">D-10</div>
          <img
            src={`${process.env.PUBLIC_URL}/images/sample2.svg`}
            id="thumbnail"
          />
          <div id="content">GS25 하남안녕점 야간 직원 1명 찾습니다</div>
          <div id="salary">시급: 10,000원</div>
          <div id="day">어제</div>
        </JobBoard>
        <JobBoard>
          <div id="location">부천시 하남</div>
          <div id="dday">D-10</div>
          <img
            src={`${process.env.PUBLIC_URL}/images/sample2.svg`}
            id="thumbnail"
          />
          <div id="content">GS25 하남안녕점 야간 직원 1명 찾습니다</div>
          <div id="salary">시급: 10,000원</div>
          <div id="day">어제</div>
        </JobBoard>
      </BoardWrapper2>
      
      <Another>...</Another>
      <Footer>개인정보처리방침</Footer>
      <MenuBar />
    </Container>
  );
};

export default RecommendPage;
