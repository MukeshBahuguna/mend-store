'use client'
import { Button, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  const theme  =useTheme();
  return (
    <footer style={{fontSize : theme.typography.fontSize}} className="flex gap-2 flex-wrap items-center justify-center absolute bottom-0 right-0 bg-sky-100 text-sky-600 w-full py-1">
        <Button 
          color='primary'
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center
           hover:bg-[#ffffff] hover:border-transparent px-4 sm:px-5"
        >
          <a href="https://nextjs.org/docs">Read our docs</a>
          
        </Button>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center
           hover:bg-[#ffffff] hover:border-transparent px-4 sm:px-5 gap-2"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            className='text-sky-600'
          />
          Learn
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center
           hover:bg-[#ffffff] hover:border-transparent px-4 sm:px-5 gap-2"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center
           hover:bg-[#ffffff] hover:border-transparent px-4 sm:px-5 gap-2"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
  )
}

export default Footer