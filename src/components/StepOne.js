import React from "react";

const StepOne = (props) => {
  const { nextStep, backStep } = props;
  return (
    <div
      className="h-screen w-full flex justify-center items-center"
      style={{ backgroundColor: "#F4F4F4", color: "#000" }}
    >
      <div className="h-auto w-[480px] p-[32px] bg-white">
        <div className="border-[1px] border-red-500 w-[416px] h-[385px] flex justify-between flex-col">
          <div className="border-[1px] border-red-500 w-[416px] h-[129px]">
            <img src="./img/Logo.png" className="w-[60xp] h-[60px]" />
            <h1 className="text-customblack font-semibold">Join Us! 😎</h1>
            <p>Please provide all current information accurately.</p>
          </div>
          <div className="border-[1px] border-red-500 w-[416px] h-[228px]"></div>
        </div>
        <button className="border-[1px] border-red-500 w-[416px] h-[44px] mt-[162px]"></button>
      </div>
    </div>
  );
};

export default StepOne;
