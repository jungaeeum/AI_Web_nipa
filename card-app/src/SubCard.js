import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Items, SubItem, Image, Button } from "./styledComp";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SubCards = (props) => {
  const contents = useSelector((state) => state.contents); // 배열 카드 항목으로 구성된 배열
  const navigate = useNavigate();
  const subCards = contents[props.subCards].detail.subCards;

  console.log(subCards);

  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
      <Items>
        {subCards.map((content, idx) => {
          return (
            <SubItem key={idx}>
              <NavLink to={content.path}>
                <Image url={content.imagePath}></Image>
              </NavLink>
              <h3 style={{ textAlign: "center", backgroundColor: "black", borderRadius: "20px" }}>{content.title}</h3>
            </SubItem>
          );
        })}
      </Items>
    </>
  );
};

export default SubCards;
