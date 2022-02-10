import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import request from '../api/request';
function Login({logined}) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const resetForm = () => {
    setUserId('');
    setPassword('');
  };

  const validateForm = () => {
    let checkId = true;
    let checkPassword = true;

    resetErrors();
    const symbolId = /^[\-_|a-zA-Z0-9]{5,20}$/;
    const symbolPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*(){}[\]\/:;<=>?])(?=.*[0-9]).{9,16}$/;
    if (!userId) {
      setUserIdError('아이디를 입력해주세요.');
      checkId = false;
    }
    if (!symbolId.test(userId)) {
      setUserIdError('5~20자의 영문 소문자, 숫자와 특수기호(_), (-)만 사용 가능합니다.');
      checkId = false;
    }
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요');
      checkPassword = false;
    }
    if (!symbolPw.test(password)){
      setPasswordError('알파벳 대소문자, 특수문자, 숫자 각 한 글자 필수입력, 9~16자리 입력 해주세요.')
      checkPassword = false;
    }

    return checkId && checkPassword;
  }
  const resetErrors = () => {
    setUserIdError('');
    setPasswordError('');
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let res = request({url:'/login',method:'POST',data:{userid:userId,password:password}})
      res.then(data=>{
        if(data.logined){
          sessionStorage.setItem('logined', userId);
          logined(userId);
        }else{
          alert('로그인 실패');
        }
      })

      resetErrors();
      resetForm();
    }
  };

  return(
    <div className="Login">
      <form onSubmit={onSubmit}>
        <div>  
          <h6 id="Login-font">로그인</h6>
          <div className="Login-h6-bottom"></div>
        </div>
        <div className="Login-contents-display">
          <p id="Login-id">아이디</p>
          <input
            type="text" 
            placeholder="Username" 
            value={userId} 
            onChange={(e) => {setUserId(e.target.value)}}
          />
          <div className="Login-error">{userIdError}</div>
        </div>
        <div className="Login-contents-display">
          <p>비밀번호</p>
          <input 
            type="password"
            placeholder="Password" 
            value={password} 
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <div className="Login-error">{passwordError}</div>
        </div>
        <div className="Login-input">
          <button id="Login-register" type="submit">로그인</button>
          <Link to="/finding"><button id="Login-forget" type="submit">아이디/비번 찾기</button></Link>
        </div>
      </form>
    </div>
  );
}

export default Login;