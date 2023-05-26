import React from "react";

export const ButtonGradient = ({ text, onclick, padX, padY, icon, fontWeight, flex }) => {
  return (
    <button
      onClick={onclick}
      className={`btn-gradient-default rounded-lg text-paragraph4 text-neutral-50 ${fontWeight} ${padX} ${padY} ${flex} ${icon && "flex flex-row gap-2 items-center"
        }`}
    >
      {text} {icon}
    </button>
  );
};

export default ButtonGradient;
