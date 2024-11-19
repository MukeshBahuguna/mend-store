import Footer from "@/components/Footer";
import logo from '../assets/ggGif.gif'
import Image from "next/image";
import back from '../assets/backG.jpg'

export default function Home() {
  return (
      <>
      <Image src={back} alt="background image"  className="absolute h-full w-full opacity-10"></Image>
      <header className="flex justify-center py-1 bg-sky-100" style={{width:'100%' }}>
        <div style = {{width:'100%' , position:'relative'}}  className="flex justify-center h-[50px]" > 
          <Image src={logo} alt={"loading ..."} className="w-[50px]" ></Image>
          <h1 className="text-[40px] bg-sky-600 w-fit text-white text-bold px-2 flex justify-center items-center rounded-md font-bold">GO SOCIAL</h1>
        </div>
      </header>
      <Footer/>
      </>
  );
}
