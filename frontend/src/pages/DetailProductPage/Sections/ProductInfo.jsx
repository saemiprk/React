import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../src/store/thunkFuntions'

const ProductInfo = ({ product }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addToCart({ productId: product._id }))
    }
    return (
        <div>
            <p className='text-xl text-bold'>상품정보</p>
            <ul>
                <li><span className='font-semibold text-gray-900'>가격: </span> {product.price}</li>
                <li><span className='font-semibold text-gray-900'>팔린 개수: </span> {product.sold}</li>
                <li><span className='font-semibold text-gray-900'>설명: </span> {product.desciption}</li>
            </ul>

            <div className='mt-3'>
                <button className='w-full px-4 text-white duration-200 transform bg-black rounded-md hover:bg-gray-700' onClick={handleClick}>장바구니로</button>
            </div>
        </div>
    )
}

export default ProductInfo