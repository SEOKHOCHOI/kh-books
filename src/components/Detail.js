import React, { useState, useEffect } from 'react';
import './Detail.scss'; 
import { useParams } from 'react-router-dom';

function Detail(props) {

  const { id } = useParams();
  const booksData = props.booksData.find((booksItem) => booksItem.id == id);

  return(
    <div className="Detail">
      <div className="row"> 
        <div className="col-md-6">
        <img src={booksData.proImage} id="Detail-img"/>
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{booksData.proTitle}</h4>
        <p>{booksData.proNum}</p>
        <p>{booksData.proPrice}</p>
        <button className="btn btn-danger" onClick={()=>{
        }}>장바구니</button>
        <button className="btn btn-danger Detail-btn" onClick={() => {
        }}>바로구매</button>
      </div>
    </div>
  </div>
  );
}

export default Detail;