import React, { Fragment } from 'react';
import './MyPage.scss';
import { Link } from 'react-router-dom';

function MyPage(props) {
  return(
    <div className="MyPage">
      <div className="mypage-box-top">
        <table className="mypage-box">
          <thead>
            <tr>
              <th>마이페이지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="padding-td01"><Link to="/modifyinfo">정보수정</Link></td>
            </tr>
            <tr> 
              <td className="padding-td02"><Link to="/withdraw">회원탈퇴</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-all">
        <div className="table-top">
          <span className="mypage">마이페이지</span>
          <span className="home">홈 〉 마이페이지</span>
        </div>
        <div className="boundary-line"></div>
        <div className="my-info-font-top">
          <span className="my-info-font">나의 정보</span>
          <Link to="/modifyinfo"><button className="info-modify">정보 수정</button></Link>
        </div>
        <table className="my-info">
          <tr>
            <th className="my-info">유선번호</th> <td className="my-info">031-</td> 
            <th className="my-info">휴대폰</th> <td className="my-info">010-</td>
          </tr>
          <tr className="my-info">
            <th className="my-info">E-MAIL</th> <td>---@-----</td>
          </tr>
          <tr>
            <th className="my-info">주 소</th> <td>5232-223</td>
          </tr>
        </table>
        <div className="track-info">최근 주문/배송 조회</div>
        <table className="track-top">
          <tr>
            <th className="track-th">주문일</th> <th className="track-th">주문번호</th> <th className="track-th">주문상태</th> <th className="track-th">상품명</th>
          </tr>
            <td className="track-td"></td> <td className="track-td">0</td> <td className="track-td"></td> <td className="track-td-name"></td>
          <tr>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyPage;