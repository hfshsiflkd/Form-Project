
import React from "react";
import ChevronRightIcon from "../svg/chevron_right"
import Input from "./Input";

const StepOne = (props) => {
  const { nextStep, errors , fromValue , handleError , setFormValue  } = props;
  const error =false ;
  const handleChange = (event)=> {

  }
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
          <div className=" w-[416px] h-[228px] flex flex-col justify-between">
              <Input label={"First Name"} placeholder={"Your First Name"} />
            <Input label={"Last Name"} placeholder={"Your Last Name"} />
            <Input label={"Username"} placeholder={"Your Username"} />
          </div>
        </div>
        <button className="w-[416px] h-[44px] mt-[162px] flex p-[12px] justify-center items-center rounded bg-black text-white " 
        onClick={nextStep}
        
        > Continue 1/3 <ChevronRightIcon/></button>
      </div>
    </div>
  );
};

export default StepOne;
