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
  position: relative;
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

const RecOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 308px;
  height: 377px;
  border-radius: 15px;
  background: rgba(109, 109, 109, 0.7);
  backdrop-filter: blur(0px);
`;


const RecImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
  width: 90%;
`;

const DetailButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  border-radius: 5px;
  background: var(--Green, #089995);
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  width: 113px;
  height: 39px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
`;

const ContractImg = styled.button`
border: none;
    margin-top: 10%;
`;

const EmploymentContract = () => {
  const [showInfo, setShowInfo] = useState(true);

  const handleLockIconClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Container>
      <DocumentStorage_Nav />
        {showInfo ? (
          <Rec>
            <RecOverlay />
            <RecImage src={`${process.env.PUBLIC_URL}/images/contract.svg`} alt="contract" />
            <Text>
              <div>명륜진사갈비 표준근로계약서</div>
              <div>20240601</div>
            </Text>
            <DetailButton onClick={handleLockIconClick}>상세보기</DetailButton>
          </Rec>
        ) : (
          <ContractImg onClick={handleLockIconClick}>
            <img src={`${process.env.PUBLIC_URL}/images/contract.svg`} alt="contract" />
          </ContractImg>
        )}
      
      <MenuBar />
    </Container>
  );
};

export default EmploymentContract;
