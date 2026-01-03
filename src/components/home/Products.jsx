import React from 'react'
import products from "@/data/toys.json"
import ProductCard from '../card/ProductCard'

function Products() {
    return (
        <div>
            <h2>Products </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product, index) => <ProductCard product={product} key={index}> {product.title} </ProductCard>)}
            </div>
        </div>
    )
}

export default Products
