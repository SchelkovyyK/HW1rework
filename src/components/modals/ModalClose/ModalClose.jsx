import s from "./ModalClose.module.scss"
const ModalClose = ({ onClick }) => {
  return (
    <div className={s.divPlacemet}>
      <button onClick={onClick}>X</button>
    </div>
  );
};

export default ModalClose;
