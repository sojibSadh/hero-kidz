import React from 'react'
// import products from "@/data/toys.json"
import ProductCard from '../card/ProductCard'
import { getProducts } from '@/actions/server/product'

const Products = async () => {
    const productAll = await getProducts();
    console.log(productAll, "proallssssssssssss");
    return (
        <div>
            <h2 className='text-center text-2xl font-semibold my-4'>Products </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {productAll.map((product, index) => <ProductCard product={product} key={index}> {product.title} </ProductCard>)}
            </div>
        </div>
    )
}

export default Products
