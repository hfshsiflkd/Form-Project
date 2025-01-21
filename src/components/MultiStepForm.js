"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FinishedForm from "./FinishedForm";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [StepOne, StepTwo, StepThree, FinishedForm];

  const CurrentStepComponent = steps[currentStep];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const backStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div>
      <CurrentStepComponent nextStep={nextStep} backStep={backStep} />
    </div>
  );
};

export default MultiStepForm;