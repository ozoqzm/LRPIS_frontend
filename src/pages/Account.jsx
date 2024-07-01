import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import AccountNav from "./AccountNav";
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

const AccountBox = styled.div`
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  background: #fff;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.25);
  width: 344px;
  height: 126px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 23px;
  padding-top: 21px;
  padding-left: 18px;
  box-sizing: border-box;

  #name {
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #num {
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #balance {
    color: #000;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 7px;
  }
`;

const AccountSec = styled.div`
  height: 160px;
  background: white;
  padding-top: 29px;
`;

const Light = styled.div`
  font-weight: 400;
  display: inline-block;
  margin-left: 4px;
`;

const TranSec = styled.div`
  background: white;
`;

const TranHeader = styled.div`
  height: 40px;
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  padding-left: 23px;
`;

const TranList = styled.div`
  background: #fff;
`;

const TranItem = styled.div`
  height: 78px;
  border-top: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  padding-left: 33px;
  padding: 11px 0 0 33px;
  gap: 13px;
  position: relative;

  #time {
    color: #000;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.22px;
  }

  #name {
    color: #000;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  #price {
    color: ${(props) =>
      props.isGrey ? "#089995" : "#000"}; /* Conditional color */
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.3px;
    position: absolute;
    top: 34px;
    right: 34px;
  }

  #balance {
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.24px;
    position: absolute;
    top: 57px;
    right: 34px;
  }
`;

const Another = styled.div`
  font-size: 60px;
  margin: 0 auto;
  text-align: center;
  margin: -34px;
  padding-bottom: 20px;
  color: #D9D9D9;
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

const Account = () => {
  const navigate = useNavigate();

  // Sample transaction data
  const transactions = [
    {
      id: 1,
      time: "2024-06-21 (금) 17:23:27",
      name: "GS25동덕여대점",
      price: "-5,000원",
      balance: "잔액 408,804원",
    },
    {
      id: 2,
      time: "2024-06-20 (목) 13:23:30",
      name: "지그재그",
      price: "-38,700원",
      balance: "잔액 413,804원",
    },
    {
      id: 3,
      time: "2024-06-20 (목) 12:23:27",
      name: "이번 달 월급 입금",
      price: "+300,700원",
      balance: "잔액 452,504원",
    },
    {
      id: 4,
      time: "2024-06-18 (화) 14:15:15",
      name: "윤하나",
      price: "+38,700원",
      balance: "잔액 152,504원",
    },
    {
      id: 5,
      time: "2024-06-18 (화) 13:13:27",
      name: "쿠팡이츠",
      price: "+38,700원",
      balance: "잔액 113,804원",
    },
    {
      id: 6,
      time: "2024-06-17 (월) 17:23:27",
      name: "씨유(CU)성북구점",
      price: "-4,900원",
      balance: "잔액 138,804원",
    },
    {
      id: 7,
      time: "2024-06-16 (일) 14:27:18",
      name: "써밋스터디카페",
      price: "-3,000원",
      balance: "잔액 143,704원",
    },
  ];

  return (
    <Container>
      <AccountNav />
      <AccountSec>
        <AccountBox>
          <div id="name">
            <span id="1">김하나</span>
            <Light>님의 계좌</Light>
          </div>
          <div id="num">하나은행 1234567891011</div>
          <div id="balance">723,804원</div>
        </AccountBox>
      </AccountSec>
      <TranSec>
        <TranHeader>최근 거래 내역</TranHeader>
        <TranList>
          {transactions.map((transaction) => (
            <TranItem
              key={transaction.id}
              isGrey={transaction.id === 3 || transaction.id === 4 || transaction.id === 5}
            >
              <div id="time">{transaction.time}</div>
              <div id="name">{transaction.name}</div>
              <div id="price">{transaction.price}</div>
              <div id="balance">{transaction.balance}</div>
            </TranItem>
          ))}
        </TranList>
        <Another>...</Another>
      </TranSec>
      <Footer>개인정보처리방침</Footer>
      <MenuBar />
    </Container>
  );
};

export default Account;
