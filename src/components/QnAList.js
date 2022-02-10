import React from 'react';
import { Link } from 'react-router-dom';

function QnAList() {
  return(
    <div className="QnAList">
      <div></div>
      <div>공지사항?</div>
      <Link to="qna"><input id="QnAList" type="button" value="글작성" /></Link>
    </div>
  );
}

export default QnAList;