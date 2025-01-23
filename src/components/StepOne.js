import React from "react";
import ChevronRightIcon from "../svg/chevron_right";
import Input from "./Input";

const StepOne = (props) => {
  const {
    nextStep,
    errors,
    formValue,
    handleError,
    setFormValue,
    setFormError,
  } = props;

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
      nextStep();
    } else {
      handleError(errors);
    }
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
      errors.firstName = "First name cannot contain special characters or numbers.";
      isValid = false;
    }
    if (!lastName || lastName.length < 1) {
      errors.lastName = "Last name must be at least 2 characters long.";
      isValid = false;
    } else if (!onlyLettersRegex.test(lastName)) {
      errors.lastName = "Last name cannot contain special characters or numbers.";
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
        <div className="w-[416px] h-[385px] flex justify-between flex-col">
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
          <div className="w-[416px] h-[228px] flex flex-col justify-between">
            <div className="w-[416px] flex flex-col justify-between space-y-2">
              <label className="flex text-sm text-gray-700 font-semibold">
                First Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formValue.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className={`border ${
                  errors?.firstName ? "border-red-500" : "border-gray-300"
                } rounded p-2 focus:outline-none focus:ring-2`}
              />
              {errors?.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="w-[416px] flex flex-col justify-between space-y-2">
              <label className="flex text-sm text-gray-700 font-semibold">
                Last Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formValue.lastName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className={`border ${
                  errors?.lastName ? "border-red-500" : "border-gray-300"
                } rounded p-2 focus:outline-none focus:ring-2`}
              />
              {errors?.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
            <div className="w-[416px] flex flex-col justify-between space-y-2">
              <label className="flex text-sm text-gray-700 font-semibold">
                UserName <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="userName"
                value={formValue.userName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className={`border ${
                  errors?.userName ? "border-red-500" : "border-gray-300"
                } rounded p-2 focus:outline-none focus:ring-2`}
              />
              {errors?.userName && (
                <p className="text-red-500 text-sm">{errors.userName}</p>
              )}
            </div>
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
