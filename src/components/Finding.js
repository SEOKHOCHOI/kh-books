import React, { useState } from 'react';
import './Finding.scss';
import { Link } from 'react-router-dom';

function Finding() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const resetForm = () => {
    setUsername('');
    setEmail('');
  };

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if (!email) {
      setEmailError('비밀번호를 입력해주세요');
      validated = false;
    }

    return validated;
  }
  const resetErrors = () => {
    setEmailError('');
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('submitted');
      console.log(username,email);
      // 이부분이 서버로제출
      resetErrors();
      resetForm();
    }
  };

  return(
    <div className="Finding">
      <form onSubmit={onSubmit}>
        <div>  
          <h6 id="Finding-font">아이디/비번 찾기</h6>
          <div className="Finding-h6-bottom"></div>
        </div>
        <div className="Finding-contents-display">
          <p id="Finding-id">아이디</p>
          <input
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => {setUsername(e.target.value)}}
          />
        </div>
        <div className="Finding-contents-display">
          <p>가입메일</p>
          <input 
            type="text"
            placeholder="email" 
            value={email} 
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <div className="Finding-error">{emailError}</div>
        </div>
        <div className="Finding-input">
          <button id="Finding-register" type="submit">아이디</button>
          <button id="Finding-forget" type="submit"> &emsp;비밀번호 찾기</button>
        </div>
      </form>
      <div className="Finding-bottom"></div>
        <div className="Finding-info">
          <p> Information </p>
          <p> 1. 아이디 입력 + Email입력 : 비밀번호 찾기, 인증메일 전송 </p>
          <p> 2. 아이디 미입력 + Email입력 : 아이디 찾기, 인증메일 전송 </p>
          <p>  Email은 필수 입력입니다. </p> 
        </div>
      <div className="Finding-bottom"></div>
    </div>
  );
}


export default Finding;