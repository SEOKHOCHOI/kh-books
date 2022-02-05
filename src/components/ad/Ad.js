import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Ad.scss';

function Ad(props) {
  return(
    <div className="Ad">
      <Carousel>
        {
          props.adData.map((a,i)=>{
            
            return (
              <span key={i} className="Ad-top">
                <div><img id="Ad-image" src={ a.proImage}/></div>
              </span>
            )
          })
        }
      </Carousel>
    </div>
  );
}

export default Ad;