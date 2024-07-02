import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import MenuBar from "./MenuBar";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 800px;
  box-sizing: border-box;
  background: var(--Gray-Mobileregular, #f6f7f9);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40%;
    font-size: larger;
    #gohome{
    text-decoration: underline;
    margin-top
    : 20px;
    }
`;


const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MenuBar />
      <Text>
      개발 중인 페이지입니다.
      <div id="gohome" onClick={() => navigate(-1)}>
      이전 페이지로 돌아가기
      </div>
      </Text>
    </Container>
  );
};

export default ComingSoon;
