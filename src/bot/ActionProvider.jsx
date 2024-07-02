class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  sendWelcomeMessage = () => {
    const message = this.createChatbotMessage("안녕하세요! 저는 여러분의 문제를 해결하기 위해 도와드리는 챗봇입니다. 저는 아직 개발중이에요.");
    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  };
}

export default ActionProvider;