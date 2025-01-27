"use client";
import React, { useState, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FinishedForm from "./FinishedForm";
import { AnimatePresence, motion } from "framer-motion";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateBirth: "",
    profileImg: "",
  });
  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateBirth: "",
    profileImg: "",
  });

  const handleError = (errors) => {
    setFormError((prev) => ({ ...prev, ...errors }));
  };

  const steps = [StepOne, StepTwo, StepThree, FinishedForm];
  const CurrentStepComponent = steps[currentStep];

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const backStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };
  useEffect(() => {
    let data = localStorage.getItem("formData");
    data = JSON.parse(data);
    console.log(data);
  }, []);

  const animationVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial="enter"
        animate="center"
        exit="exit"
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        <CurrentStepComponent
          nextStep={nextStep}
          backStep={backStep}
          handleError={handleError}
          errors={formError}
          formValue={formValue}
          setFormValue={setFormValue}
          setFormError={setFormError}
          currentStep={currentStep}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default MultiStepForm;
