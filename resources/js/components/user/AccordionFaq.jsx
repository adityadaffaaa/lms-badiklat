import { React, useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const AccordionFaq = ({ title, summary }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <button onClick={handleToggle} className="flex flex-col shadow-defaultShadow px-6 py-4 h-auto transition-default rounded-lg gap-4">
      <div className="flex flex-row items-center justify-between w-full">
        <h5 className="text-heading5 text-neutral-500">{title}</h5>
        <KeyboardArrowRightIcon className={`text-skyBlue70 transition-default ${open ? "rotate-90" : "rotate-0"}`} />
      </div>
      <p className={`text-paragraph2 text-neutral-500 text-start leading-6 ${open ? "block" : "hidden"}`}>{summary}</p>
    </button>
  )
}

export default AccordionFaq