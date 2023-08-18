import styled from "styled-components";

export const Title = styled.div`
  min-height: 150px;
  color: white;
`;

export const Button = styled.button`
  width: 160px;
  height: 60px;
  font-size: 18px;
  border-radius: 20px;
  border: none;
  color: white;
  background-color: darkblue;
  margin: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(20, 20, 20, 0.1) 10%, rgba(20, 20, 20, 0.7) 70%, rgba(20, 20, 20, 1)), url(/img/background.png);
  background-size: cover;
`;

export const QTitle = styled.div`
  min-height: 150px;
  color: black;
`;

export const SelectedButton = styled.button`
  width: 350px;
  height: 160px;
  font-size: 18px;
  border-radius: 20px;
  border: 3px solid brown;
  color: black;
  background-color: white;
  margin: 20px;
`;
