import React from "react";

const StepOne = (props) => {
  const { nextStep, backStep } = props;
  return (
    <div>
      StepOne <button onClick={nextStep}>next</button>
    </div>
  );
};

export default StepOne;
