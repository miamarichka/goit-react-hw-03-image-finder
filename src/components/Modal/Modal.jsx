import { Overlay, ModalLay } from "./Modal.styled";

export const Modal = ({ image, onBackdropClick }) => {
  return (
    <Overlay onClick={onBackdropClick}>
      <ModalLay onClick={onBackdropClick}>
        <img src={image} alt="" />
      </ModalLay>
    </Overlay>
  );
};