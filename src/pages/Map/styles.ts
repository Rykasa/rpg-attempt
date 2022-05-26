import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background-color: #27282a;
  height: 100vh;
  display: grid;
`;

export const Map = styled.div`
  width: 480px;
  height: 480px;
  background-image: url('src/assets/map.png');
  margin: auto;
  position: relative;
`;

export const SignOutButton = styled.button`
  position: absolute;
  top: 20px;
  right: 35px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity .3s;

  &:hover{
    opacity: 1;
  }

  .signOut-btn{
    font-size: 40px;
    color: #fff;
  }
`;