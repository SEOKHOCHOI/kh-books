import React from 'react';
import './Detail.scss'; 
import { useParams } from 'react-router-dom';

function Detail(props) {

  const { proNum } = useParams();
  const booksData = props.booksData.list.find((booksItem) => booksItem.proNum == proNum);


  return(
    <div className="Detail">
      <div className="row"> 
        <div className="col-md-6">
          <img src={booksData.proImage} id="Detail-img"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{booksData.proTitle}</h4>
          <div className="Detail-data">
            <p>저자: {booksData.proWriter} / </p>
            <p>출판사: {booksData.proPublisher} / </p>
            <p>{booksData.proDate} / </p>
          </div>
          <div className="Detail-price">
            <p>판매가 {booksData.proPrice}원</p>
            <div className="Detail-pm">
              <p>주문수량: {booksData.orderAmount}</p>
              <button className="Detail-btn-item" onClick={()=>{}}>+</button>
              <button className="Detail-btn-item-" onClick={()=>{}}>-</button>
            </div>
          </div>
          <button className="btn btn-danger" type="submit">
            장바구니
          </button>
          <button className="btn btn-danger Detail-btn" type="submit">
            바로구매
          </button>
        </div>
        <div className="Detail-bottom"></div>
        <div>
          도서정보
        </div>
        <div className="Detail-bottom"></div>
      </div>
    </div>
  );
}

export default Detail;