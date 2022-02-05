import React, { useEffect, useState } from 'react';
import './Register.scss';

function Register(props) {
  const [proTitle, setProTitle] = useState('');
  const [proWriter, setProWriter] = useState('');
  const [proContents, setProContents] = useState('');
  const [proTitleError, setProTitleError] = useState('');
  const [proWriterError, setProWriterError] = useState('');
  const [proContentsError, setProContentsError] = useState('');
  useEffect(()=>{
    console.log('render');
  })

  const resetForm = () => {
    setProTitle('');
    setProWriter('');
    setProContents('');
  };
  const validateForm = () => {
    resetErrors();
    let validated = true;
    if (!proTitle){
      setProTitleError('제목을 입력해주세요');
      validated = false;
    }
    if (!proWriter){
      setProWriterError('저자를 입력해주세요');
      validated = false;
    }
    return validated;
  }
  const resetErrors = () => {
    setProTitleError('');
    setProWriterError('');
  };
  const addBooks = (event) => {
    event.preventDefault();
    if (validateForm()) {
      props.setBooksData(
        [
          ...props.booksData,
          {
            // id는??? DB에서 받아오는거아님? 이거 내가 추가 어케함? id:Date.now(), 이런짓도 하면안되는건데 어케해야하지
            proTitle: proTitle,
            proWriter: proWriter,
            proContents: proContents,

          }
        ]
        )
        resetErrors()
        resetForm()
    }
  }
  return(
    <div className="Register">
      <div className="Register-box-top">
        <table className="Register-box">
          <thead>
            <tr>
              <th>관리자 페이지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="Register-padding-td01">상품등록</td>
            </tr>
            <tr> 
              <td className="Register-padding-td02">Q&A 답변</td>
            </tr>
          </tbody>
        </table>
        <form onSubmit={addBooks}>
          <div>  
            <h5 id="Register-font">상품등록</h5>
            <div className="Register-h6-bottom"></div>
          </div>
          <div className="Register-title-top">
            <p id="Register-title">책 제목</p>
            <input 
              type="text"
              value={proTitle}
              placeholder="책제목"
              onChange={(e)=>{setProTitle(e.target.value)}}
            />
            <div className="Register-error">{proTitleError}</div>
          </div>
          <div className="Register-contents-display">
            <p>저 자</p>
            <input 
              type="text" 
              value={proWriter}
              placeholder="저자"
              onChange={(e)=>{setProWriter(e.target.value)}}
            />
            <div className="Register-error">{proWriterError}</div>
          </div>
          <div className="Register-contents-display">
            <p>내 용</p>
            <textarea 
              cols="50" 
              rows="7" 
              placeholder="내용"
              value={proContents}
              onChange={(e)=>{setProContents(e.target.value)}}  
            />
          </div>
          <button id="Register-register" type="submit">등 록</button>
        </form>
      </div>
    </div>  
  );
}

export default Register;