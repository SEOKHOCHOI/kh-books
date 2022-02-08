import React from 'react';
import './Foreign.scss';
import BestBooks from './bestBooks/BestBooks';
import { Link } from 'react-router-dom';

function Foreign(props) {
  return(
    <div className="Domestic">
      <div className="Domestic-box-top">
        <table className="Domestic-box">
          <thead>
            <tr>
              <th>외국도서</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="padding-td01"><Link to="/">종합</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Domestic-compo">
        <BestBooks booksData={props.booksData.list}/>
      </div>
    </div>
  );
}

export default Foreign;