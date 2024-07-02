import React from "react";
import { styled } from "styled-components";
import AccountBtn from "./AccountBtn";

const Container = styled.div`
  position: absolute;
  width: 370px;
  height: 180px;
  border-radius: 20px;
  background: #f6f7f9;
`;
const DepositNotice = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 25px;
  #nickname {
    color: #474c52;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  }
  #content {
    color: #333;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.36px;
  }
`;
const Exception = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #888;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  text-decoration-line: underline;
`;
const DepositCompleted = () => {
  return (
    <Container>
      <DepositNotice>
        <div id="nickname">HappyHana님,</div>
        <div id="content">6월 10일 1,000,000원 입금 완료했습니다</div>
      </DepositNotice>
      <AccountBtn icon={"check"} />
      <Exception>월급이 입금되지 않았나요?</Exception>
    </Container>
  );
};

export default DepositCompleted;
