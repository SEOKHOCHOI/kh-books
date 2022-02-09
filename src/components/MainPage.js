import React, { useState } from 'react';
import BestBooks from './bestBooks/BestBooks';
import './MainPage.scss';
import Ad from './ad/Ad';
import AdData from '../AdData';
import ReadingData from '../ReadingData';
import ReadingList from './readingList/ReadingList';

function MainPage(props) {
  const [adData, setAdData] = useState(AdData);
  const [rdData, setRdData] = useState(ReadingData);
  return(
    <div className="MainPage"> 
      <div className="MainPage-advertisement">
        <Ad adData={adData} />
      </div>
      <h5>베스트도서</h5>
      <div className="MainPage-bestBox">
        {/* <BestBooks booksData={props.booksData.list}/>   */}
      </div>
      <h5>MD 추천도서</h5>
      <div className="MainPage-recommended">
        <ReadingList rdData={rdData}/>
      </div>
    </div>
  );
}

export default MainPage;