import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // useNavigate : 컴포넌트 이동 기록을 다루는 함수
import { Button, DetailBox } from "./styledComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//props.content
const Detail = (props) => {
  const navigate = useNavigate();
  const { name, sub, description, imagePath, type, world } = props.content.detailText;

  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
      <DetailBox>
        <img src={imagePath} alt="img" style={{ width: 120, height: 220 }} />
        <span
          style={{
            backgroundColor: "#F4F1D0",
            fontWeight: "bold",
            borderRadius: "40px",
            fontSize: 14,
            padding: "0 10px",
            margin: "20px 5px 0 10px",
          }}>
          {type}
        </span>
        <span
          style={{
            backgroundColor: "#559282",
            color: "white",
            borderRadius: "40px",
            fontSize: 14,
            padding: "0 10px",
            marginBottom: "20px",
          }}>
          {world}
        </span>
        <h2>{name}</h2>
        <table>
          <tr>
            <th style={{ width: 100, border: "2px solid #ffffff", backgroundColor: "#333333", color: "white" }}>스토리</th>
            <td style={{ padding: "1rem", fontWeight: "600" }}>{sub}</td>
          </tr>
          <tr>
            <th style={{ width: 100, border: "2px solid #ffffff", backgroundColor: "#2F3030", color: "white" }}>특성</th>
            <td style={{ whiteSpace: "pre-line", padding: "1rem", fontWeight: "600" }}>{description}</td>
          </tr>
        </table>
        {/* 다른 내용들을 렌더링하는 부분 */}
      </DetailBox>
    </>
  );
};

export default Detail;
