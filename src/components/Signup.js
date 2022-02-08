import React, { useState } from 'react';
import './Signup.scss';

function Signup() {

  const [username, setUsername] = useState('');
  const [userid, setUserid] = useState('');
  const [birth, setBirth] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');
  const [useridError, setUseridError] = useState('');
  const [birthError, setBirthError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const resetForm = () => {
    setUsername('');
    setPassword('');
    setPasswordCheck('');
    setUserid('');
    setBirth('');
    setAddress('')
    setPhone('');
    setEmail('');
  };

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if (!username) {
      setUsernameError('다른 아이디를 입력해주세요');
      validated = false;
    }
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요');
      validated = false;
    }
    if (!passwordCheck) {
      setPasswordCheckError('비밀번호가 일치하지 않습니다.');
      validated = false;
    }
    if (!userid) {
      validated = false;
      setUseridError('이 아이디는 사용불가 합니다')
    }
    if (!phone) {
      validated = false;
      setPhoneError('번호를 입력해 주세요')
    }
    if (!email) {
      validated = false;
      setEmailError('메일을 입력해 주세요')
    }

    return validated;
  }
  const resetErrors = () => {
    setUsernameError('');
    setPasswordError('');
    setPasswordCheckError('');
    setUseridError('');
    setPhoneError('');
    setEmailError('');
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
    <div className="Signup">
      <form onSubmit={onSubmit}>
        <div>  
          <h6 id="Signup-font">회원가입</h6>
          <div className="Signup-h6-bottom"></div>
        </div>
        <div className="Signup-contents-top">
          <span>
            <div className="Signup-flex">
              <p>아이디&emsp;</p>
              <input
                type="text" 
                placeholder="ID" 
                value={userid} 
                onChange={(e) => {setUserid(e.target.value)}}
              />
            </div>
            <div id="Signup-user-id">{useridError}</div>
          </span>
          <span>
            <div>
              <div className="Signup-flex">
                <p>&emsp;&emsp;비밀번호&emsp;&emsp;&emsp;&nbsp;</p>
                <input
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => {setPassword(e.target.value)}}
                />
              </div>
              <div id="Signup-password">{passwordError}</div>
            </div>
            <div>
              <div className="Signup-flex">
                <p>&emsp;&emsp;비밀번호 확인&emsp;</p>
                <input
                  type="password" 
                  placeholder="Password-check" 
                  value={passwordCheck} 
                  onChange={(e) => {setPasswordCheck(e.target.value)}}
                />
              </div>
              <div id="Signup-password-chk">{passwordCheckError}</div>
            </div>
          </span>
        </div>  
        <div className="Signup-bottom-lighter"></div>
        <div className="Signup-contents-top">
          <span>
            <div className="Signup-flex">
              <p>이름&emsp;&emsp;</p>
              <input
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
              />
            </div>
            <div id="Signup-username">{usernameError}</div>
          </span>
          <span>
            <div className="Signup-flex">
              <p>&emsp;&emsp;생년월일&emsp;&emsp;&emsp;&nbsp;</p>
              <input
                type="text" 
                placeholder="ex) 20220207" 
                value={birth} 
                onChange={(e) => {setBirth(e.target.value)}}
              />
            </div>
            <div className="Signup-flex">
              <p>&emsp;&emsp;주소&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;</p>
              <input
                type="text" 
                placeholder="ex) 서울시 마포구- " 
                value={address}
                onChange={(e) => {setAddress(e.target.value)}}
              />
            </div>
          </span>  
        </div>
        <div className="Signup-bottom-lighter"></div>
        <div className="Signup-contents-top">
          <div>
            <div className="Signup-flex">
              <p id="Signup-num">휴대폰 번호&emsp;</p>
              <input
                type="text" 
                placeholder="ex) 01012345678" 
                value={phone}
                onChange={(e) => {setPhone(e.target.value)}}
              />
            </div>
            <div id="Signup-phone">{phoneError}</div>
          </div>
          <div>
            <div className="Signup-flex">
              <p>&emsp;&emsp;이메일&emsp;&emsp;&emsp;&emsp;&nbsp;</p>
              <input
                type="text" 
                placeholder="ex) usermail@naver.com" 
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
              />
            </div>
            <div id="Signup-email">{emailError}</div>
          </div>
        </div>
        <div className="Signup-bottom-lighter"></div>
        <input id="Signup-register" type="submit" value="등 록" />
      </form>
    </div>
  );
}

export default Signup;