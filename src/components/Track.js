import React from 'react';
import './Track.scss';

function Track() {
  return(
    <div className="Track">
      <div className="table-all">
        <div className="table-top">
          <span className="track">배송조회</span>
          <span className="home">주문조회 〉 배송조회</span>
        </div>
        <div className="boundary-line"></div>
        <div className="my-info-font-top">
          <span className="my-info-font">배송지 정보</span>
        </div>
        <table className="my-info">
          <tr>
            <th className="my-info">결제 금액</th> <td className="my-info"><span>{/*orderPrice*/}</span></td> 
            <th className="my-info">휴대폰</th> <td className="my-info">010-</td>
          </tr>
          <tr className="my-info">
            <th className="my-info">E-MAIL</th> <td>---@-----</td>
          </tr>
          <tr>
            <th className="my-info">주 소</th> <td><span>{/*orderAddres*/}</span></td>
          </tr>
        </table>
        <div className="track-info">배송지</div>
        <table className="track-top">
          <tr>
            <th className="track-th">담당자 연락처</th> <th className="track-th">주문번호</th> <th className="track-th">현재위치</th> <th className="track-th">상품명</th>
          </tr>
            <td className="track-td"></td> <td className="track-td"><span>{/*orderTitle*/}0</span></td> <td className="track-td"><span>여기</span></td> <td className="track-td-name"><span>{/*orderTitle*/}</span></td>
          <tr>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Track;