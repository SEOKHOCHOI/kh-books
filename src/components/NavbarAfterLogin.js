import React from 'react';
import './NavbarAfterLogin.scss';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
// Navbar as NV 이건 별칭
function NavbarAfterLogin({logout}) {
  
  // const deleteAllSessionData = () =>{
  //     //전체 데이터 삭제 실시
  //     sessionStorage.clear();
  //     logout();
    
  // };
  /* 세션 스토리지 특정 데이터 삭제 */
  const deleteSessionData = () => {
    //특정 데이터 삭제 실시
    sessionStorage.removeItem('logined');
    logout()
  };

  return( 
    <nav className="NavbarAfterLogin-nav-top">
      <div className="Navbar">
          <Link to="/mypage">마이페이지</Link>ㅣ
          <button onClick={deleteSessionData}>로그아웃</button>ㅣ
          <Link to="/ShoppingBasket">장바구니</Link>ㅣ
          <Link to="/ShoppingList">주문조회</Link>
      </div>
      <section className="section-display">
        <Link to="/" id="books-font">SH Books</Link>
        <sapn className="section-display border-all">
          <details>
          {/* 디폴트 값 */}
            <summary id="toggle">
              통합검색 <i class="fas fa-chevron-down"></i><sapn id="l-color">ㅣ</sapn>
            </summary>
            <div className="item-position">
              <Link to="/bestbookspage">베스트도서</Link>
              <Link to="/newbooks">신간도서</Link>
              <Link to="/domestic">국내도서</Link>
              <Link to="/foreign">외국도서</Link>
            </div>
          </details>
          <span>
            <input type="text" id="text-st" onChange={()=>{console.log('hi')}}/>
          </span>
          <span>
            <input type="button" value="검색" id="button-st" />
          </span>
        </sapn>
      </section>
      <div>
        <Tabs
          defaultActiveKey="bestbookspage"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab 
            eventKey="bestbookspage" 
            title={
              <Link to="/bestbookspage"><h6 className="selectItem">베스트도서</h6></Link>
            }
          >
          </Tab>
          <Tab 
            eventKey="newBooks" 
            title={
              <Link to="/newbooks"><h6 className="selectItem">신간도서</h6></Link>
            }
          >
          </Tab>
          <Tab 
            eventKey="domestic" 
            title={
              <Link to="/domestic"><h6 className="selectItem">국내도서</h6></Link>
            }
          >
          </Tab>
          <Tab 
            eventKey="foreign" 
            title={
              <Link to="/foreign"><h6 className="selectItem">외국도서</h6></Link>
            }
          >
          </Tab>
          <Tab 
            eventKey="qnalist" 
            title={
              <Link to="/qnalist"><h6 className="selectItem">고객센터</h6></Link>
            }
          >
          </Tab>
        </Tabs>
      </div>        
    </nav>  
  );
}

export default NavbarAfterLogin;
