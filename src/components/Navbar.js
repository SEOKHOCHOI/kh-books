import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
// Navbar as NV 이건 별칭
function Navbar() {
  return( 
    <nav className="nav-top">
      <div className="Navbar">
          <Link to="/login">로그인</Link>ㅣ
          <Link to="/signup">회원가입</Link>ㅣ
          <Link to="/ShoppingBasket">장바구니</Link>ㅣ
          <Link to="/ShoppingList">주문조회</Link>
      </div>
      <section className="section-display">
        <Link to="/mainpage" id="books-font">SH Books</Link>
        <sapn className="section-display border-all">
          <details open>
          {/* 디폴트 값 */}
            <summary id="toggle">
              통합검색 <span id="v-size">∨</span><sapn id="l-color">ㅣ</sapn>
            </summary>
            <div className="item-position">
              <Link to="/detail">베스트도서</Link>
              <Link to="/register">신간도서</Link>
              <Link to="/">국내도서</Link>
              <Link to="/">외국도서</Link>
            </div>
          </details>
          <span>
            <input type="text" id="text-st" />
          </span>
          <span>
            <input type="button" value="검색" id="button-st" />
          </span>
        </sapn>
      </section>
      <div>
        <Tabs
          defaultActiveKey="bestBook"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab 
            eventKey="bestBook" 
            title={
              <Link to="/mainPage"><h6 className="selectItem">베스트도서</h6></Link>
            }
          >
          </Tab>
          <Tab 
            eventKey="newBooks" 
            title={
              <Link to="/#"><h6 className="selectItem">신간도서</h6></Link>
            }
          >
          </Tab>
          <Tab 
            eventKey="interior" 
            title={
              <Link to="/#"><h6 className="selectItem">국내도서</h6></Link>
            }
          >
          </Tab>
          <Tab 
            eventKey="foreign" 
            title={
              <Link to="/#"><h6 className="selectItem">외국도서</h6></Link>
            }
          >
          </Tab>
          <Tab 
            eventKey="customer" 
            title={
              <Link to="/"><h6 className="selectItem">고객센터</h6></Link>
            }
          >
          </Tab>
        </Tabs>
      </div>        
    </nav>  
  );
}

export default Navbar;