import React from 'react'

export const ButtonBorder = ({ fontWeight, padX, padY, flex, icon, text, onclick }) => {
  return (
    <button
      onClick={onclick}
      className={`border-[1px] border-neutral-300 rounded-lg text-paragraph4 text-neutral-600   ${fontWeight} ${padX} ${padY} ${flex} ${icon && "flex flex-row gap-2 items-center"
        }`}
    >
      {text} {icon}
    </button>
  )
}

export default ButtonBorder