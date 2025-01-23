import { useState } from "react";
import Input from "./Input";
import ChevronRightIcon from "@/svg/chevron_right";
import ChevronLefttIcon from "@/svg/ChevronLefttIcon";

const StepThree = ({ nextStep, backStep }) => {
  return (
    <div
      className="h-screen w-full flex justify-center items-center"
      style={{ backgroundColor: "#F4F4F4", color: "#000" }}
    >
      <div className="h-auto w-[480px] p-[32px] bg-white rounded-lg">
        <div className=" w-[416px] h-[385px] flex justify-between flex-col">
          <div className=" w-[416px] h-[129px] flex flex-col justify-between items-start ">
            <img src="./img/Logo.png" className="w-[60px] h-[60px]" />
            <h1 className="text-customblack font-semibold leading-normal text-2xl">
              Join Us! 😎
            </h1>
            <p className="text-customGray font-normal leading-normal text-lg">
              Please provide all current information accurately.
            </p>
          </div>
          <div className=" w-[416px] h-[228px] flex flex-col justify-between"></div>
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
            Continue 3/3 <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
