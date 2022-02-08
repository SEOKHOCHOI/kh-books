import React, { useState, useEffect } from 'react';
import './Detail.scss'; 
import { useParams } from 'react-router-dom';

function Detail(props) {
  const [products, setProducts] = useState([]);

  const { proNum } = useParams();
  const booksData = props.booksData.list.find((booksItem) => booksItem.proNum == proNum);

  useEffect(()=>{
    let books = [];
    let total = 0;
    books = props.booksData.list.map((book)=>{
      total+=book.proPrice;
      return {count: book.orderAmount, price:book.proPrice}
    })
    setProducts(books);
  }, []);

  const addCount = (index) => {
    let count = products[index].count + 1;
    let price = props.booksData.list[index].proPrice*count;
    let tempProducts = [...products];
    tempProducts[index] = {count: count, price: price}

    let increace = price - products[index].price

    setProducts(tempProducts);
  }

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
            <p>판매가 {products[0]&&products[0].price}원</p>
            <div className="Detail-pm">
              <p>주문수량: {products[0]&&products[0].count}</p>
              <button className="Detail-btn-item" onClick={()=>{addCount(0)}}>+</button>
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