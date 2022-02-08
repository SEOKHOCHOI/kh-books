import React from 'react';

function Track() {
  return(
    <div>
      <p>주문번호: <span>{/*orderTitle*/}</span></p>
      <p>책 제목: <span>{/*orderTitle*/}</span></p>
      <p>구매자 아이디: <span>{/*orderUser*/}</span></p>
      <p>구매자 주소: <span>{/*orderAddres*/}</span></p>
      <p>결제 금액: <span>{/*orderPrice*/}</span></p>
      <p>현재 위치: <span></span></p>
    </div>
  );
}

export default Track;