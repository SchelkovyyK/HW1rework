import s from "./ModalFooter.module.scss"
const ModalFooter = ({
  firstText,
  secondaryText,
  firstClick,
  secondaryClick,
}) => {
  return (
    <div className={s.ButtonPlacement}>
      {firstText && <button onClick={firstClick} className={s.firstButton}>  {firstText}</button>}
      {secondaryText && <button onClick={secondaryClick} className={s.secondButton}>{secondaryText}</button>}
    </div>
  );
};

export default ModalFooter;
