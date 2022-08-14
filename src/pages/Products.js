import React, {useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import axiosInstance from '../axios'
import { useSelector } from 'react-redux'

const Products = () => {
  const [products, setProducts] = useState([])
  const {id} = useParams()

  const level = useSelector(state => state)

  useEffect(() => {
    axiosInstance.get(`products/category/${+id}`).then((res) => {
        console.log(res.data)
        setProducts(res.data)
    })
  }, [id])
  return (
    <div className="flex__center" style={{ flexDirection: 'column' }}>
        <h2>{level === 1 ? 'Products' : 'المنتجات'}</h2>
        <div className="row">
            {products.map((pr) => (
                <div className="col-4 col-sm-12 col-md-6 card">
                    <img src={pr.image} alt="Product" />
                    {
                        level === 1 ?                     
                        <div style={{ padding: 10 }} className="flex__between">
                            <h4>{pr.en_name}</h4>
                            <h4>{pr.price}&nbsp;L.E</h4>
                        </div> :
                        <div style={{ padding: 10 }} className="flex__between">
                            <h4>{pr.ar_name}</h4>
                            <h4>{pr.price}&nbsp;ج.م</h4>
                        </div>
                    }

                </div>
            ))}

        </div>
    </div>
  )
}

export default Products