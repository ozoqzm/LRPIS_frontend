import React, { useState } from "react";
import { styled } from "styled-components";
import MenuBar from "./MenuBar";
import Nav from "./NavBar";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 800px;
  background: var(--Gray-Mobileregular, #f6f7f9);
`;
const TopPart = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;
const CloseBtn = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;
const MenuTitle = styled.div`
  color: var(---Black, #333);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;
const SettingIcon = styled.div`
  margin-left: 250px;
`;

const NamePart = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-left: 10px;
`;
const PersonIcon = styled.div``;
const PersonNameTxt = styled.div`
  margin-left: 10px;
  color: #333;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.36px;
`;
const FindPart = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  justify-content: space-between;
`;
const FindIcon = styled.div`
  margin-left: 5px;
`;
const FindMent = styled.div`
  color: var(--gray-m-gray-4, #929292);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.34px;
  margin-left: 20px;
  flex-grow: 1;
`;
const FindBtn = styled.div`
  margin-right: 30px;
`;
const FindunderLine = styled.div`
  width: 345px;
  height: 2px;
  background-color: #ccc;
  margin-left: 20px;
  margin-top: 10px;
`;

const MenuListPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  overflow-x: auto;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: ${(props) => (props.active ? "#333" : "#e0e0e0")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  font-weight: ${(props) => (props.active ? "700" : "500")};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    background-color: ${(props) => (props.active ? "#333" : "#d0d0d0")};
  }
`;

const MainListPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const WhiteBox = styled.div`
  width: 290px;
  padding: 20px;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const WhiteBoxContent = styled.div`
  cursor : pointer;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const BoxTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
`;

const Notification = styled.div`
  font-size: 14px;
  color: #666;
`;
const Menuicon = styled.div``;

const MenuPage = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("계좌");

  const handleClose = () => {
    navigate(-1);
  };
  const gotodocumentstoragepage = () => {
    navigate("/DocumentStorage");
  };
  const renderContent = () => {
    switch (activeButton) {
      case "계좌":
        return (
          <>
            <WhiteBox>
              <WhiteBoxContent>
                <Menuicon>
                  <img src="../images/checkbox_menu.svg" alt="입금 지불 확인" />
                </Menuicon>
                <BoxTitle>입금 지불 확인</BoxTitle>
              </WhiteBoxContent>
              <Line />
              <Notification>알림</Notification>
            </WhiteBox>
            <WhiteBox>
              <WhiteBoxContent>
                <Menuicon>
                  <img src="../images/wonicon_menu.svg" alt="계좌 전액 확인" />
                </Menuicon>
                <BoxTitle>계좌 전액 확인</BoxTitle>
              </WhiteBoxContent>
            </WhiteBox>
            <WhiteBox>
              <WhiteBoxContent>
                <Menuicon>
                  <img src="../images/shoppingicon_menu.svg" alt="부가 상품 추천" />
                </Menuicon>
                <BoxTitle>부가 상품 추천</BoxTitle>
              </WhiteBoxContent>
            </WhiteBox>
          </>
        );
      case "근로":
        return (
          <>
            <WhiteBox>
              <WhiteBoxContent onClick={gotodocumentstoragepage}>
                <Menuicon>
                  <img src="../images/documenticon.svg" alt="내 서류 보관함" />
                </Menuicon>
                <BoxTitle>내 서류 보관함</BoxTitle>
              </WhiteBoxContent>
              <Line />
              <Notification>변경 사항 알림</Notification>
            </WhiteBox>
            <WhiteBox>
              <WhiteBoxContent>
                <Menuicon>
                  <img src="../images/workmanicon.svg" alt="근무 내역 확인하기" />
                </Menuicon>
                <BoxTitle>근무 내역 확인하기</BoxTitle>
              </WhiteBoxContent>
            </WhiteBox>
            <WhiteBox>
              <WhiteBoxContent>
                <Menuicon>
                  <img src="../images/shoppingicon_menu.svg" alt="부가 상품 추천" />
                </Menuicon>
                <BoxTitle>부가 상품 추천</BoxTitle>
              </WhiteBoxContent>
            </WhiteBox>
          </>
        );
      case "커뮤니티":
        return (
          <>
            <WhiteBox>
              <WhiteBoxContent>
                <Menuicon>
                  <img src="../images/communityicon.svg" alt="커뮤니티 메뉴 1" />
                </Menuicon>
                <BoxTitle>커뮤니티 이용하기</BoxTitle>
              </WhiteBoxContent>
              <Line />
              <Notification>커뮤니티 알림</Notification>
            </WhiteBox>
            <WhiteBox>
              <WhiteBoxContent>
                <Menuicon>
                  <img src="../images/schoolicon.svg" alt="커뮤니티 메뉴 2" />
                </Menuicon>
                <BoxTitle>우리학교 바로 들어가기</BoxTitle>
              </WhiteBoxContent>
            </WhiteBox>
            <WhiteBox>
              <WhiteBoxContent>
                <Menuicon>
                  <img src="../images/chaticon.svg" alt="커뮤니티 메뉴 3" />
                </Menuicon>
                <BoxTitle>채팅</BoxTitle>
              </WhiteBoxContent>
            </WhiteBox>
          </>
        );
      case "간편 신고 챗봇":
        return (
          <>
            <WhiteBox>
              <WhiteBoxContent>
                <Menuicon>
                  <img src="../images/chatboticon_menu.svg" alt="신고 메뉴 1" />
                </Menuicon>
                <BoxTitle>챗봇으로 간편 신고하기</BoxTitle>
              </WhiteBoxContent>
              <Line />
              <Notification>이전 챗 알림</Notification>
            </WhiteBox>
            
          </>
        );
      default:
        return null;
    }
  };
  return (
    <Container>
      <Nav />
      <TopPart>
        <CloseBtn onClick={handleClose}>
          <img src="../images/x.svg" alt="닫기" />
        </CloseBtn>
        <MenuTitle>메뉴</MenuTitle>
        <SettingIcon>
          <img src="../images/setting.svg" alt="설정" />
        </SettingIcon>
      </TopPart>
      <NamePart>
        <PersonIcon>
          <img src="../images/MY.svg" alt="마이 아이콘" />
        </PersonIcon>
        <PersonNameTxt>HappyHana 님</PersonNameTxt>
      </NamePart>
      <FindPart>
        <FindIcon>
          <img src="../images/find.svg" alt="검색 아이콘" />
        </FindIcon>
        <FindMent>궁금한 것을 검색해 보세요</FindMent>
        <FindBtn>
          <img src="../images/findbtn.svg" alt="검색 버튼" />
        </FindBtn>
      </FindPart>
      <FindunderLine />
      <MenuListPart>
        <ButtonContainer>
          <Button
            active={activeButton === "계좌"}
            onClick={() => setActiveButton("계좌")}
          >
            계좌
          </Button>
          <Button
            active={activeButton === "근로"}
            onClick={() => setActiveButton("근로")}
          >
            근로
          </Button>
          <Button
            active={activeButton === "커뮤니티"}
            onClick={() => setActiveButton("커뮤니티")}
          >
            커뮤니티
          </Button>
          <Button
            active={activeButton === "간편 신고 챗봇"}
            onClick={() => setActiveButton("간편 신고 챗봇")}
          >
            간편 신고 챗봇
          </Button>
        </ButtonContainer>
      </MenuListPart>
      <MainListPart>{renderContent()}</MainListPart>
      <MenuBar />
    </Container>
  );
};

export default MenuPage;
