import './Answers.scss'
import React, { useEffect, useState } from "react";

const Answers = ({ correctAnswer, incorrectAnswers }) => {
  const [answers, setAnswers] = useState([]);
  const [clickedAnswer, setClickedAnswer] = useState(null);
  const [correctRes, setCorrectRes] = useState(false);

  console.log(correctRes);

  useEffect(() => {
    let newArray = [];
    newArray.push(correctAnswer);
    // console.log(correctAnswer);

    for (let i = 0; i < incorrectAnswers.length; i++) {
      const incorrect = incorrectAnswers[i];
      newArray.push(incorrect);
      // console.log(incorrect);
    }
    // console.log(newArray);
    setAnswers(newArray.sort(() => 0.5 - Math.random()));
  }, []);

  const checkAnswer = (answer) => {
    if (!clickedAnswer) {
      if (answer === correctAnswer) {
        setCorrectRes(true);
        console.log("CORRECT");
      } else {
        setCorrectRes(false);
        console.log("ERROR");
      }
      setClickedAnswer(answer);
    }
  };

  return (
    <div className="respuestas">
      {answers.map((answer, index) => (
        <p
          className={
            answer === correctAnswer && clickedAnswer !== null
              ? "respuestas__correcta"
              : clickedAnswer !== correctAnswer && clickedAnswer !== null
              ? "respuestas__incorrecta"
              : "respuestas__res"
          }
          onClick={() => checkAnswer(answer)}
          key={index}
        >
          {answer}
        </p>
      ))}
    </div>
  );
};

export default Answers;
