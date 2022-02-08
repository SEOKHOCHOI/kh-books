import React from 'react';
import './ShoppingBasket.scss';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ShoppingBasket(props) {
  const [products,setProducts] = React.useState([]);
  const [totalPrice,setTotalPrice] = React.useState(0);

  React.useEffect(()=>{
    let books = [];
    let total = 0;
    books = props.booksData.list.map((book)=>{
      total+=book.proPrice;
      return {count: book.orderAmount,price:book.proPrice};
    });
    setProducts(books);
    setTotalPrice(total);
  },[]);

  const addCount = (index)=>{
    let count = products[index].count+1;
    let price = props.booksData.list[index].proPrice*count;
    let tempProducts = [...products];
    tempProducts[index]={count:count,price:price};

    let increace =  price-products[index].price

    setProducts(tempProducts);
    setTotalPrice(totalPrice+increace);
  }

  const subCount = (index)=>{
    if (products[index].count > 1) {
      let count = products[index].count-1;
      let price = props.booksData.list[index].proPrice*count;
      let tempProducts = [...products];
      tempProducts[index]={count:count, price:price};
  
      let reduce = products[index].price-price
  
      setProducts(tempProducts);
      setTotalPrice(totalPrice-reduce);
    }
  }

  return(
    <div className="ShoppingBasket">
      <div>
        <h5 className="ShoppingBasket-basket">장바구니</h5>
        <div className="ShoppingBasket-h5-bottom"></div>
      </div>
      <Table responsive="sm" className="ShoppingBasket-table">
        <thead>
          <tr>
            <th></th>
            <th>이미지</th>
            <th>책이름</th>
            <th>수량</th>
            <th>변경</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {
            props.booksData.list.map((a,i)=>{
              return (
                <tr key={i}>
                  <td id="fontawesome-x"><i class="fas fa-times"></i></td>
                  <td><img id="ShoppingBasket-image" src={ a.proImage } /></td>
                  <td id="ShoppingBasket-title" className="ShoppingBasket-td">{ a.proTitle }</td>
                  <td className="ShoppingBasket-td">{ products[i]&&products[i].count }</td>
                  <td className="ShoppingBasket-button">
                    <button className="ShoppinBasket-btn-item" onClick={()=>{addCount(i)}}>+</button>
                    <button className="ShoppinBasket-btn-item-" onClick={()=>{subCount(i)}}>-</button>
                  </td>
                  <td className="ShoppingBasket-td">{ products[i]&&products[i].price }</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <div className="ShoppingBasket-h6-bottom"></div>
      <div className="ShoppingBasket-all-bottom">
        <h6 className="ShoppingBasket-mian-h6">총 결제금액 :</h6> 
        <p className="ShoppingBasket-price">{totalPrice}</p> 
        <h6 className="ShoppingBasket-h6">원</h6>
        <Link to="/charge"><input id="ShoppingBasket-register" type="button" value="결제하기" /></Link>
      </div>
    </div>
  );
}

export default ShoppingBasket;