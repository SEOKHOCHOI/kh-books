import React, { useState } from 'react';
import './Login.scss';

function Login() {
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
      alert('submitted');
      console.log(username,password);
      // 이부분이 서버로제출
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
            value={username} 
            onChange={(e) => {setUsername(e.target.value)}}
          />
          <div className="Login-error">{usernameError}</div>
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
          <button id="Login-forget" type="submit">아이디/비번 찾기</button>
        </div>
      </form>
    </div>
  );
}

export default Login;