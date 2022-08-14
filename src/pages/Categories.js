import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import axiosInstance from '../axios'
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'
const Categories = () => {

  const [categories, setCategories] = useState([])
  const level = useSelector(state => state)
  const navigate = useNavigate()

  useEffect(() => {
    if(level === 1){
        axiosInstance.get('categories/en').then((res) => setCategories(res.data))
    } else if (level === 2) {
        axiosInstance.get('categories/ar').then((res) => setCategories(res.data))
    }
  }, [level])
  return (
    <div className="flex__center" style={{ flexDirection: 'column' }}>
        <h2>{level === 1 ? 'Categories' : 'الأصناف'}</h2>
        <div className="row">
            {
                categories.length > 0 ?
                categories.map((cat) => (
                    <div className="col-4 col-sm-12 flex__center" style={{ width: 300, flexDirection: 'column', cursor: 'pointer' }}>
                        <motion.img whileHover={{
                            scale: 1.02
                        }} src={cat.image} alt="catImage" onClick={() => navigate(`/products/${cat.id}`)} style={{ borderRadius: 16, width: 300, boxShadow: '0px 0 27px 0px #00000063' }}/>
                        <h3>{cat.ar_name ? cat.ar_name : cat.en_name}</h3>
                    </div>
                )) :
                <motion.div transition={{ delay: 0.8 }} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ width: '100%', height: '40vh' }} className="flex__center">
                <p>لا يوجد اصناف الان</p>
            </motion.div>
            }
        </div>
    </div>
  )
}

export default Categories