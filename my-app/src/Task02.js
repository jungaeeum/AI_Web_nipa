import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

import axios from "axios";

export default function App() {
  const [dogImages, setDogImages] = useState(null);

  return (
    <>
      <button
        onClick={async () => {
          const response = await axios.get("https://dog.ceo/api/breeds/image/random/3");
          setDogImages(response.data.message);
        }}>
        이미지 가져오기
      </button>
      {dogImages ? (
        <Carousel className="w-50">
          {/* w-50 : 너비는 50% */}
          <Carousel.Item>
            {/* d-block : 디스플레이 속성이 블록 */}
            <img className="d-block w-100" src={dogImages[0]} alt="First slide" />
            <Carousel.Caption>
              <h3>첫 번째 슬라이드</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={dogImages[1]} alt="Second slide" />

            <Carousel.Caption>
              <h3>두 번째 슬라이드</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={dogImages[2]} alt="Third slide" />

            <Carousel.Caption>
              <h3>세 번째 슬라이드</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : null}
    </>
  );
}
