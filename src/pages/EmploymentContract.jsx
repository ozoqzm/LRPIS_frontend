import React, { useState } from "react";
import styled from "styled-components";
import MenuBar from "./MenuBar";
import DocumentStorage_Nav from "./DocumentStorage_Nav";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 800px;
  background: var(--Gray-Mobileregular, #f6f7f9);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Rec = styled.div`
  width: 308px;
  height: 377px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const BottomRec = styled.div`
  width: 308px;
  height: 194px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #089995 0%, #9e583c 100%);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ContractTxt = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
  padding: 50px;
`;

const Employlogo = styled.div`
  padding: 110px;
  margin-top: -150px;
`;

const LockIcon = styled.div`
  padding: 70px;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  width: 308px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-family: Inter;
  font-size: 12px;
  color: #333;
  line-height: 1.5;
  margin-top : -5px;
`;

const InfoText = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  span:first-child {
    margin-right: 10px;
  }

  .infoLabel {
    color: var(--gray-m-gray-0, #a5a9b5);
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.22px;
  }

  margin-left: 80px;
`;

const Divider = styled.div`
  width: 1px;
  height: 10px;
  background: #a5a9b5;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;

  padding: 0;
  margin-left : 85px;
  margin-top :
`;

const Button = styled.button`
  background-color: #f6f7f9;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-family: Inter;
  font-size: 12px;
  color: #333;
  width: 45%;
  max-width: 100px;
  margin-right : 20px;
  &:hover {
    background-color: #ddd;
  }
`;

const EmploymentContract = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleLockIconClick = () => {
    setShowInfo(true);
  };

  return (
    <Container>
      <DocumentStorage_Nav />
      <Rec>
        <BottomRec>
          <ContractTxt>명륜진사갈비 근로계약서</ContractTxt>
          <Employlogo>
            <img src="../images/myeongryunlogo.svg" alt="Employ Logo" />
          </Employlogo>
        </BottomRec>
        {showInfo ? (
          <InfoContainer>
            <InfoText>
              <span className="infoLabel">시급</span>
              <Divider />
              <span>9,360원</span>
            </InfoText>
            <InfoText>
              <span className="infoLabel">근로기간</span>
              <Divider />
              <span>2024.06-12</span>
            </InfoText>
            <InfoText>
              <span className="infoLabel">근로시간</span>
              <Divider />
              <span>월 화 금 오후 6:00 ~ 10:00</span>
            </InfoText>
            <InfoText>
              <span className="infoLabel">연차 휴무</span>
              <Divider />
              <span>매 달 넷째 주 목요일</span>
            </InfoText>
            <ButtonContainer>
              <Button>근무지 관리</Button>
              <Button>수정하기</Button>
            </ButtonContainer>
          </InfoContainer>
        ) : (
          <LockIcon onClick={handleLockIconClick}>
            <img src="../images/lockicon.svg" alt="Lock Icon" />
          </LockIcon>
        )}
      </Rec>
      <MenuBar />
    </Container>
  );
};

export default EmploymentContract;
