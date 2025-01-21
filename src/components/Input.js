import React, { useState } from "react";

const InputWithValidation = ({label,placeholder}) => {
  const [inputValue, setInputValue] = useState(""); // Input талбарын утга
  const [error, setError] = useState(false); // Алдааны төлөв

  const handleBlur = () => {
    if (inputValue.trim() === "") {
      setError(true); // Хоосон үед алдааны төлөвийг true болгоно
    } else {
      setError(false); // Зөв бөглөсөн үед алдааг арилгана
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() !== "") {
      setError(false); // Input талбарт утга оруулахад алдааг арилгана
    }
  };

  return (
    <div className="w-[416px] flex flex-col justify-between space-y-2">
      <label className="flex text-sm text-gray-700 font-semibold">
        {label} <span className="text-red-500 ml-1">*</span>
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded p-2 focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-blue-500"
        }`}
      />
      {error && (
        <p className="text-red-500 text-sm">This field is required.</p>
      )}
    </div>
  );
};

export default InputWithValidation;