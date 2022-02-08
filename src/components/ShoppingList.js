import React from 'react';
import './ShoppingList.scss';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ShoppingList(props) {
  return(
    <div className="ShoppingList">
      <h5>주문리스트</h5>
      <div className="ShoppingList-bottom"></div>
      <div className="ShoppingList-bottom"></div>
      <div className="ShoppingList-tables">
        <Table responsive="sm">
          <thead>
            <tr>
              <th></th>
              <th>이미지</th>
              <th>책이름</th>
              <th>수량</th>
              <th>가격</th>
              <th>적립</th>
            </tr>
          </thead>
          <tbody>
            {
              props.booksData.list.map((a,i)=>{
                return (
                  <tr key={i}>
                    <td>{ a.orderNum }</td>
                    <td id="ShoppingList-image"><img src={ a.proImage } /></td>
                    <td id="ShoppingList-title">{ a.proTitle }</td>
                    <td>{ a.orderAmount }</td>
                    <tr className="ShoppingList-info-price">
                      <td>{ a.proPrice }</td>
                      <td>할인가</td>
                      <td id="ShoppingList-price-all">총금액</td>
                    </tr>
                    {/* <td>{userPoint}</td> */}
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
      <div className="ShoppingList-bottom"></div>
      <h5>주문자정보</h5>
      <div className="ShoppingList-bottom"></div>
      <div className="ShoppingList-input-info">
        <h6 className="ShoppingList-title ShoppingList-name">이름</h6>
        <span>{props.booksData.list.userID}</span>
      </div>
      <div className="ShoppingList-bottom-lighter"></div>
      <div className="ShoppingList-input-info">
        <h6 className="ShoppingList-title">이메일</h6>
        <span>{props.booksData.list.userEmail}</span>
      </div>
      <div className="ShoppingList-bottom-lighter"></div>
      <div className="ShoppingList-input-info">
        <h6 className="ShoppingList-title">연락처</h6>
        <span>{props.booksData.list.userPhone}</span>
      </div>
      <div className="ShoppingList-bottom"></div>
      <h5>배송 정보</h5>
      <div className="ShoppingList-bottom"></div>
      <div className="ShoppingList-input-info">
        <h6 className="ShoppingList-title ShoppingList-name">이름</h6>
        <span>{props.booksData.list.userID}</span>
      </div>
      <div className="ShoppingList-bottom-lighter"></div>
      <div className="ShoppingList-input-info">
        <span className="ShoppingList-phone">
          <h6 className="ShoppingList-home-num">일반전화</h6>
          <span>{props.booksData.list.userPhone}</span>
          <span id="ShoppingList-l">|</span>
        </span>
        <span className="ShoppingList-phone">
          <h6 className="ShoppingList-phone-num">휴대전화</h6>
          <span>{props.booksData.list.userPhone}</span>
        </span>
      </div>
      <div className="ShoppingList-bottom-lighter"></div>
      <div className="ShoppingList-input-info">
        <h6 className="ShoppingList-title ShoppingList-name">주소</h6>
        <span>{props.booksData.list.userAddres}</span>
      </div>
      <div className="ShoppingList-bottom"></div>
      <div className="ShoppingList-bottom-last"></div>
      <div className="ShoppingList-input-info">
        <h6>최종 결제금액</h6>
        <span id="ShoppingList-price">{props.booksData.list.orderPrice}</span>
        <h6>원</h6>
      </div>
      <div className="ShoppingList-bottom"></div>
      <div className="ShoppingList-button">
        <Link to="/track"><input id="ShoppingList-order" type="button" value="배송조회" /></Link>
        <input id="ShoppingList-cancel" type="button" value="주문취소" />
      </div>
    </div>
  );
}

export default ShoppingList;