import ProductSkeleton from '@/components/skeleton/ProductSkeleton'
import React from 'react'

function loading() {
  return (
    <div className='text-center font-semibold'>

      {
        [...Array(12)].map((_, index) => (
          <ProductSkeleton key={index}> </ProductSkeleton>
        ))
      }
    </div>
  )
}

export default loading
