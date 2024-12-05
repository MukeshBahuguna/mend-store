"use client"

import { Button } from "@/components/ui/button"
import Header from '@/components/Header/Header';
import Link from "next/link";
import { useTheme } from "next-themes";
import { eThemeType } from "@/components/theme/ModeToggle";
import style from './page.module.css'

export default function Home() {
  const {theme}  = useTheme();
  const opacity = 'opacity-[0.1]';
  return (
      <>
        <div className={"relative"}>
          <div className={`bg-white bg-cover bg-center absolute h-full w-full -z-[1] ${opacity} ${style.homeHeader}`} />
          <main className="flex flex-col text-center mx-auto h-dvh">
            <Header />
          </main>
        </div>
      </>
  );
}
