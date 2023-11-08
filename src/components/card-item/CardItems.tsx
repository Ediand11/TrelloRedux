import styled from "styled-components";

export const CardTextArea = styled.textarea`
  height: auto;
  display: block;
  max-width: 100%;
  width: 300px;
  margin: 8px;
  padding: 8px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  white-space: pre-wrap;
  overflow: auto;
  font: inherit;
  resize: none;
`;

export const CardSpan = styled.span`
  max-width: 300px;
  width: 100%;
  margin: 8px;
  padding: 8px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  white-space: pre-wrap;
  overflow: auto;
  overflow-wrap: break-word;
`;
