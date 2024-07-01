import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import ChatbotNav from "./ChatbotNav";
import MenuBar from "./MenuBar";

import { Chatbot } from 'react-chatbot-kit';
import config from '../bot/config.js';
import MessageParser from '../bot/MessageParser';
import ActionProvider from '../bot/ActionProvider';

import "remixicon/fonts/remixicon.css";
import "react-chatbot-kit/build/main.css";
import "../bot/chatbot.css"

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

const ChatbotPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
        <ChatbotNav />
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      <Footer>개인정보처리방침</Footer>
      <MenuBar />
    </Container>
  );
};

export default ChatbotPage;
