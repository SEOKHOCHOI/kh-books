import React, { useState } from 'react';
import './QnA.scss';

function QnA() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [titleError, setTitleError] = useState('');

  const validateForm = () => {
    let inputTitle = true;

    if (!title) {
      setTitleError('제목을 입력해주세요.');
      inputTitle = false;
    }
    

    return inputTitle;
  }
  const resetErrors = () => {
    setTitleError('');
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('submitted');
      // 이부분이 서버로제출
      resetErrors();
    }
  };

  return(
    

    <div className="QnA">
      <form onSubmit={onSubmit}>
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
          <input
              type="text" 
              name="title"
              placeholder="Title" 
              value={title} 
              onChange={(e) => {setTitle(e.target.value)}}
            />
        </div>
        <div id="QnA-titleError">{titleError}</div>
        <div className="QnA-contents-display">
          <p>내 용</p>
          <textarea 
            type="text"
            placeholder="내용을 입력해주세요."
            name="content" 
            cols="50" 
            rows="7" 
            value={content}
            onChange={(e)=>{setContent(e.target.value)}}
          />
        </div>
        <input id="QnA-register" type="submit" value="등 록" />
      </form>
    </div>
  );
}

export default QnA;