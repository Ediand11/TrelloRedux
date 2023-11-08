import { FC, ReactNode } from "react";
import { PopupContainer, PopupContent } from "./Popup.module";

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
