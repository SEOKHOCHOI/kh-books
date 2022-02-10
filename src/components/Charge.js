import React from 'react';

const onSubmit = (e) => {
  e.preventDefault();
  alert("dd");
  return;
}

function Charge() {
  return(
    <div className="Charge">
      <form onSubmit={onSubmit}>
        <div>
          <h6>가격</h6>
          <span>ㅇㅇ</span>
        </div>
        <div>
          <h6>수량</h6>
          <span>ㅇㅇㅇ</span>
        </div>
        <button type="submit" onClick={()=>{}}>결제</button>
      </form>
    </div>
  );
}

export default Charge;