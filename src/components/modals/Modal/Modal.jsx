import React from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ModalClose from "../ModalClose/ModalClose";
const Modal = ({ open, closeModal, children }) => {
  if (!open) return null;
  return (
    <ModalWrapper onClick={closeModal}>
      <ModalClose onClick={closeModal} />
      {children}
    </ModalWrapper>
  );
};

export default Modal;
