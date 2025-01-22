import React, { useState } from "react";

const InputWithValidation = ({ label, placeholder ,errors , fromValue , handleError , setFormValue  }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  // const handleError = () => {
  //   if (inputValue.trim() === "") {
  //     setError(true);
  //   } else {
  //     setError(false); 
  //   }
  // };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() !== "") {
      setError(false); 
    }
  };

  return (
    <div className="w-[416px] flex flex-col justify-between space-y-2">
      <label className="flex text-sm text-gray-700 font-semibold">
        {label} <span className="text-red-500 ml-1">*</span>
      </label>
      <input
        type="text"
        // value={inputValue}
        onChange={handleChange}
        // onBlur={handleError}
        placeholder={placeholder}
        className={`border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded p-2 focus:outline-none focus:ring-2 `}
      />
      {error && <p className="text-red-500 text-sm">This field is required.</p>}
    </div>
  );
};

export default InputWithValidation;
