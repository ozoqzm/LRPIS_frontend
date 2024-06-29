import React from "react";
import { styled } from "styled-components";
import MenuBar from "./MenuBar";
import Nav from "./NavBar";

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
    margin-left : 10px;
`;
const PersonIcon = styled.div`

`;
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
margin-left : 5px;

`;
const FindMent = styled.div`
    color: var(--gray-m-gray-4, #929292);
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.34px;
    margin-left : 20px;
    flex-grow: 1;
`;
const FindBtn = styled.div`
margin-right : 30px;

`;
const FindunderLine = styled.div`
    width: 345px;
    height: 2px;
    background-color: #ccc;
    margin-left: 20px;
    margin-top : 10px;

`;

const MenuListPart = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    justify-content: space-between;
`;
const MenuPage = () => {
  return (
    <Container>
      <Nav></Nav>
      <TopPart>
        <CloseBtn>
            <img src="../images/x.svg"/>
        </CloseBtn>
        <MenuTitle>메뉴</MenuTitle>
        <SettingIcon>
            <img src="../images/setting.svg"/>
        </SettingIcon>
      </TopPart>
      <NamePart>
        <PersonIcon>
            <img src="../images/MY.svg"/>
        </PersonIcon>
        <PersonNameTxt>HappyHana 님</PersonNameTxt>
      </NamePart>
      <FindPart>
        <FindIcon>
            <img src="../images/find.svg"/>
        </FindIcon>
        <FindMent>궁금한 것을 검색해 보세요</FindMent>
        <FindBtn>
            <img src="../images/findbtn.svg"/>
        </FindBtn>
      </FindPart>
      <FindunderLine/>
      <MenuListPart>
        
      </MenuListPart>
      <MenuBar></MenuBar>
    </Container>
  );
};

export default MenuPage;
