import React from 'react';
import './QnA.scss';

function QnA() {
  return(
    <div className="QnA">
      <div>
        <h5>고객센터</h5>
        <div className="QnA-h5-bottom"></div>
      </div>
      <div>  
        <h6 id="QnA-font">Notice</h6>
        <div className="QnA-h6-bottom"></div>
      </div>
      <div className="QnA-contents-display">
        <p>제 목</p>
        <input type="text" />
      </div>
      <div className="QnA-contents-display">
        <p>내 용</p>
        <textarea name="" id="" cols="50" rows="7" />
      </div>
      <input id="QnA-register" type="button" value="등 록" />
    </div>
  );
}

export default QnA;