import { useState } from "react";
import Input from "./Input";
import ChevronRightIcon from "@/svg/chevron_right";
import ChevronLefttIcon from "@/svg/ChevronLefttIcon";

const StepThree = (props) => {
  const {
    nextStep,
    errors,
    formValue,
    handleError,
    setFormValue,
    setFormError,
    backStep,
  } = props;
  const [SelectedImg, setSelectedImg] = useState();

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
        currentStep:1
      }
      localStorage.setItem('formData', JSON.stringify(localData))
    
      
      nextStep();
    } else {
      handleError(errors);
    }
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setSelectedImg(fileReader.result);
    };
    fileReader.readAsDataURL(file);

    setFormValue((prev) => ({
      ...prev,
      profileImg: file,
    }));
  };

  const IsStepOneValid = (data) => {
    const { dateBirth } = data;
    const errors = {};
    let isValid = true;

    const today = new Date();
    const birthDate = new Date(dateBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (!dateBirth || dateBirth.length < 1) {
      errors.dateBirth = "Please select a date.";
      isValid = false;
    } else if (
      age > 18 ||
      (age === 18 &&
        (monthDifference > 0 || (monthDifference === 0 && dayDifference >= 0)))
    ) {
      isValid = true;
    } else {
      errors.dateBirth = "'Уучлаарай, та 18-аас доош настай байна.'";
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
            <Input
              label="dateBirth"
              name="dateBirth"
              value={formValue.dateBirth}
              onChange={handleChange}
              placeholder="**/**/**"
              error={errors.dateBirth}
              type="date"
              required
              defaultValue="2007-01-01"
            />
            <div className="w-[416px] flex flex-col justify-between space-y-2">
              <label className="flex text-sm text-gray-700 font-semibold">
                Profile img
                 <span className="text-red-500 ml-1">*</span>
              </label>
              <input
              name="profileImg"
                type="file"
                accept="image/*"
          
                onChange={handleImageUpload}
                placeholder="select img"
                className={`border ${
                  errors.length ? "border-red-500" : "border-gray-300"
                } rounded p-2 focus:outline-none focus:ring-2`}
              />
              {errors.profileImg.length && <p className="text-red-500 text-sm">{errors.profileImg}</p>}
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
            Continue 3/3 <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
