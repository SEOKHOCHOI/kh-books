import React from 'react';
import './Signup.scss';

function Signup() {
  return(
    <div className="Signup">
      <div>  
        <h6 id="Signup-font">회원가입</h6>
        <div className="Signup-h6-bottom"></div>
      </div>
      <div className="Signup-contents-top">
        <span className="Signup-flex">
          <p>아이디&emsp;</p>
          <input type="text" />
        </span>
        <span>
          <div className="Signup-flex">
            <p>&emsp;&emsp;비밀번호&emsp;&emsp;&emsp;&nbsp;</p>
            <input type="text" />
          </div>
          <div className="Signup-flex">
            <p>&emsp;&emsp;비밀번호 확인&emsp;</p>
            <input type="text" />
          </div>
        </span>
      </div>  
      <div className="Signup-bottom-lighter"></div>
      <div className="Signup-contents-top">
        <span className="Signup-flex">
          <p>이름&emsp;&emsp;</p>
          <input type="text" />
        </span>
        <span>
          <div className="Signup-flex">
            <p>&emsp;&emsp;생년월일&emsp;&emsp;&emsp;&nbsp;</p>
            <input type="text" />
          </div>
          <div className="Signup-flex">
            <p>&emsp;&emsp;주소&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;</p>
            <input type="text" />
          </div>
        </span>  
      </div>
      <div className="Signup-bottom-lighter"></div>
      <div className="Signup-contents-top">
        <div className="Signup-flex">
          <p id="Signup-num">휴대폰 번호&emsp;</p>
          <input type="text" />
        </div>
        <div className="Signup-flex">
          <p>&emsp;&emsp;이메일&emsp;&emsp;&emsp;&emsp;&nbsp;</p>
          <input type="text" />
        </div>
      </div>
      <div className="Signup-bottom-lighter"></div>
      <input id="Signup-register" type="button" value="등 록" />
    </div>
  );
}

export default Signup;