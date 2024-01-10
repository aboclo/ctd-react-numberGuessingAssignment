import React, { useState } from "react";
import Button from "./Button";

function GuessControl(props) {
  const { onGuess } = props;
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = (event) => {
    event.preventDefault();
    const convertedGuess = Number(currentGuess);
    onGuess(convertedGuess);
    setCurrentGuess("");
  };

  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;
