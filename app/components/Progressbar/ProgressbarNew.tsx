'use client'

import React, { useState, useEffect } from 'react';
import '../Progressbar/ProgressbarAppear.css';

export default function ProgressbarNew() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => {
        if (prevStep < 10) {
          return prevStep + 1;
        }
        clearInterval(interval);
        return prevStep;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='text-2xl'>Software Projects Now </div>
      <div className="progress-container">
        <ul className='progress-bar-new'>
          <li className={activeStep >= 1 ? 'active' : ''}>1. Meeting to understand your vision</li>
          <li className={activeStep >= 2 ? 'active' : ''}>2. Live virtual interactive coding session</li>
        </ul>
      </div>
    </div>
  );
}
