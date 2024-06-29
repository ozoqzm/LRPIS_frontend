import React from "react";

const Container = styled.div`
  position: absolute;
  top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 255px;
  height: 147px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const DepositNotice = styled.div``;

const Popup = () => {
  return (
    <Container>
      <DepositNotice>
        <div id="nickname">HappyHana님,</div>
        <div id="content">6월 10일 1,000,000원 입금 예정입니다</div>
        <AccountBox></AccountBox>
        <div id="exception">월급이 입금되지 않았나요?</div>
      </DepositNotice>
    </Container>
  );
};

export default Popup;
