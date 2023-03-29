import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalLay } from "./Modal.styled";

const modalRoot = document.querySelector('#modal')

export const Modal = ({ image, onBackdropClick }) => {

  useEffect(() => {
    window.addEventListener('click', backDropHandler)

    return () => {
      window.removeEventListener('click', backDropHandler)
    }
  }, [])


  const backDropHandler = (e) => {
    console.log(e.target)
    if (e.target.className.includes('overlay')) {
      onBackdropClick()
    }
  }

  return (
    createPortal(
      <Overlay className="overlay">
        <ModalLay>
          <img src={image} alt="" />
        </ModalLay>
      </Overlay>, modalRoot)
  );
};