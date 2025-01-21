import React from "react";

const StepTwo = (props) => {
  const { nextStep, backStep } = props;
  return (
    <div>
      Step2 <button onClick={nextStep}>next</button>
      <button onClick={backStep}>back</button>{" "}
    </div>
  );
};

export default StepTwo;
