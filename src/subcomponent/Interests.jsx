import React from 'react';
import Polygon from '../assets/Polygon.png'

const InterestsComp = ({ interests }) => {
  return (
    <>
      <div className="interestsList">
        <ul>
          {interests.map((interest, index) => (
            <li key={index} className='flex pb-2 font-body'>
              <img className=' pr-3' src={Polygon} alt="" />
              <p>{interest.data}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InterestsComp;
