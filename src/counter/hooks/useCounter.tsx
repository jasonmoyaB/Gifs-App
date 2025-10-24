import React, { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
  const [counter, setCounter] = useState(initialValue);
  // =======================================================
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubtract = () => {
    if (counter == 0) {
      return;
    }
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    //Props
    counter,
    //Methods
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
