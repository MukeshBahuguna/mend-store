import Link from 'next/link'
import React from 'react'
import NavButton from '@/components/Navbar/NavButton';
import { FileIcon, HomeIcon, UserRound, UsersRound } from 'lucide-react';
import { ModeToggle } from '../theme/ModeToggle';
import { Input } from '../ui/input';
import { Button } from '../ui/button';


const Header = () => {
  return (
    <header className='animate-slide bg-background h-13 p-2 border-b sticky top-0 z-20'>
      <div className='flex h-8 items-center justify-between w-full'>
        <div className='flex items-center gap-2'>
          <NavButton href="/home" label="Home" icon={HomeIcon}></NavButton>
          <Link href={'/'} className='flex justify-center items-center gap-2 ml-0' title='Home'>
            <h1 className='hidden sm:block text-xl font-bold m-0 mt-1'>
              MENDSTORE
            </h1>
          </Link>

        </div>
        <div className='flex items-center'>
          <NavButton href="/tickets" label="Tickets" icon={FileIcon}></NavButton>
          <NavButton href="/customers" label="Customers" icon={UsersRound}></NavButton>
          <ModeToggle/>
        </div>
      </div>
    </header>
  )
}

export default Header