import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from "next/image"
import GIF from "../../public/assets/ggGif.gif"

export const metadata = {
  title: "Page Not Found"
}

export default function NotFound() {
  return (
    <div className='flex flex-col w-[20%] mx-auto justify-center items-center h-dvh gap-10'>
        <Image className='m-0 rounded-xl'
          src={GIF}
          alt='Not Found'
          priority={true}
          title='Page Not Found' />

      <div className='px-2 flex flex-col justify-center items-end'>
        <h2>Page Not Found</h2>
        <Link href="/"> <Button>Return Home</Button></Link>

      </div>
    </div>
  )
}