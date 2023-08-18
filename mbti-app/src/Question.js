import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { QTitle, SelectedButton } from "./styledComponents";
import { questioncontent } from "./utilities/questioncontents";

const Question = (props) => {
  const questionCount = useSelector((state) => state.questionCount);
  const dispatch = useDispatch();
  return (
    <div>
      <QTitle>
        <h3>{questioncontent[questionCount].number}/14</h3>
        <h2>{questioncontent[questionCount].question}</h2>
      </QTitle>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <SelectedButton onClick={() => dispatch({ type: "INCREASE", quizType: questioncontent[questionCount].type })}>
          {questioncontent[questionCount].answer1}
        </SelectedButton>
        <SelectedButton onClick={() => dispatch({ type: "DECREASE", quizType: questioncontent[questionCount].type })}>
          {questioncontent[questionCount].answer2}
        </SelectedButton>
      </div>
    </div>
  );
};

export default Question;
