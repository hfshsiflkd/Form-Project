import React, { useState } from "react";

const InputWithValidation = ({ props }) => {
  const { formValue, handleChange, errors } = props;

  return (
    <div className="w-[416px] flex flex-col justify-between space-y-2">
      <label className="flex text-sm text-gray-700 font-semibold">
        First Name <span className="text-red-500 ml-1">*</span>
      </label>
      <input
        type="text"
        name="firstName"
        value={formValue.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
        className={`border ${
          errors?.firstName ? "border-red-500" : "border-gray-300"
        } rounded p-2 focus:outline-none focus:ring-2`}
      />
      {errors?.firstName && (
        <p className="text-red-500 text-sm">{errors.firstName}</p>
      )}
    </div>
  );
};

export default InputWithValidation;
