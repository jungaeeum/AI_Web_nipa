import styled from "styled-components";

// 상단에 제목이 표시되는 바
export const Menu = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100px;
  font-size: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.2rem 0;
`;

//카드 여러개가 포함되는 컨테이너 블록
export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;

  @media all and (max-width: 1500px) {
    width: 80%;
  }
  @media all and (max-width: 1000px) {
    width: 100%;
  }
`;

//카드 한장
// 스타일드컴포넌트에서 &의 의미 : 자기 자신

export const Item = styled.div`
  cursor: pointer;
  width: 20%;
  height: 500px;
  margin: 2%;
  border-radius: 20px;
  color: #ffffff;
  background-color: #393939;
  overflow: hidden;
  &:hover {
    transform: translate(0, -20px);
  }
  @media all and (max-width: 800px) {
    width: 46%;
  }
  @media all and (max-width: 500px) {
    width: 98%;
  }
`;

export const SubItem = styled.div`
  cursor: pointer;
  width: 21%;
  height: 420px;
  margin: 2%;
  border-radius: 20px;
  color: #ffffff;
  background-color: #393939;

  &:hover {
    transform: translate(0, -20px);
  }
  @media all and (max-width: 800px) {
    width: 46%;
  }
  @media all and (max-width: 500px) {
    width: 98%;
  }
`;

// 카드 내부에 이미지를 표시할 필요가 있을 때 사용하는 태그
export const Image = styled.div`
  height: 410px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  @media all and (max-width: 500px) {
    background-size: 100% 100%;
  }
`;
export const ColorBox = styled.div`
  height: 250px;
  background-color: ${(props) => props.color};
  background-repeat: no-repeat;
  background-size: cover;
  @media all and (max-width: 500px) {
    background-size: 100% 100%;
  }
`;

export const Button = styled.button`
  margin: 3px 120px;
  width: 5%;
  background-color: transparent;
  color: white;
  font-size: 22px;
`;

export const DetailBox = styled.div`
  background-color: grey;
  opacity: 0.8;
  margin: 2rem;
  padding: 2rem;
  border-radius: 10px;
  @media all and (max-width: 500px) {
    background-size: 100% 100%;
  }
`;
