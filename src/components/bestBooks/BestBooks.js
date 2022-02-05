import React from 'react';
import './BestBooks.scss';

function BestBooks(props) {
  return(
    <div className="BestBooks">
      {
        props.booksData.map((a,i)=>{
          
          return (
            <div key={i} className="BestBooks-top">
              <div><img id="BestBooks-image" src={ a.proImage}/></div>
              <div>{ a.proTitle }</div>
              <div>{ a.proWriter } / { a.proPublisher }</div>
              <div>{ a.proPrice }</div>
            </div>
          )
        })
      }
    </div>
  );
}

export default BestBooks;