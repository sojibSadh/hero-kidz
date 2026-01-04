"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
  } = product;

  // console.log(product);
  const finalPrice = discount
    ? price - Math.round((price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      {/* Image */}
      <figure className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {discount > 0 && (
          <span className="badge badge-error absolute top-3 left-3 text-white">
            -{discount}%
          </span>
        )}
      </figure>

      {/* Body */}
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="card-title text-base font-semibold line-clamp-2">
          {title}
        </h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-yellow-400" />
          <span className="font-medium">{ratings}</span>
          <span className="text-gray-500">
            ({reviews} reviews)
          </span>
        </div>

        {/* Sold */}
        <p className="text-sm text-gray-500">
          Sold: <span className="font-medium">{sold}</span>
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-primary">
            ৳{finalPrice}
          </span>

          {discount > 0 && (
            <span className="line-through text-sm text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <div className="card-actions mt-3">
          <button className="btn btn-primary btn-sm w-full flex items-center gap-2">
            <FaShoppingCart />
            Add to Cart
          </button>
          <Link href={`products/${_id}`}> <button className='btn btn-success'> View Details </button> </Link>
          {/* <Link href={`/foods/${id}`} > View Details </Link> */}

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
