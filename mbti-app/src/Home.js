import React from "react";
import { Title, Button, Container } from "./styledComponents";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>
        <h1>영화 속 내 부캐 찾기 (MBTI 테스트)</h1>
      </Title>
      <img src="/img/hero.gif" alt="main" style={{ width: 250, height: 200, borderRadius: 20 }}></img>
      <Button onClick={() => dispatch({ type: "BEGIN" })}>시작하기</Button>
      <p>MADE BY jaeum</p>
    </Container>
  );
};

export default Home;
