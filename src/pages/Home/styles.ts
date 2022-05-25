import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Aside = styled.aside`
  flex: 7;
  background-color: #177E89;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong{
    font-size: 25px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p{
    color: #E5FCF5;
    letter-spacing: 0.3px;
    margin-bottom: 50px;
  }

  .aside-img{
    font-size: 220px;
    background-color: #F3A712;
    color: #E4572E;
    clip-path: circle();
    padding: 40px; 
  }
`;

export const Main = styled.main`
  flex: 8;
  background-color: #F3A712;
  display: flex;
  justify-content: center;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .user-img{
      font-size: 40px;
      color: #1E2019;
    }

    button{
      background-color: #E4572E;
      color: #fff;
      letter-spacing: .2px;
      border: none;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 3px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
      cursor: pointer;
    }

    .google-img{
      font-size: 20px;
      color: #fff;
    }
  }
`;