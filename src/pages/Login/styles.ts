import styled from "styled-components";
import media from "styled-media-query";

export const backgroundContainer = styled.main`
  width: 100VW;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0A090E;
  color: white;
  font-family: 'Rubik';
`;

export const itemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #191C24;
  padding: 3em;
  border-radius: 2em;
  gap: 2em;
`;

export const logo = styled.img`
  width: 4rem;
`;

export const formLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const dataArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const inputLogin = styled.input`
  padding: 0.5em;
  background-color: #393E4B;
  border-radius: 0.5em;
  border: 1px solid #393E4B;
  color: white;
  :hover {
    border: 1px solid #B1B1B1;
  }
`;

export const labelLogin = styled.label`
  font-size: 16px;
`;

export const dangerText = styled.a`
  color: #E76464;
  font-size: 10px;
  :hover {
    color: white;
  }
`;

export const btnLogin = styled.button`
  padding: 0.5em;
  width: 40%;
  background-color: #F3802D;
  border-radius: 0.5em;
  border: 1px solid #F3802D;
  color: white;
  font-weight: bold;
  :hover {
    border: 1px solid #B1B1B1;
  }
`;