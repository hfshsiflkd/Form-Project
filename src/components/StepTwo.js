import React from "react";
import ChevronRightIcon from "../svg/chevron_right";
import ChevronLefttIcon from "@/svg/ChevronLefttIcon";
import Input from "./Input";

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
    const { email, phoneNumber, password, confirmPassword } = data;
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
        <div className=" w-[416px] h-auto flex justify-between flex-col">
          <div className=" w-[416px] h-[129px] flex flex-col justify-between items-start ">
            <img src="./img/Logo.png" className="w-[60px] h-[60px]" />
            <h1 className="text-customblack font-semibold leading-normal text-2xl">
              Join Us! 😎
            </h1>
            <p className="text-customGray font-normal leading-normal text-lg">
              Please provide all current information accurately.
            </p>
          </div>
          <div className=" w-[416px] h-auto gap-[5px] flex flex-col justify-between mt-[30px]">
            <Input
              label="Email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              error={errors.email}
              required
            />
            <Input
              label="PhoneNumber"
              name="phoneNumber"
              value={formValue.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your PhoneNumber"
              error={errors.phoneNumber}
              required
            />
            <Input
              label="Password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              error={errors.password}
              required
              type="password"
            />
            <Input
              label="confirmPassword"
              name="confirmPassword"
              value={formValue.confirmPassword}
              onChange={handleChange}
              placeholder="Enter your ConfirmPassword"
              error={errors.confirmPassword}
              required
              type="password"
            />
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
