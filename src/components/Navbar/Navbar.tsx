'use client'

import logo from '../../assets/ggGif.gif'
import Image from "next/image";
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import MobileMenu from '../MobileMenu/MobileMenu';
import HeaderMenu from '../Menu/HeaderMenu';

const Navbar = () => {
    return (
        <div className='flex w-full items-center justify-between h-[58px] bg-sky-100'>
            <div className='left h-full flex items-center'>
                
            </div>

            <header className="flex justify-center py-1" style={{ width: '100%' }}>
                <div style={{ position: 'relative' }} className="flex justify-center h-[50px] group" >
                    <Image src={logo} alt={"Say hi to "} className="w-[50px] h-[48px] invisible group-hover:visible"></Image>
                    <Link href="/" className="text-[40px] w-fit text-white text-bold px-2 flex justify-center items-start rounded-md font-bold backImg">GO SOCIAL</Link>
                </div>
            </header>

            <div className='right h-full flex items-center px-2'>
                {window.innerWidth < 830 ?  <MobileMenu/>  :  <HeaderMenu/>}
            </div>
        </div>
    )
}

export default Navbar

//task yet to be done : implement dynamic responsiveness