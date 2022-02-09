import React, { useState, useEffect } from 'react';
import './Detail.scss'; 
import { useParams } from 'react-router-dom';

function Detail(props) {
  const [book,setBook] = useState({});
  const [product, setProducts] = useState({});

  const { proNum } = useParams();
  
  useEffect(()=>{
    let findedBook = props.booksData.list.find((bookItem) => bookItem.proNum === (proNum*1));
    setBook(findedBook);
    setProducts({count: findedBook.orderAmount, price:findedBook.proPrice});
  }, []);

  const addCount = () => {
    let count = product.count + 1;
    let price = book.proPrice*count;
    let tempProduct = {count: count, price: price}

    setProducts(tempProduct);
  }

  return(
    <div className="Detail">
      <div className="row"> 
        <div className="col-md-6">
          <img src={book&&book.proImage} id="Detail-img"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{book&&book.proTitle}</h4>
          <div className="Detail-data">
            <p>저자: {book&&book.proWriter} / </p>
            <p>출판사: {book&&book.proPublisher} / </p>
            <p>{book&&book.proDate} / </p>
          </div>
          <div className="Detail-price"> 
            <p>판매가 {product&&product.price}원</p>
            <div className="Detail-pm">
              <p>주문수량: {product&&product.count}</p>
              <button className="Detail-btn-item" onClick={addCount}>+</button>
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