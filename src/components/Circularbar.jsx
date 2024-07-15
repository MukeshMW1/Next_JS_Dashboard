'use client'
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Circularbar = ({ percentage }) => {
  return (
    <div style={{ width: '30px', height: '30px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: '#FFFFFF',
          pathColor: '#007BFF',
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  );
};






