import React from 'react';
import { Link } from 'react-router-dom';
import './ModifyInfo.scss';
import request from '../api/request';

function ModifyInfo() {
  return(
    <div className="ModifyInfo">
      <div className="ModifyInfo-box-top">
        <table className="ModifyInfo-box">
          <thead>
            <tr>
              <th>마이페이지</th>
            </tr>
          </thead>
          <tbody>
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
        </div>
        <table className="my-info">
          <tr>
            <th className="my-info">유선번호</th> 
            <input 
              type="text"
              placeholder="022345678" 
              value=""
              onChange={() =>{}}
            />
            <th className="my-info">휴대폰</th> 
            <input 
              type="text"
              placeholder="01012345678" 
              value=""
              onChange={() =>{}}
            />
          </tr>
          <tr className="my-info">
            <th className="my-info">E-MAIL</th> 
            <input 
              type="text"
              placeholder="ex) email@naver.com" 
              value=""
              onChange={() =>{}}
            />
          </tr>
          <tr>
            <th className="my-info">주 소</th> 
            <input 
              type="text"
              placeholder="ex) 서울시 마포구-" 
              value=""
              onChange={() =>{}}
            />
          </tr>
        </table>
        <div className="ModifyInfo-footer">
          <div>
            <div>아이디</div>
            <input 
              type="text"
              placeholder="아이디 확인" 
              value=""
              onChange={() =>{}}
            />
          </div>
          <div>
            <div>비밀번호</div>
            <input 
              type="text"
              placeholder="비밀번호 확인" 
              value=""
              onChange={() =>{}}
            />
          </div>
          <button className="info-modify" onClick={()=>{}}>정보 수정</button>
        </div>
      </div>
    </div>
  );
}

export default ModifyInfo;