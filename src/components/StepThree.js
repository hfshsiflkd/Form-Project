import React from "react";

const StepThree = (props) => {
  const { nextStep, backStep } = props;
  return (
    <div>
      Stet3 <button onClick={nextStep}>next</button>
      <button onClick={backStep}>back</button>{" "}
    </div>
  );
};

export default StepThree;
