import React, { useState } from 'react';
import './Signup.scss';
import request from '../api/request';

function Signup() {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [birth, setBirth] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const resetForm = () => {
    setUsername('');
    setPassword('');
    setPasswordCheck('');
    setUserId('');
    setBirth('');
    setAddress('')
    setPhone('');
    setEmail('');
  };

  const validateForm = () => {
    let checkId = true;
    let checkPassword = true;
    let checkPasswordCheck = true;
    let checkUsername = true;
    let checkEmail = true;
    let checkPhoneNum = true;

    resetErrors();
    const symbolId = /^[\-_|a-zA-Z0-9]{5,20}$/;
    const symbolPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*(){}[\]\/:;<=>?])(?=.*[0-9]).{9,16}$/;
    const symbolEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const symbolPhoneNum = /^01(0|1|6|7|8|9?)-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!username) {
      setUsernameError('이름을 입력해주세요.');
      checkUsername = false;
    }
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요');
      checkPassword = false;
    }
    if (!symbolPw.test(password)) {
      setPasswordError('대소문자/특수문자/숫자 각 한 글자 필수, 9~16자리 입력 해주세요.');
      checkPassword = false;
    }
    if (passwordCheck !== password) {
      setPasswordCheckError('비밀번호가 일치하지 않습니다.');
      checkPasswordCheck = false;
    }
    if (!symbolId.test(userId)) {
      setUserIdError('이 아이디는 사용불가 합니다.');
      checkId = false;
    }
    if (!symbolPhoneNum.test(phone)) {
      setPhoneError('정확한 번호를 입력해 주세요.');
      checkPhoneNum = false;
    }
    if(!email) {
      setEmailError('이메일을 입력해 주세요.');
      checkEmail = false;
    }
    if (!symbolEmail.test(email)) {
      setEmailError('메일을 입력해 주세요.');
      checkEmail = false;
    }

    return  (
      checkEmail && 
      checkUsername && 
      checkId && 
      checkPassword && 
      checkPhoneNum && 
      checkPasswordCheck
    );
  }
  const resetErrors = () => {
    setUsernameError('');
    setPasswordError('');
    setPasswordCheckError('');
    setUserIdError('');
    setPhoneError('');
    setEmailError('');
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let res = request({url:'/join', method:'POST', data:{
        userid: userId,
        username: username,
        password: password,
        address: address,
        phone: phone,
        email: email,
      }
    })
      res.then(data=>{
        if(data.join_message) {
          sessionStorage.setItem('join_message', username)
        } else {
          alert('회원가입 실패');
        }
      })
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
                value={userId} 
                onChange={(e) => {setUserId(e.target.value)}}
              />
            </div>
            <div id="Signup-user-id">{userIdError}</div>
          </span>
          <span>
            <div>
              <div className="Signup-flex">
                <p>&emsp;&emsp;비밀번호&emsp;&emsp;&emsp;&nbsp;</p>
                <input
                  type="password" 
                  placeholder="ex) ddddddddD1@" 
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