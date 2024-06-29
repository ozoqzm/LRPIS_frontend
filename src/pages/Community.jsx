import React from "react";
import { styled } from "styled-components";
import MenuBar from "./MenuBar";
import Nav from "./NavBar";
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
const MeetingSec = styled.div`
  height: 177px;
  background: white;
`;
const MeetingHeader = styled.div`
  padding-top: 31px;
  padding-left: 27px;
  position: relative;
`;
const MeetingTitle = styled.div`
  display: inline-block;
  font-weight: 600;
  letter-spacing: -0.32px;
`;
const MeetingSearch = styled.span`
  position: absolute;
  right: 28px;
`;
const FavoriteSec = styled.div`
  height: 209px;
  margin-top: 10px;
  background: white;
`;
const FavoriteHeader = styled.div`
  padding-top: 33px;
  padding-left: 27px;
`;
const FavoriteTitle = styled.div`
  display: inline-block;
  margin-left: 3px;
  font-size: 13px;
`;
const FavoriteCon = styled.div`
  display: inline-block;
  margin-left: 3px;
  font-size: 13px;
`;
const ListSec = styled.div`
  height: 300px;
  padding-top: 10px;
  background: white;
`;

const ListHeader = styled.div``;

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

const Community = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Nav></Nav>
      <MeetingSec>
        <MeetingHeader>
          <MeetingTitle>경희대학교</MeetingTitle>
          <MeetingSearch>
            <img
              src={`${process.env.PUBLIC_URL}/images/search.svg`}
              width="17px"
              id="meetingSearch"
            />
          </MeetingSearch>
        </MeetingHeader>
      </MeetingSec>
      <FavoriteSec>
        <FavoriteHeader>
          <img
            src={`${process.env.PUBLIC_URL}/images/favorite.svg`}
            width="14px"
            id="favoriteStar"
          />
          <FavoriteTitle>즐겨찾기</FavoriteTitle>
        </FavoriteHeader>
        <FavoriteCon></FavoriteCon>
      </FavoriteSec>
      <ListSec>
        <ListHeader></ListHeader>
      </ListSec>
      <Footer>개인정보처리방침</Footer>
      <MenuBar></MenuBar>
    </Container>
  );
};

export default Community;
