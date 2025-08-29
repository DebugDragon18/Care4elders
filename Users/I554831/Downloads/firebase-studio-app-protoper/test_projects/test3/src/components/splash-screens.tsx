'use client';

import { useState, useEffect } from 'react';
import SplashScreenOne from './splash-screen-one';
import SplashScreenTwo from './splash-screen-two';

export default function SplashScreens() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStep(2);
    }, 2000); // Show first splash for 2 seconds

    const timer2 = setTimeout(() => {
      setStep(3);
    }, 4000); // Show second splash for 2 seconds (total 4s)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (step === 1) {
    return <SplashScreenOne />;
  }

  if (step === 2) {
    return <SplashScreenTwo />;
  }

  return null;
}
