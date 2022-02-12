import React,{ useState, useEffect } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import request from '../api/request';
// Navbar as NV 이건 별칭
function Navbar() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  // useEffect(()=>{
  //   const bookData = async () => {
  //     await axios
  //       .get(url걔네여기에)
  //       .then((res)=>{
  //         setItems(여기다 res.data.받아온데이터)
  //       });
  //   };
  //   bookData();
  // }, []);

  // const onSearch = (e) => {
  //   e.preventDefault();
  //   if (search === null || search === '') {
  //     axios.get(url걔네여기다)
  //       .then((res)=>{
  //         setItems(res.data.검색할뭔가??)
  //       });
  //   } else {
  //     const filterData = items.filter((row) => row.bookData.includes(search))
  //     setItems(filterData)
  //   }
  //   setSearch('')
  // };

  // // onChange action으로 input value값에 저장된 검색어 가져오기.
  // const onChangeSearch = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };

  return( 
    <nav className="nav-top">
      <div className="Navbar">
          <Link to="/login">로그인</Link>ㅣ
          <Link to="/signup">회원가입</Link>ㅣ
          <Link to="/ShoppingBasket">장바구니</Link>ㅣ
          <Link to="/ShoppingList">주문조회</Link>
      </div>
      <section className="section-display">
        <Link to="/" id="books-font">KH Books</Link>
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
            <input type="text" id="text-st" value="{search}로변경" placeholder="검색어를 입력하세요." onChange={()=>{}}/>
          </span>
          <span>
            <input type="button" value="" id="button-st" />
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

export default Navbar;