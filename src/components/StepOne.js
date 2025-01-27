import React from "react";
import ChevronRightIcon from "../svg/chevron_right";
import Input from "./Input";
import { useEffect } from "react";

const StepOne = (props) => {
  const {
    nextStep,
    errors,
    formValue,
    handleError,
    setFormValue,
    setFormError,
    currentStep,
  } = props;

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setFormValue(storedData);
    }
  },[setFormValue]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    const validation = IsStepOneValid({ ...formValue, [name]: value });

    setFormError((prev) => ({
      ...prev,
      [name]: validation.errors[name] || "",
    }));
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = IsStepOneValid(formValue);
    if (isValid) {
      const localData = {
        ...formValue,
        currentStep: 1,
      };
      localStorage.setItem("formData", JSON.stringify(localData));

      nextStep();
    }
    handleError(errors);
  };

  const IsStepOneValid = (data) => {
    const { firstName, lastName, userName } = data;
    const errors = {};
    let isValid = true;

    const onlyLettersRegex = /^[A-Za-z]+$/;
    if (!firstName || firstName.length < 1) {
      errors.firstName = "First name must be at least 2 characters long.";
      isValid = false;
    } else if (!onlyLettersRegex.test(firstName)) {
      errors.firstName =
        "First name cannot contain special characters or numbers.";
      isValid = false;
    }
    if (!lastName || lastName.length < 1) {
      errors.lastName = "Last name must be at least 2 characters long.";
      isValid = false;
    } else if (!onlyLettersRegex.test(lastName)) {
      errors.lastName =
        "Last name cannot contain special characters or numbers.";
      isValid = false;
    }
    if (!userName || userName.length < 2) {
      errors.userName = "Username must be at least 2 characters long.";
      isValid = false;
    }

    return { isValid, errors };
  };

  return (
    <div
      className="h-screen w-full flex justify-center items-center"
      style={{ backgroundColor: "#F4F4F4", color: "#000" }}
    >
      <div className="h-auto w-[480px] p-[32px] bg-white rounded-lg">
        <div className="w-[416px] h-auto flex justify-between flex-col">
          <div className="w-[416px] h-[129px] flex flex-col justify-between items-start">
            <img
              src="./img/Logo.png"
              className="w-[60px] h-[60px]"
              alt="Logo"
            />
            <h1 className="text-customblack font-semibold leading-normal text-2xl">
              Join Us! 😎
            </h1>
            <p className="text-customGray font-normal leading-normal text-lg">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="w-[416px] h-auto mt-[20px] gap-[10px]  flex flex-col justify-between">
            <Input
              label="First Name"
              name="firstName"
              value={formValue.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              error={errors.firstName}
              required
            />
            <Input
              label="Last Name"
              name="lastName"
              value={formValue.lastName}
              onChange={handleChange}
              placeholder="Enter your Last name"
              error={errors.lastName}
              required
            />
            <Input
              label="Username"
              name="userName"
              value={formValue.userName}
              onChange={handleChange}
              placeholder="Enter your Username"
              error={errors.userName}
              required
            />
          </div>
        </div>

        <button
          className="w-[416px] h-[44px] mt-[162px] flex p-[12px] justify-center items-center rounded bg-black text-white"
          onClick={handleFormNextStep}
        >
          Continue 1/3 <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default StepOne;
