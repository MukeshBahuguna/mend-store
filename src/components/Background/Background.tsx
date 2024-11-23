import Image from 'next/image'
import React from 'react'
import back from '../../assets/backG.jpg'

const Background = () => {
  return (
    <Image src={back} alt="background image" className="absolute min-w-full w-[1850px] h-[1370px] opacity-10 max-w-none -z-1"></Image>
  )
}

export default Background