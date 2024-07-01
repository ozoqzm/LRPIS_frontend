
import { createChatBotMessage } from "react-chatbot-kit";
import Header from "./ChatbotHeader";
import ChatMessage from "./ChatMessage";
import Buttons from './button';
import MoreButton from './MoreButton';

const config = {
  initialMessages: [
    createChatBotMessage("안녕하세요! 저는 여러분의 문제를 해결하기 위해 도와드리는 챗봇입니다. 저는 아직 개발중이에요."),
  ],
  customComponents: {
    // Replaces the default header
    header: () => <Header />,
    // Replaces the default bot avatar
    botAvatar: () => (
      <img src="/images/botImage.svg" alt="Bot Avatar" />
    ),
    // Replaces the default bot chat message container
    // botChatMessage: (props) => <BotChatMessage {...props} />,
    // Replaces the default user icon
    userAvatar: (props) => <div {...props} />,
    // Replaces the default user chat message
    userChatMessage: (props) => <ChatMessage {...props} />,
  },
};

export default config;
