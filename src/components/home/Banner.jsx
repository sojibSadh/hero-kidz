import { fontBangla } from '@/app/layout'
import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex-1 space-y-5'>
        <h2 className={`${fontBangla.className} text-4xl font-bold`}> আপনার শিশুকে দিন একটি সুন্দর ভবিষ‌্যত </h2>
        <p>Buy Every toy with up to 15% Discount</p>
        <button className='btn btn-primary btn-outline'> Expore Products </button>
      </div>
      <div className='flex-1'>
        <Image src={"/assets/hero.png"}
          width={500}
          height={400}
          alt='hero img'
        />
      </div>
    </div>
  )
}

export default Banner
