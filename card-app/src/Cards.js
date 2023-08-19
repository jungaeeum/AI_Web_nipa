import React from "react";
import { NavLink } from "react-router-dom";
import { Items, Item, Image } from "./styledComp";
import { useSelector } from "react-redux";

const Cards = () => {
  const contents = useSelector((state) => state.contents); // 배열 카드 항목으로 구성된 배열
  return (
    <Items>
      {contents.map((content, idx) => {
        return (
          <Item key={idx}>
            <NavLink to={content.path}>
              <Image url={content.imagePath}></Image>
            </NavLink>
            <h1 style={{ textAlign: "center" }}>{content.title}</h1>
          </Item>
        );
      })}
    </Items>
  );
};

export default Cards;
