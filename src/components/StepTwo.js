import React from "react";
import ChevronRightIcon from "../svg/chevron_right";
import Input from "./Input";
import ChevronLefttIcon from "@/svg/ChevronLefttIcon";

const StepTwo = (props) => {
  const { nextStep, backStep } = props;
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
            <Input label={"Email"} placeholder={"Your Email"} />
            <Input label={"Phone number"} placeholder={"Your Phone number"} />
            <Input label={"Password"} placeholder={"Your Password"} />
            <Input
              label={"Confirm password"}
              placeholder={"Confirm password"}
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
            onClick={nextStep}
          >
            Continue 2/3 <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
