"use client"

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FinshedForm from "./FinishedForm";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const Steps = [StepOne,StepTwo,StepThree,FinshedForm][currentStep]

  const nextStep = () => {
    if (currentStep !== 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
    
    
  };

  const backStep = () => {
    if (currentStep !== 0) {
    setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  

  return (
    <div>
     <Steps nextStep = {nextStep} backStep={backStep} />
    </div>
  );
};

export default MultiStepForm;
