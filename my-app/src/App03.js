import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

export default function App() {
  return (
    <Carousel className="w-50">
      <Carousel.Item>
        <img className="d-block w-100" src="http://via.placeholder.com/1280x960" alt="First slide" />
        <Carousel.Caption>
          <h3>첫 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="http://via.placeholder.com/1280x960" alt="Second slide" />

        <Carousel.Caption>
          <h3>두 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="http://via.placeholder.com/1280x960" alt="Third slide" />

        <Carousel.Caption>
          <h3>세 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

/* HTML 태그에다가 정해진 클래스명을 쓰기만 하면, 부트스트랩의 CSS, JS가 적용된다!
=> 내가 직접 짠 것보다 훨씬 편하고 빠르게 웹사이트를 구성할 수 있다.

리액트 부트스트랩 : 부트스트랩인데, 리액트용으로 또 만든 것!
리액트의 경우, 정해진 클래스명도 쓰이긴 하지만, 기본적인 툴은 정해진 정해진 커포넌트 명으로 간다!

*/
