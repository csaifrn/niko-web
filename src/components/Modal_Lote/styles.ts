import styled from "styled-components";

const areaClick = styled.div`
  color: white;
  z-index: 9999990;
  width: 60%;
  height: 70%;
  padding: 2em;
  background: #393e4b;
  transition: transform 0.9s ease-in-out;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
`;

const blur = styled.div`
  background-color: rgb(0,0,0, 0.5);
  position: fixed;
  color: white;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
`;

const Categoria = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const CategoriaTextDiv = styled.div`
  height: 2em;
  width: auto;
  background-color: #191c24;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: "white";
    margin-bottom: "0";
  }
`;

export { areaClick, Categoria, CategoriaTextDiv, blur };
