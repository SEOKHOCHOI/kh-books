import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function EmptyAd(props) {

  const { id } = useParams();
  const adDataE = props.adData.find((adItem) => adItem.id == id);

  return(
    <div className="EmptyAd">
      <h1>광고가 비어 있습니다.</h1>
      <p>광고가 들어올 페이지{adDataE.id}</p>
      <div><img id="Ad-image" src={adDataE.proImage}/></div>
    </div>
  );
}

export default EmptyAd;