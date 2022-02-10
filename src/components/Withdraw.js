import React, { useState } from 'react';
import './Withdraw.scss';
import request from '../api/request';

function Withdraw() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const resetForm = () => {
    setUsername('');
    setPassword('');
  };

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if (!username) {
      setUsernameError('아이디를 입력해주세요');
      validated = false;
    }
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요');
      validated = false;
    }

    return validated;
  }
  const resetErrors = () => {
    setUsernameError('');
    setPasswordError('');
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("d")
      

      resetErrors();
      resetForm();
    }
  };

  return(
    <div className="Withdraw">
      <form onSubmit={onSubmit}>
        <div>  
          <h6 id="Withdraw-font">회원탈퇴</h6>
          <div className="Withdraw-h6-bottom"></div>
        </div>
        <div className="Withdraw-contents-display">
          <p id="Withdraw-id">아이디</p>
          <input
            type="text" 
            placeholder="아이디 확인" 
            value={username} 
            onChange={(e) => {setUsername(e.target.value)}}
          />
          <div className="Withdraw-error">{usernameError}</div>
        </div>
        <div className="Withdraw-contents-display">
          <p>비밀번호</p>
          <input 
            type="password"
            placeholder="비밀번호 확인" 
            value={password} 
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <div className="Withdraw-error">{passwordError}</div>
        </div>
        <div className="Withdraw-input">
          <button id="Withdraw-register" type="submit">회원탈퇴</button>
        </div>
      </form>
    </div>
  );
}

export default Withdraw;