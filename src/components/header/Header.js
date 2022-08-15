import React from 'react'
import ellipse from '../../assets/imgs/Ellipse.svg'
import logo from '../../assets/imgs/logo.svg'
import cup from '../../assets/imgs/cup.png'
import {motion} from 'framer-motion'
import './header.css'
import { level } from '../../actions'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import Dropdown from '../dropdown/Dropdown'

const Header = () => {
  const lev = useSelector(state => state)
  const dispatch = useDispatch()
  const langs = [
    {
      text: "English",
      onClick: () => {
        dispatch(level(1))
      }
    },
    {
      text: "العربية",
      onClick: () => {
        dispatch(level(2))
      }
    }
  ]
  return (
    <>
    <div style={{ width: 100, position: 'fixed', top: 10, left: 10, zIndex: 1  }}>
        <Dropdown list={langs} title={lev === 1 ? 'English' : 'العربية'} />
    </div>
    <header className="flex__center">
        <motion.img style={{ position: 'absolute' }} animate={{ top: [-1200, -750, -850] }} src={ellipse} alt="ellipse" />
        <motion.img width="230" style={{ position: 'absolute' }} src={logo} alt="logo" transition={{ delay: 0.3 }} animate={{ y: [-100, 100, 60] }}/>
        <motion.h2  style={{ position: 'absolute' }} transition={{ delay: 0.3 }} animate={{ y: [-100, 130, 120] }}>{lev === 1 ? 'MENU' : 'القائمة'}</motion.h2>
        <motion.img initial={{ y: -100 }} style={{ position: 'absolute' }} src={cup} alt="logo" transition={{ delay: 0.2, repeat: Infinity, duration: 5 }} animate={{ y: [ 240, 260, 240] }}/>
    </header>
    </>
  )
}

export default Header