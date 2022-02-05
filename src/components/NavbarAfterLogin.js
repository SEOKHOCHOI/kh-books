import React from 'react';

function NavbarAfterLogin() {
  return(
    <div>
      <span><Link to="/mypage">마이페이지</Link></span>ㅣ
      <span><Link to="/login">로그아웃</Link></span>ㅣ
      <span><Link to="/shoppingBasket">장바구니</Link></span>ㅣ  
      <span><Link to="/track">주문조회</Link></span> 
    </div>
  );
}

export default NavbarAfterLogin;
