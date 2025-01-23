import React from "react";
import ChevronRightIcon from "../svg/chevron_right";
import ChevronLefttIcon from "@/svg/ChevronLefttIcon";

const StepTwo = (props) => {
  const {
    nextStep,
    errors,
    formValue,
    handleError,
    setFormValue,
    setFormError,
    backStep,
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
    const { email, phoneNumber, password , confirmPassword } = data;
    const errors = {};
    let isValid = true;
    const emailChecker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonecheker = /^(\+?\d{1,3})?[-.\s]?\d{7,14}$/;

    if (!email || email.length < 6) {
      errors.email = "Please provide a valid email address.";
      isValid = false;
    } else if (!emailChecker.test(email)) {
      errors.email = "Invalid email format.";
      isValid = false;
    }
    if (!phoneNumber || phoneNumber.length < 8) {
      errors.phoneNumber = "Please enter a valid phone number.";
      isValid = false;
    } else if (!phonecheker.test(phoneNumber)) {
      errors.phoneNumber = "Invalid Phone Number format.";
      isValid = false;
    }
    const minLength = 8;
    const maxLength = 20;
    const uppercaseChecker = /[A-Z]/; 
    const lowercaseChecker = /[a-z]/; 
    const numberChecker = /\d/; 

    if (!password || password.length < minLength) {
      errors.password = `Password must be at least ${minLength} characters long.`;
      isValid = false;
    } else if (password.length > maxLength) {
      errors.password = `Password must not exceed ${maxLength} characters.`;
      isValid = false;
    } else if (!uppercaseChecker.test(password)) {
      errors.password = "Password must include at least one uppercase letter.";
      isValid = false;
    } else if (!lowercaseChecker.test(password)) {
      errors.password = "Password must include at least one lowercase letter.";
      isValid = false;
    } else if (!numberChecker.test(password)) {
      errors.password = "Password must include at least one number.";
      isValid = false;
    } 
    if (password && confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match. Please try again";
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
        <div className=" w-[416px] flex justify-between flex-col">
          <div className=" w-[416px] h-[129px] flex flex-col justify-between items-start ">
            <img src="./img/Logo.png" className="w-[60px] h-[60px]" />
            <h1 className="text-customblack font-semibold leading-normal text-2xl">
              Join Us! 😎
            </h1>
            <p className="text-customGray font-normal leading-normal text-lg">
              Please provide all current information accurately.
            </p>
          </div>
          <div className=" w-[416px] h-[309px] flex flex-col justify-between mt-[30px]">
            <div className="w-[416px] flex flex-col justify-between space-y-2">
              <label className="flex text-sm text-gray-700 font-semibold">
                Email <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
                placeholder="Enter your first name"
                className={`border ${
                  errors?.email ? "border-red-500" : "border-gray-300"
                } rounded p-2 focus:outline-none focus:ring-2`}
              />
              {errors?.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="w-[416px] flex flex-col justify-between space-y-2">
              <label className="flex text-sm text-gray-700 font-semibold">
                PhoneNumber <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="phoneNumber"
                name="phoneNumber"
                value={formValue.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your first name"
                className={`border ${
                  errors?.phoneNumber ? "border-red-500" : "border-gray-300"
                } rounded p-2 focus:outline-none focus:ring-2`}
              />
              {errors?.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
              )}
            </div>
            <div className="w-[416px] flex flex-col justify-between space-y-2">
              <label className="flex text-sm text-gray-700 font-semibold">
                Password <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formValue.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className={`border ${
                  errors?.password ? "border-red-500" : "border-gray-300"
                } rounded p-2 focus:outline-none focus:ring-2`}
              />
              {errors?.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="w-[416px] flex flex-col justify-between space-y-2">
              <label className="flex text-sm text-gray-700 font-semibold">
              Confirm Password <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="Password"
                name="confirmPassword"
                value={formValue.confirmPassword}
                onChange={handleChange}
                placeholder="Enter your Password"
                className={`border ${
                  errors?.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded p-2 focus:outline-none focus:ring-2`}
              />
              {errors?.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
        </div>

        <div className="w-[416px] h-[44px] mt-[82px] flex justify-between">
          <button
            className="w-[128px] h-[44px]  flex p-[12px] justify-center items-center rounded bg-white text-black border-blue hover:opacity-75 border border-customborder  "
            onClick={backStep}
          >
            <ChevronLefttIcon /> Back
          </button>
          <button
            className="w-[280px] h-[44px]  flex p-[12px] justify-center items-center rounded bg-black text-white hover:opacity-75 "
            onClick={handleFormNextStep}
          >
            Continue 2/3 <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
