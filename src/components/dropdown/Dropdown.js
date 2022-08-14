import React, {useState} from 'react'
import {MdLanguage, MdArrowDropDown} from 'react-icons/md'
import {motion} from 'framer-motion'
const Dropdown = ({list, title}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div style={{ position: 'relative'}}>
        <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }} className="flex__between">
            <MdLanguage style={{ fontSize: 24, color: '#AA986F' }} /> &nbsp;
            <span>{title}</span>
            <motion.span className='flex__center' animate={{ rotate : isOpen ? 180 : 0 }}>
                <MdArrowDropDown style={{ fontSize: 24, color: '#AA986F' }} />
            </motion.span>
        </div>
     
        <motion.div transition={{ duration: 0.3 }} animate={{  y: isOpen ? 0 : -500}} style={{ position: 'absolute', width: 200 }} >
            <ul style={{ listStyle: 'none', background: 'white', borderRadius: 16 }}>
                {
                    list.map((l) => (
                        <li onClick={() => {
                            l.onClick();
                            setIsOpen(false)
                        }}>{l.text}</li>
                    ))
                }
            </ul>
        </motion.div>

    </div>
  )
}

export default Dropdown