import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
`;

export const Character = styled.div<{
  size: number,
  x: number,
  y: number,
  sidePos: number,
}>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  background-image: url('src/assets/char.png');
  background-position: 0px ${props => props.sidePos}px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameBox = styled.div`
    width: max-content;
    background-color: #000;
    padding: 3px;
    border-radius: 5px;
    font-size: 10px;
    text-align: center;
    margin-top: -20px;
`;