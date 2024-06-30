import React from "react";
import styled from "styled-components";
import MenuBar from "./MenuBar";
import DocumentStorage_Nav from "./DocumentStorage_Nav";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 800px;
  background: var(--Gray-Mobileregular, #f6f7f9);
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const TopGrayBox = styled.div`
  display: flex;
  width: 338px;
  height: 111px;
  flex-shrink: 0;
  background: var(--gray-m-gray-2, #eaeef1);
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

const TopBoxtxt = styled.div`
  color: var(---Black, #333);
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.26px;
  padding: 30px;
  margin-left: 10px;
`;

const BlockChainIcon = styled.div`
  padding: 20px;
  margin-top: 20px;
`;

const WhiteBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 12px;
`;

const WhiteBox = styled.div`
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Inter;
  font-size: 12px;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
  cursor : pointer;
`;

const DocumentImage = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

const DoculmentStorage = () => {
  const documents = [
    { text: "고용주 사업자등록증 사본", img: "../images/docstg_1.svg" },
    { text: "시간제 취업 확인서", img: "../images/docstg_2.svg" },
    { text: "성적 및 출력 증명서", img: "../images/docstg_3.svg" },
    { text: "신청서", img: "../images/docstg_4.svg" },
    { text: "여권", img: "../images/docstg_5.svg" },
    { text: "외국인등록증", img: "../images/docstg_6.svg" },
    { text: "표준 근로계약서 사본", img: "../images/docstg_7.svg" },
    { text: "한국어 능력 증빙서류", img: "../images/docstg_8.svg" }
  ];

  return (
    <Container>
      <DocumentStorage_Nav />
      <TopWrapper>
        <TopGrayBox>
          <TopBoxtxt>
            블록체인 기술로 <br /> 안전하게 보관되고 있는 <br /> 나의 서류
          </TopBoxtxt>
          <BlockChainIcon>
            <img src="../images/blockchainicon.svg" alt="Blockchain Icon" />
          </BlockChainIcon>
        </TopGrayBox>
      </TopWrapper>
      <WhiteBoxContainer>
        {documents.map((document, index) => (
          <WhiteBox key={index}>
            <DocumentImage src={document.img} alt={`Document ${index + 1}`} />
            {document.text}
          </WhiteBox>
        ))}
      </WhiteBoxContainer>
      <MenuBar />
    </Container>
  );
};

export default DoculmentStorage;
