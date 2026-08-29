import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState();

    const { id } = useParams()
    console.log(id)
    const productDetail = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            console.log(response.data)
            setProduct(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        productDetail()
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <img src={product?.images[0]} style={{ width: "50vh", height: "50vh" }} />
                <h2>{product?.title}</h2>
                <p>Price : {product?.price}</p>
                <p>Category : {product?.category}</p>
                <p>{product?.description}</p>
            </div>
        </div>
    )
}

export default ProductDetail