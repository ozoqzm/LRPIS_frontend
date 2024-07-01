import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import CommunityNav from "./CommunityNav";
import MenuBar from "./MenuBar";

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

const MeetingList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding-left: 27px;
  padding-right: 27px;
  margin-top: 17px;
  gap: 24px;
`;

const MeetingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 100px;
    height: 100px;
  }

  h3 {
    color: var(--purple-m-purple-2, #7A8BA7);
    text-align: center;
    font-size: 11px;
    font-weight: 300;
    letter-spacing: -0.22px;
    width: 69px;
  }
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

const FavoriteList = styled.div`
  display: inline-block;
  margin-left: 3px;
  font-size: 13px;
`;

const FavoriteItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 345px;
  height: 54px;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0px 0px 3.3px 4px rgba(0, 0, 0, 0.05);
  margin-left: 22px;
  margin-top: 14px;
  padding-left: 15px;
  box-sizing: border-box;

  div#flag {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  div#new {
    position: absolute;
    right: 20px;
  }
`;

const FavoriteConTitle = styled.div`
  color: #333;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.24px;

  &:last-child {
    padding-left: 29px;
  }
`;

const FavoriteCon = styled.div`
  color: #888;
  font-size: 8px;
  font-weight: 300;
  letter-spacing: -0.16px;
`;

const ListSec = styled.div`
  padding-top: 10px;
  background: white;
`;

const ListHeader = styled.div`
  margin: 20px 31px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const Subject = styled.div`
  select {
    width: 68px;
    height: 30px;
    font-size: 14px;
    border-radius: 8px;
    padding: 5px;
    color: var(--gray-m-gray-3, #A6A9B8);
    text-align: center;
    font-size: 12px;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.24px;
    border: 1px solid #ccc;
  }
`;

const List = styled.div`
  padding: 0px 30px;
`;

const ListItem = styled.div`
  padding: 27px 0;
  border-bottom: 1px solid #ccc;

  h4 {
    margin: 0;
    color: var(---Black, #333);
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  p {
    margin: 10px 0 0 0;
    color: var(--gray-m-gray-3, #A6A9B8);
    font-size: 10px;
    font-weight: 300;
    letter-spacing: -0.2px;
  }
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

const WritePostButton = styled.button`
  position: fixed;
    bottom: 88px;
    right: 28px;
    width: 96px;
    height: 40px;
    border-radius: 13px;
    background: #089995;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.32px;
    border: none;
`;

const meetings = [
  { id: 1, image: `${process.env.PUBLIC_URL}/images/meeting1.svg`, title: '베트남 유학생 모임' },
  { id: 2, image: `${process.env.PUBLIC_URL}/images/meeting2.svg`, title: '한국어 공부 모임' },
  { id: 3, image: `${process.env.PUBLIC_URL}/images/meeting3.svg`, title: '강남 맛집 공유 모임' },
  { id: 4, image: `${process.env.PUBLIC_URL}/images/meeting4.svg`, title: 'Q&A 편하게 하세요 모임' },
  { id: 5, image: `${process.env.PUBLIC_URL}/images/meeting5.svg`, title: '중국인 유학생 모임' },
];

const dummyListContents = [
  { id: 1, title: '경희대 앞 맛집 알바생입니다! 여기 정말 맛있어요', category: '맛집', views: 120 },
  { id: 2, title: 'Tips when your boss is giving you a hard time', category: '질문', views: 85 },
  { id: 3, title: 'Understanding the essence of Korean culture', category: '팁', views: 210 },
  { id: 4, title: '강남역 근처 꼭 가봐야 할 카페 리스트', category: '맛집', views: 340 },
  { id: 5, title: 'Tips to make your life in Korea more enjoyable', category: '한국생활', views: 180 },
  { id: 6, title: '한국에서 주말에 가기 좋은 장소 추천', category: '한국생활', views: 250 },
  { id: 7, title: 'Effective study tips for Korean language learners', category: '팁', views: 300 },
];

const Community = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredListContents = selectedCategory === "all" ? dummyListContents : dummyListContents.filter(item => item.category === selectedCategory);


  return (
    <Container>
      <CommunityNav />
      <MeetingSec>
        <MeetingHeader>
          <MeetingTitle>경희대학교</MeetingTitle>
          <MeetingSearch onClick={() => navigate("/ing")}>
            <img
              src={`${process.env.PUBLIC_URL}/images/search.svg`}
              width="17px"
              id="meetingSearch"
              alt="검색"
            />
          </MeetingSearch>
        </MeetingHeader>
        <MeetingList onClick={() => navigate("/ing")}>
          {meetings.map(meeting => (
            <MeetingItem key={meeting.id}>
              <img src={meeting.image} alt={meeting.title} />
              <h3>{meeting.title}</h3>
            </MeetingItem>
          ))}
        </MeetingList>
      </MeetingSec>
      <FavoriteSec>
        <FavoriteHeader>
          <img
            src={`${process.env.PUBLIC_URL}/images/favorite.svg`}
            width="14px"
            id="favoriteStar"
            alt="즐겨찾기"
          />
          <FavoriteTitle>즐겨찾기</FavoriteTitle>
        </FavoriteHeader>
        <FavoriteList>
          <FavoriteItem onClick={() => navigate("/ing")}>
            <div id="flag">
              <img
                src={`${process.env.PUBLIC_URL}/images/vietnam.svg`}
                width="19px"
                alt="국기"
              />
              <FavoriteConTitle>베트남 유학생 게시판</FavoriteConTitle>
              <FavoriteCon>Có công việc bán thời gian nào...</FavoriteCon>
            </div>
            <div id="new">
              <img
                src={`${process.env.PUBLIC_URL}/images/new.svg`}
                width="13px"
                alt="새로운"
              />
            </div>
          </FavoriteItem>
          <FavoriteItem onClick={() => navigate("/ing")}>
            <div id="flag">
              <FavoriteConTitle>인기게시판</FavoriteConTitle>
              <FavoriteCon>What should I do when my bos...</FavoriteCon>
            </div>
            <div id="new">
              <img
                src={`${process.env.PUBLIC_URL}/images/new.svg`}
                width="13px"
                alt="새로운"
              />
            </div>
          </FavoriteItem>
        </FavoriteList>
      </FavoriteSec>
      <ListSec>
        <ListHeader>
          <Subject>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="all">전체</option>
              <option value="한국생활">한국생활</option>
              <option value="맛집">맛집</option>
              <option value="질문">질문</option>
              <option value="팁">팁</option>
            </select>
          </Subject>
        </ListHeader>
        <List>
          {filteredListContents.map(content => (
            <ListItem key={content.id} onClick={() => navigate("/ing")}>
              <h4>{content.title}</h4>
              <p>{content.category} · 조회 {content.views}</p>
            </ListItem>
          ))}
        </List>
      </ListSec>
      <Footer>개인정보처리방침</Footer>
      <MenuBar />
      <WritePostButton onClick={() => navigate("/ing")}>+ 글쓰기</WritePostButton>
    </Container>
  );
};

export default Community;
