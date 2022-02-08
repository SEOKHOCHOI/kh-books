import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Ad.scss';
import { Link } from 'react-router-dom';

function Ad(props) {
  return(
    <div className="Ad">
      <Carousel>
        {
          props.adData.map((a,i)=>{
            
            return (
              <span key={i} className="Ad-top">
                <Link to={`/emptyad/${a.id}`}>
                  <div><img id="Ad-image" src={ a.proImage}/></div>
                </Link>
              </span>
            )
          })
        }
      </Carousel>
    </div>
  );
}

export default Ad;