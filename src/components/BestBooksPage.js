import React from 'react';
import './BestBooksPage.scss';
import BestBooks from './bestBooks/BestBooks';
import { Link } from 'react-router-dom';

function BestBooksPage(props) {
  return(
    <div className="BestBooksPage">
      <div className="BestBooksPage-box-top">
        <table className="BestBooksPage-box">
          <thead>
            <tr>
              <th>베스트셀러</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="padding-td01"><Link to="/">종합</Link></td>
            </tr>
            <tr> 
              <td className="padding-td02"><Link to="/domestic">국내도서</Link></td>
            </tr>
            <tr> 
              <td className="padding-td02"><Link to="foreign">외국도서</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="BestBooksPage-compo">
        <BestBooks booksData={props.booksData.list}/>
      </div>
    </div>
  );
}

export default BestBooksPage;