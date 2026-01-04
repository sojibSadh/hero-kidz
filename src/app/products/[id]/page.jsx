
import React from 'react'
import { getSingleProduct } from '@/actions/server/product';
import Image from 'next/image';

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id)

  const {
    _id,
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    description,
    sold,
  } = product;
  return (
    <div>
      <h2 className='text-center text-2xl font-semibold'>product details</h2>
      <div className='space-y-3'>
        <h2 className='text-center  font-semibold'>{title}</h2>
        <div className='text-center bg-amber-200'>
          <Image
            src={image}
            width={700}
            height={300}
            className=' mx-auto object-fit'
          />
        </div>
        <p> {description}</p>
      </div>
    </div>
  )
}

export default ProductDetails
