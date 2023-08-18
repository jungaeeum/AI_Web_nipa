import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { QTitle, Button } from "./styledComponents";
import { resultcontent } from "./utilities/resultcontents";
import "./App.css";

const Result = () => {
  const dispatch = useDispatch();
  const ePoint = useSelector((state) => state.ePoint);
  const sPoint = useSelector((state) => state.sPoint);
  const tPoint = useSelector((state) => state.tPoint);
  const jPoint = useSelector((state) => state.jPoint);

  const [resultCharacter, setCharacter] = useState({});

  useEffect(() => {
    let result = "";
    result += ePoint > 0 ? "E" : "I";
    result += sPoint > 0 ? "S" : "N";
    result += tPoint > 0 ? "T" : "F";
    result += jPoint > 0 ? "J" : "P";

    const finalResult = resultcontent.filter((content) => {
      return content.type === result;
    });
    setCharacter(...finalResult);
  }, [ePoint, jPoint, sPoint, tPoint]);

  return (
    <div style={{ padding: "1.2rem", marginTop: 800 }}>
      <QTitle>
        <h2>{resultCharacter.type}</h2>
        <p className="result_title">{resultCharacter.title}</p>
        <div className="result_apply">
          <img src="/img/main.gif" alt="부캐" style={{ width: 60, borderRadius: "50%", marginRight: 10 }} />
          <span style={{ color: "purple" }}>당신의 부캐는..</span>
        </div>
        <img src={resultCharacter.imagePath} alt="result_img" className="result_img"></img>
        {resultCharacter.character &&
          resultCharacter.character.map((content, idx) => {
            return <p key={idx}>{content.name}</p>;
          })}
        <p>
          .<br />.<br />.<br />
        </p>
        <p className="result_description">{resultCharacter.description}</p>
      </QTitle>
      <Button onClick={() => dispatch({ type: "RESET" })}>다시 하기</Button>
    </div>
  );
};

export default Result;
