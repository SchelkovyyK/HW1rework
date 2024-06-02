
import React from "react";
import s from "./ModalWrapper.module.scss";

const ModalWrapper = ({ children, onClick }) => {
  return (
    <div className={s.modalBack} onClick={onClick}>
      <div className={s.body}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
