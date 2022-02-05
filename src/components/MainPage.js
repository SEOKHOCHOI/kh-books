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
      <div className="MainPage-bestBox">
        <BestBooks booksData={props.booksData}/>  
      </div>
      <div className="MainPage-recommended">
        <ReadingList rdData={rdData}/>
      </div>
    </div>
  );
}

export default MainPage;