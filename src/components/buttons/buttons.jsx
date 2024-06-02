import React from "react";
const Button = ({type, classNames, onClick, children}) => {
  return (
      <button type={type} className={classNames} onClick={onClick}>
        {children}
      </button>
  );
};

export default Button;
