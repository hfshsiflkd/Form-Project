import React from "react";

const FinshedForm = () => {
  return (
    <div
      className="h-screen w-full flex justify-center items-center"
      style={{ backgroundColor: "#F4F4F4", color: "#000" }}
    >
      <div className=" w-[480px] p-[32px] bg-white rounded-lg">
        <div className=" w-[416px] h-[129px] flex justify-between flex-col">
          <div className=" w-[416px] h-[129px] flex flex-col justify-between items-start ">
            <img src="./img/Logo.png" className="w-[60px] h-[60px]" />
            <h1 className="text-customblack font-semibold leading-normal text-2xl">
            You're All Set 🔥
            </h1>
            <p className="text-customGray font-normal leading-normal text-lg">
            We have received your submission. Thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinshedForm;
