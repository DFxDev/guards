import React, { useEffect, useState }  from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './custom.css'


const ProgressBar = ({percentage}) => {


  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: '16px',
          rotation: 0.25,
          pathTransitionDuration: 0.5,
          pathColor: `rgba(249, 190, 14, 0.8, ${percentage / 100})`,
          trailColor: '#f9be0ecc',
          backgroundColor: '#f9be0ecc',
          textColor: '#060F17BF',
        })}
      />
    </div>
  );
};


export default ProgressBar;
