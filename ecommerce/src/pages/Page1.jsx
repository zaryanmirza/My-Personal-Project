import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../data'

const Page1 = () => {

  return (
    <div className='container'>
        <h1 className='mt-4 mb-4 text-center'>Products</h1>
        <div className="row gap-4">
            {
                products.map((product) => (
                   <ProductCard product = {product}/>
                ))
            }
        </div>
    </div>
  )
}

export default Page1
