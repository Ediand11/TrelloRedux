import React, { Children, FC, ReactNode } from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

type PopupProps = {
  children: ReactNode;
  setVisible: (id: boolean) => void;
};

const Popup: FC<PopupProps> = ({ children, setVisible }) => {
  return (
    <PopupContainer onClick={() => setVisible(false)}>
      <PopupContent onClick={(e) => e.stopPropagation()}>{children}</PopupContent>
    </PopupContainer>
  );
};

export default Popup;
