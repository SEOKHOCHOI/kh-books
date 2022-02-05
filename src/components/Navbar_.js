import { Navbar,Nav,Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Navbar_.css';

const DEMO_DATA={
    "list": [
      {
        "proCategory": "소설",
        "proContents": "SF졸잼",
        "proCountry": "KOR",
        "proDate": "2022-01-26T08:27:39.929Z",
        "proImage": "../images/Waterpuppy.jpg",
        "proNum": 0,
        "proPrice": 2000,
        "proPublisher": "한빛",
        "proSales": 2000,
        "proTitle": "책제목",
        "proWriter": "톨킨"
      },
      {
        "proCategory": "소설",
        "proContents": "SF졸잼",
        "proCountry": "KOR",
        "proDate": "2022-01-26T08:27:39.929Z",
        "proImage": "../images/Waterpuppy.jpg",
        "proNum": 0,
        "proPrice": 2000,
        "proPublisher": "한빛",
        "proSales": 2000,
        "proTitle": "책제목",
        "proWriter": "톨킨"
      }
    ],
    "pagingDto": {
      "nowPage": 1,
      "totalPage": 10,
      "tupleCount": 100
    }
  };

function Navbar_() {
  return(
    <>
      <Navbar variant="light">
        <Container>
          <Nav className="me-auto" style={{display:'flex',alignItems:'center'}}>
            <Nav.Link  href="#mypage">마이페이지 </Nav.Link>ㅣ
            <Nav.Link className="fontColor" href="#login">로그인 </Nav.Link>
            <Nav.Link className="fontColor" href="#signUp">회원가입 ㅣ</Nav.Link>
            <Nav.Link className="fontColor" href="#shoppingBasket">장바구니 ㅣ</Nav.Link>
            <Nav.Link className="fontColor" href="#track" a>주문조회</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Navbar expand="lg">
        <Container>

          <Navbar.Brand href="#">BOOKS</Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav  
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">🔍</Button>
            </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar_;