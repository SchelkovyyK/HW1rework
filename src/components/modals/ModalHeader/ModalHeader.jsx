import s from "./ModalHeader.module.scss"
const ModalHeader = ({ children }) => {
  return <div className={s.headerEl}>{children}</div>;
};

export default ModalHeader;
