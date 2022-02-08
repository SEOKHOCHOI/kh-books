import React from 'react';
import './NewBooks.scss';
import BestBooks from './bestBooks/BestBooks';
import { Link } from 'react-router-dom';

function NewBooks(props) {
  return(
    <div className="NewBooks">
      <div className="NewBooks-box-top">
        <table className="NewBooks-box">
          <thead>
            <tr>
              <th>신간도서</th>
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
      <div className="NewBooks-compo">
        <BestBooks booksData={props.booksData.list}/>
      </div>
    </div>
  );
}

export default NewBooks;