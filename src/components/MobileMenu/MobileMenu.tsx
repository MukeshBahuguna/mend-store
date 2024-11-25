'use client'

import React, { useState } from 'react'
import useCustomToggle from '../Hooks/useCustomToggle';
import Link from 'next/link';

const MobileMenu = () => {
  const [openMenu , toggleMenu] = useCustomToggle(false);

 //origin -> CONCEPT IN CSS IS IMPORTAN as well FOR ROTATION CENTER
  return (
    <>
      <div className="flex flex-col justify-center gap-[4.5px] cursor-pointer h-full" onClick={toggleMenu}>
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${openMenu ? 'rotate-[45deg] ' : 'rotate-0'} origin-left ease-in-out duration-500`}></div> 
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${openMenu ? 'opacity-0' : 'opacity-1'} ease-in-out duration-500`}></div>
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${openMenu ? '-rotate-[45deg] ' : 'rotate-0'} origin-left ease-in-out duration-500`}></div>
      </div>

      {openMenu && (
        <div className='absolute left-0 top-[60px] w-full h-[calc(100vh - 96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'>
          <Link href="/" className="">Home</Link>
          <Link href="/" className="">Friends</Link>
          <Link href="/" className="">Groups</Link>
          <Link href="/" className="">Stories</Link>
          <Link href="/" className="">Login</Link>
        </div>
      )}
    </>

  )
}

export default MobileMenu

{/* <div className="flex flex-col justify-center gap-[4.5px] cursor-pointer h-full" onClick={toggleMenu}>
        {openMenu ? <ClearOutlined className='text-sky-600 text-[35px]'/> : <MenuOutlined className='text-sky-600 text-[35px]'/> }
      </div> */}