import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./styledComp";
import Cards from "./Cards";
import Detail from "./Detail";
import SubCards from "./SubCard";
import { useSelector } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Menu>
        <img src="/img/white-logo-removebg-preview.png" alt="logo" style={{ width: 120, height: 100 }}></img>
        <h2 style={{ margin: 0 }}>일곱 성인의 소환</h2>
      </Menu>
      <Routes>
        {useSelector((state) => state.contents).map((content, idx) => {
          return <Route path={content.path} key={idx} element={<SubCards subCards={idx} />} />;
        })}

        {useSelector((state) => state.contents).map((content, idx) => {
          return content.detail.subCards.map((subCard, subIdx) => (
            <Route
              path={subCard.path}
              key={subIdx}
              element={<Detail content={subCard} />} // 서브 카드의 전체 정보를 전달
            />
          ));
        })}

        <Route path="/" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
