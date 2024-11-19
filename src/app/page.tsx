import Footer from "@/components/Footer";
import logo from '../assets/ggGif.gif'
import Image from "next/image";
import back from '../assets/backG.jpg'
import text from '../assets/text.png'

export default function Home() {
  return (
      <div className="overflow-hidden relative h-screen ">
        <Image src={back} alt="background image"  className="absolute min-w-full w-[1850px] h-[1370px] opacity-10 max-w-none"></Image>
        <header className="flex justify-center py-1 bg-sky-100" style={{width:'100%' }}>
          <div style = {{width:'100%' , position:'relative'}}  className="flex justify-center h-[50px]" > 
            <Image src={logo} alt={"loading ..."} className="w-[50px] h-[48px]" ></Image>
            {/* <Image src={text} alt={"loading ..."} className="w-[10vw] bg-sky-600 rounded-md font-bold p-1" ></Image> */}

            <h1 className="text-[38px] bg-sky-600 w-fit text-white text-bold px-2 flex justify-center items-center rounded-md font-bold">GO SOCIAL</h1>
          </div>
        </header>
        <Footer/>
      </div>
  );
}
