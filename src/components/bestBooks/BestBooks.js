import React from 'react';
import './BestBooks.scss';
import { Link } from 'react-router-dom';

function BestBooks(props) {

  if (props.loading) {
    return <h2>Loading..</h2>;
  }

  return(
    <div className="BestBooks">
      {
        props.booksData.map((a,i)=>{
          
          return (
            <div key={i} className="BestBooks-top">
              <Link to={`/detail/${a.proNum}`}>
                <div><img id="BestBooks-image" src={ a.proImage }/></div>
                <div className="BestBooks-info">
                  <div>{ a.proTitle }</div>
                  <div id="BestBooks-wp">{ a.proWriter } / { a.proPublisher }</div>
                  <div>{ a.proPrice }</div>
                </div>
              </Link>
            </div>
          )
        })
      }
      
      {/* <ul className="list-group mb-4">
        {props.posts.map((post)=>{
          return (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          )    
        })}
      </ul> */}
      
    </div>
  );
}

export default BestBooks;