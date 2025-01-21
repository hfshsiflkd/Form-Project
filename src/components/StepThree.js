import React from "react";
import { useState } from "react";
import Input from "./Input";
import ChevronRightIcon from "../svg/chevron_right";
const StepThree = ({ nextStep }) => {
  const [text, setText] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
            <div>
              <label
                htmlFor="birthDate"
                className="block text-sm font-medium text-gray-700"
              >
                Төрсөн огноо:
              </label>
              <input
                id="birthDate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-[416px] h-[300px] "
            />

            {image && (
              <div className="mt-4">
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            )}
          </div>
        </div>
        <button
          className="w-[416px] h-[44px] mt-[162px] flex p-[12px] justify-center items-center rounded bg-black text-white "
          onClick={nextStep}
        >
          {" "}
          Continue 3/3 <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default StepThree;
