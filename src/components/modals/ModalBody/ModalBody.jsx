import s from "./ModalBody.module.scss"
const ModalBody = ({ children }) => {
  return <div className={s.bodyEl}>{children}</div>;
};

export default ModalBody;
