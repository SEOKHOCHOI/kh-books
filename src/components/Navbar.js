import React,{ useState, useEffect } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import request from '../api/request';
// Navbar as NV 이건 별칭
function Navbar({logout}) {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [session, setSession] = useState('');

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


  // 이건 컴포넌트 교체
  // onClick={()=>{
  //   let res = request({url:'',method:'',data:{}})
  //   res.then(data=>{})
  // }}

  const deleteSessionData = () => {
    //특정 데이터 삭제 실시
    sessionStorage.removeItem('logined');
    logout()
  };

  return( 
    <nav className="nav-top">
      <div className="Navbar">
        {
          session 
          ? (
            <>
              <Link to="/mypage">마이페이지</Link>ㅣ
              <button onClick={deleteSessionData}>로그아웃</button>ㅣ
            </>
          ) : (
            <>
              <Link to="/login">로그인</Link>ㅣ
              <Link to="/signup">회원가입</Link>ㅣ
            </>
          )
        }
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
              <span>베스트도서</span>
              <span>신간도서</span>
              <span>국내도서</span>
              <span>외국도서</span>
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