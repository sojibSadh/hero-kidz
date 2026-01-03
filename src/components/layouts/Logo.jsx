import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
    return (
        <Link href={"/"} className='flex items-center gap-1'>
            <Image src={"/assets/logo.png"} width={50} height={40} alt='logo-hero' />
            <h2 className='text-[20px] font-bold'>HERO KIDZ</h2>
        </Link>
    )
}

export default Logo
