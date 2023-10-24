import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;

  background-color: #f4f5f7;
  border-radius: 12px;
  max-width: 300px;
  width: 100%;
  min-width: 150px;

  height: 100%;
  border: 1px solid gray;
  margin-right: 10px;
`;

export const Input = styled.input`
  width: 100%;

  border-radius: 12px;
  margin: 0px;
  padding: 8px;
  border: none;
  background-color: #f4f5f7;
  outline: none;
`;

export const Header = styled.div`
  display: flex;
  max-height: 50px;
  width: 100%;
  background-color: blue;

  padding: 10px;
  margin-bottom: 10px;
`;
