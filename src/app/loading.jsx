import Logo from '@/components/layouts/Logo'
import React from 'react'

function loading() {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
       <h2 className='text-2xl animate-ping'>Loading</h2>
      <Logo></Logo>
    </div>
  )
}

export default loading
