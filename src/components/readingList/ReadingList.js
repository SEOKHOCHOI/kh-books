import React from 'react';
import './ReadingList.scss';

function ReadingList(props) {
  return(
    <div className="ReadingList">
      {
        props.rdData.map((a,i)=>{
          
          return (
            <span key={i} className="ReadingList-top">
              <div><img id="ReadingList-image" src={ a.proImage }/></div>
            </span>
          )
        })
      }
    </div>
  );
}

export default ReadingList;